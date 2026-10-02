import { NextRequest, NextResponse } from "next/server";
import { allowIssue, clientIp, createCaptcha } from "@/lib/captcha";
import { looksLikeScriptedBot } from "@/lib/botHeaders";

/**
 * Issues one image CAPTCHA: `{ token, image }`. The answer is never sent — see
 * lib/captcha.ts. Never cached (every image must be unique), and rate limited
 * per IP so a script can't pull thousands of images to farm or analyse.
 */
export async function GET(req: NextRequest) {
  if (looksLikeScriptedBot(req)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403, headers: { "Cache-Control": "no-store" } });
  }

  if (!allowIssue(clientIp(req))) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment and try again." },
      { status: 429, headers: { "Retry-After": "60", "Cache-Control": "no-store" } }
    );
  }

  const { token, image } = createCaptcha();
  return NextResponse.json({ token, image }, { headers: { "Cache-Control": "no-store" } });
}
