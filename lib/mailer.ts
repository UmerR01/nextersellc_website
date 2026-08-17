import nodemailer from "nodemailer";
import crypto from "crypto";

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransporter() {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP is not configured — set SMTP_HOST, SMTP_USER, and SMTP_PASS.");
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });

  return transporter;
}

const COMPANY_NAME = "Nexterse LLC";

export type MailAttachment = {
  filename: string;
  content: Buffer;
  contentType?: string;
};

export type FormField = {
  label: string;
  value: string;
};

/**
 * Sends the two emails every form on the site needs:
 *  1. An internal notification to CONTACT_TO_EMAIL, rendered from the branded
 *     template below — dynamic, so it fits any form's field list (name/email
 *     plus whatever else that form collects: message, position, quiz answers…).
 *  2. An auto-reply to the submitter confirming their request was received.
 *
 * `highlightLabel` picks which field (case-insensitive) gets rendered as the
 * large quoted block, matching the "Message" treatment in the source design —
 * defaults to "Message" but forms can point it at "Cover letter" etc.
 */
export async function sendFormEmails({
  formName,
  fields,
  submitterEmail,
  submitterName,
  attachments,
  sourceUrl,
  highlightLabel = "Message",
}: {
  formName: string;
  fields: FormField[];
  submitterEmail: string;
  submitterName: string;
  attachments?: MailAttachment[];
  sourceUrl?: string;
  highlightLabel?: string;
}) {
  const mailer = getTransporter();
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER!;
  const to = process.env.CONTACT_TO_EMAIL ?? process.env.SMTP_USER!;

  // Name/Email are always rendered in the dedicated "From" / "Email" blocks up
  // top, so strip them out of the dynamic field list to avoid showing them twice.
  const detailFields = fields.filter(
    (f) => !["name", "email"].includes(f.label.trim().toLowerCase())
  );
  const highlight = detailFields.find(
    (f) => f.label.trim().toLowerCase() === highlightLabel.trim().toLowerCase()
  );
  const restFields = detailFields.filter((f) => f !== highlight);

  const now = new Date();
  const submissionId = buildSubmissionId(now);
  const submittedDate = now.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  const submittedTime = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });

  const templateData: NotificationData = {
    formName,
    submitterName,
    submitterEmail,
    restFields,
    highlight,
    attachments,
    submissionId,
    sourceUrl: sourceUrl || "nexterse.com",
    submittedDate,
    submittedTime,
  };

  await mailer.sendMail({
    from,
    to,
    replyTo: submitterEmail,
    subject: `New ${formName} submission from ${submitterName}`,
    text: buildNotificationText(templateData),
    html: buildNotificationHtml(templateData),
    attachments,
  });

  await mailer.sendMail({
    from,
    to: submitterEmail,
    subject: `We've received your request — ${COMPANY_NAME}`,
    text: `Hi ${submitterName},\n\nThanks for reaching out to ${COMPANY_NAME}. Your request has been received and our team will get back to you shortly.\n\nBest,\n${COMPANY_NAME}`,
    html: buildAutoReplyHtml(submitterName),
  });
}

/** Converts a FormData file entry into a Nodemailer attachment, if present. */
export async function fileToAttachment(entry: FormDataEntryValue | null): Promise<MailAttachment | undefined> {
  if (!entry || typeof entry === "string" || entry.size === 0) return undefined;
  const buffer = Buffer.from(await entry.arrayBuffer());
  return { filename: entry.name, content: buffer, contentType: entry.type || undefined };
}

function buildSubmissionId(date: Date) {
  const y = date.getFullYear().toString().slice(-2);
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const rand = crypto.randomBytes(3).toString("hex").toUpperCase();
  return `NX-${y}${m}${d}-${rand}`;
}

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function fileExt(filename: string) {
  const parts = filename.split(".");
  return parts.length > 1 ? parts[parts.length - 1]!.slice(0, 4).toUpperCase() : "FILE";
}

