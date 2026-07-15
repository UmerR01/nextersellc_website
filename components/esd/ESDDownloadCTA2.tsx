import styles from "./ESDDownloadCTA2.module.css";

export default function ESDDownloadCTA2() {
  return (
    <section id="quick-playbook-selecting-an-enterprise-development-partner-pdf" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.textCol}>
            <h2 className={styles.title}>
              Quick playbook: selecting an enterprise development partner [pdf]
            </h2>
            <p className={styles.desc}>
              Get a free playbook that will help you find the right enterprise software development partner. No email required.
            </p>
          </div>
          <div className={styles.btnCol}>
            <a href="#" className={`btn btn-accent ${styles.btn}`} target="_blank" rel="noopener noreferrer" aria-label="Download">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.50001 12V3.75001C4.50001 3.5511 4.5 3 4.5 3C4.5 3 5.0511 3.00001 5.25001 3.00001H14.25L19.5 8.25001V12" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
                <path d="M13.793 3V8.25H19.043" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
                <path d="M4.5 18.75H6C6.39782 18.75 6.77936 18.592 7.06066 18.3107C7.34196 18.0294 7.5 17.6478 7.5 17.25C7.5 16.8522 7.34196 16.4706 7.06066 16.1893C6.77936 15.908 6.39782 15.75 6 15.75H4.5V20.25" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
                <path d="M20.25 15.75H17.625V20.25" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
                <path d="M19.875 18.375H17.625" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
                <path d="M12 20.25C12.5967 20.25 13.169 20.0129 13.591 19.591C14.0129 19.169 14.25 18.5967 14.25 18C14.25 17.4033 14.0129 16.831 13.591 16.409C13.169 15.9871 12.5967 15.75 12 15.75H10.6875V20.25H12Z" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