type NotificationData = {
  formName: string;
  submitterName: string;
  submitterEmail: string;
  restFields: FormField[];
  highlight: FormField | undefined;
  attachments: MailAttachment[] | undefined;
  submissionId: string;
  sourceUrl: string;
  submittedDate: string;
  submittedTime: string;
};

function buildNotificationText({
  formName,
  submitterName,
  submitterEmail,
  restFields,
  highlight,
  attachments,
  submissionId,
  sourceUrl,
  submittedDate,
  submittedTime,
}: NotificationData) {
  const lines = [
    `New ${formName} submission`,
    "",
    `From: ${submitterName}`,
    `Email: ${submitterEmail}`,
  ];
  for (const f of restFields) lines.push(`${f.label}: ${f.value}`);
  if (highlight) lines.push("", `${highlight.label}:`, highlight.value);
  if (attachments?.length) {
    lines.push("", "Attachments:");
    for (const a of attachments) lines.push(`- ${a.filename}`);
  }
  lines.push("", `Submission ID ${submissionId} · Sent from ${sourceUrl} · ${submittedDate} ${submittedTime}`);
  return lines.join("\n");
}

function buildNotificationHtml({
  formName,
  submitterName,
  submitterEmail,
  restFields,
  highlight,
  attachments,
  submissionId,
  sourceUrl,
  submittedDate,
  submittedTime,
}: NotificationData) {
  const detailRowsHtml = restFields
    .map(
      (f) => `
                  <tr>
                    <td class="pad-mobile" style="padding: 16px 32px 0 32px;">
                      <p class="mono txt-mute" style="margin:0 0 4px 0; font-size:11px; letter-spacing:1.5px; text-transform:uppercase;">${escapeHtml(f.label)}</p>
                      <p class="sans txt-navy" style="margin:0; font-size:15px; line-height:1.5; white-space:pre-wrap;">${escapeHtml(f.value) || "&mdash;"}</p>
                    </td>
                  </tr>`
    )
    .join("");

  const highlightHtml = highlight
    ? `
                  <tr>
                    <td class="pad-mobile" style="padding: 24px 32px 0 32px;">
                      <div class="hairline" style="border-top:1px solid #E7E8E2; font-size:0; line-height:0;">&nbsp;</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="pad-mobile" style="padding: 24px 32px 0 32px;">
                      <p class="mono txt-mute" style="margin:0 0 10px 0; font-size:11px; letter-spacing:1.5px; text-transform:uppercase;">${escapeHtml(highlight.label)}</p>
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td width="3" style="background-color:#3CC4E5; font-size:0; line-height:0;">&nbsp;</td>
                          <td style="padding: 2px 0 2px 16px;">
                            <p class="sans txt-slate" style="margin:0; font-size:15px; line-height:1.65; white-space:pre-wrap;">${escapeHtml(highlight.value)}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>`
    : "";

  const attachmentsHtml = attachments?.length
    ? attachments
        .map(
          (a) => `
                  <tr>
                    <td class="pad-mobile" style="padding: 24px 32px 0 32px;">
                      <p class="mono txt-mute" style="margin:0 0 10px 0; font-size:11px; letter-spacing:1.5px; text-transform:uppercase;">Attachment</p>
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#F6F7F3; border:1px solid #E7E8E2; border-radius:8px;">
                        <tr>
                          <td width="44" align="center" valign="middle" style="padding: 12px 0 12px 16px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                              <tr>
                                <td width="32" height="32" align="center" valign="middle" style="background-color:#2B2A6D; border-radius:6px; font-family:Arial, Helvetica, sans-serif; color:#FFFFFF; font-size:11px; font-weight:bold;">
                                  ${escapeHtml(fileExt(a.filename))}
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td valign="middle" style="padding: 12px 12px;">
                            <p class="sans txt-navy" style="margin:0; font-size:14px; font-weight:bold; line-height:1.4;">${escapeHtml(a.filename)}</p>
                            <p class="mono txt-mute" style="margin:2px 0 0 0; font-size:12px;">${formatFileSize(a.content.length)}</p>
                          </td>
                          <td align="right" valign="middle" style="padding: 12px 16px 12px 0;">
                            <span class="sans txt-mute" style="font-size:12px; white-space:nowrap;">Attached to this email</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>`
        )
        .join("")
    : "";

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="color-scheme" content="light" />
<meta name="supported-color-schemes" content="light" />
<title>New ${escapeHtml(formName)} submission</title>
<!--[if mso]>
<noscript>
<xml>
<o:OfficeDocumentSettings>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
</noscript>
<style>
  table {border-collapse:collapse;}
  td,th,div,p,a,h1,h2,h3 {font-family: Arial, Helvetica, sans-serif;}
</style>
<![endif]-->
<style>
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  body { margin: 0; padding: 0; width: 100% !important; height: 100% !important; background-color: #EEF0EC; }

  .bg-body   { background-color: #EEF0EC; }
  .card      { background-color: #FFFFFF; border: 1px solid #E1E3DD; }
  .navy      { background-color: #2B2A6D; }
  .amber     { background-color: #3CC4E5; }
  .txt-navy  { color: #2B2A6D; }
  .txt-slate { color: #5B6472; }
  .txt-mute  { color: #8A93A0; }
  .txt-amber { color: #3CC4E5; }
  .hairline  { border-top: 1px solid #E7E8E2; }
  .mono      { font-family: 'Courier New', Courier, monospace; }
  .sans      { font-family: Arial, Helvetica, sans-serif; }

  @media screen and (max-width: 600px) {
    .wrapper { width: 100% !important; }
    .fluid   { width: 100% !important; max-width: 100% !important; }
    .pad-mobile { padding-left: 20px !important; padding-right: 20px !important; }
  }
</style>
</head>
<body class="bg-body" style="margin:0; padding:0; background-color:#EEF0EC;">

  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#EEF0EC;">
    New ${escapeHtml(formName)} submission from ${escapeHtml(submitterName)} &nbsp;&nbsp;&#8203;&nbsp;&nbsp;&#8203;&nbsp;&nbsp;&#8203;&nbsp;&nbsp;&#8203;&nbsp;&nbsp;&#8203;
  </div>

  <center class="bg-body" style="width:100%; background-color:#EEF0EC;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="bg-body">
      <tr>
        <td align="center" style="padding: 32px 16px;">

          <table role="presentation" class="wrapper" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px; max-width:600px;">

            <!-- Header -->
            <tr>
              <td class="navy" style="background-color:#2B2A6D; border-radius:10px 10px 0 0; padding: 28px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td valign="middle">
                      <p class="sans txt-amber" style="margin:0 0 6px 0; font-size:11px; letter-spacing:2px; font-weight:bold; text-transform:uppercase;">
                        New submission
                      </p>
                      <h1 class="sans" style="margin:0; color:#FFFFFF; font-size:24px; line-height:1.3; font-weight:bold;">
                        ${escapeHtml(formName)}
                      </h1>
                      <p class="sans" style="margin:6px 0 0 0; color:#AEB6C4; font-size:13px; line-height:1.5;">
                        Received via the website's ${escapeHtml(formName.toLowerCase())} form
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Body card -->
            <tr>
              <td class="card" style="background-color:#FFFFFF; border-left:1px solid #E1E3DD; border-right:1px solid #E1E3DD;">

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">

                  <!-- Name -->
                  <tr>
                    <td class="pad-mobile" style="padding: 28px 32px 0 32px;">
                      <p class="mono txt-mute" style="margin:0 0 4px 0; font-size:11px; letter-spacing:1.5px; text-transform:uppercase;">From</p>
                      <p class="sans txt-navy" style="margin:0; font-size:18px; font-weight:bold; line-height:1.4;">${escapeHtml(submitterName)}</p>
                    </td>
                  </tr>

                  <!-- Email -->
                  <tr>
                    <td class="pad-mobile" style="padding: 16px 32px 0 32px;">
                      <p class="mono txt-mute" style="margin:0 0 4px 0; font-size:11px; letter-spacing:1.5px; text-transform:uppercase;">Email</p>
                      <p class="sans" style="margin:0; font-size:15px; line-height:1.4;">
                        <a href="mailto:${escapeHtml(submitterEmail)}" style="color:#2B2A6D; text-decoration:underline;">${escapeHtml(submitterEmail)}</a>
                      </p>
                    </td>
                  </tr>

                  ${restFields.length ? `<tr><td class="pad-mobile" style="padding: 24px 32px 0 32px;"><div class="hairline" style="border-top:1px solid #E7E8E2; font-size:0; line-height:0;">&nbsp;</div></td></tr>` : ""}
                  ${detailRowsHtml}
                  ${highlightHtml}
                  ${attachmentsHtml}

                  <!-- CTA -->
                  <tr>
                    <td class="pad-mobile" align="left" style="padding: 32px 32px 32px 32px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td class="amber" align="center" style="background-color:#3CC4E5; border-radius:6px;">
                            <a href="mailto:${escapeHtml(submitterEmail)}?subject=Re:%20Your%20${encodeURIComponent(formName)}%20submission%20to%20${encodeURIComponent(COMPANY_NAME)}"
                               class="sans"
                               style="display:inline-block; padding: 13px 26px; font-size:14px; font-weight:bold; color:#FFFFFF; text-decoration:none;">
                              Reply to ${escapeHtml(submitterName)}
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color:#FFFFFF; border:1px solid #E1E3DD; border-top:none; border-radius:0 0 10px 10px; padding: 18px 32px 26px 32px;">
                <p class="mono txt-mute" style="margin:0; font-size:11px; line-height:1.7;">
                  SUBMISSION ID ${escapeHtml(submissionId)} &nbsp;&middot;&nbsp; SENT FROM ${escapeHtml(sourceUrl)} &nbsp;&middot;&nbsp; ${escapeHtml(submittedDate)} ${escapeHtml(submittedTime)}
                </p>
              </td>
            </tr>

            <tr>
              <td align="center" style="padding: 20px 12px 0 12px;">
                <p class="sans txt-mute" style="margin:0; font-size:12px; line-height:1.6;">
                  This is an automated notification from the ${escapeHtml(formName.toLowerCase())} form on ${escapeHtml(COMPANY_NAME)}'s website.
                </p>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </center>

</body>
</html>`;
}

function buildAutoReplyHtml(submitterName: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="color-scheme" content="light" />
<meta name="supported-color-schemes" content="light" />
<title>We've received your request</title>
<style>
  body { margin:0; padding:0; background-color:#EEF0EC; }
  @media screen and (max-width: 600px) {
    .wrapper { width: 100% !important; }
    .pad-mobile { padding-left: 20px !important; padding-right: 20px !important; }
  }
</style>
</head>
<body style="margin:0; padding:0; background-color:#EEF0EC;">
  <center style="width:100%; background-color:#EEF0EC;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 32px 16px;">
          <table role="presentation" class="wrapper" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px; max-width:600px;">
            <tr>
              <td style="background-color:#2B2A6D; border-radius:10px 10px 0 0; padding: 28px 32px;">
                <h1 style="margin:0; color:#FFFFFF; font-family:Arial,Helvetica,sans-serif; font-size:22px; font-weight:bold;">Thanks for reaching out</h1>
              </td>
            </tr>
            <tr>
              <td class="pad-mobile" style="background-color:#FFFFFF; border:1px solid #E1E3DD; border-top:none; border-radius:0 0 10px 10px; padding: 28px 32px 32px 32px;">
                <p style="margin:0 0 12px 0; font-family:Arial,Helvetica,sans-serif; font-size:16px; font-weight:bold; color:#2B2A6D;">Hi ${escapeHtml(submitterName)},</p>
                <p style="margin:0 0 12px 0; font-family:Arial,Helvetica,sans-serif; font-size:15px; line-height:1.6; color:#5B6472;">
                  Thanks for reaching out to ${escapeHtml(COMPANY_NAME)}. Your request has been received and our team will get back to you shortly.
                </p>
                <p style="margin:0; font-family:Arial,Helvetica,sans-serif; font-size:15px; line-height:1.6; color:#5B6472;">
                  Best,<br/>${escapeHtml(COMPANY_NAME)}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </center>
</body>
</html>`;
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
