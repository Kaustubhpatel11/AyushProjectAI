import styles from './SecuritySection.module.css';

const badges = [
    { text: 'ISO 27001 & SOC 2 Type II Certified', col: 'left' },
    { text: 'VAPT & Penetration Testing Conducted Regularly', col: 'right' },
    { text: 'Data Residency in India (AWS Mumbai region)', col: 'left' },
    { text: 'Redaction of PII in Call Recordings & Transcripts + Agents', col: 'right' },
    { text: 'Role-Based Access Controls with Audit Trails', col: 'left' },
    { text: 'At-Rest & In-Transit Encryption Using AES-256 & TLS 1.2+', col: 'right' },
];

export default function SecuritySection() {
    const leftBadges = badges.filter(b => b.col === 'left');
    const rightBadges = badges.filter(b => b.col === 'right');

    return (
        <section className={styles.section}>
            <div className={styles.binaryBg} aria-hidden="true">
                {Array.from({ length: 80 }).map((_, i) => (
                    <span key={i} className={styles.bit} style={{
                        left: `${(i * 13.1) % 100}%`,
                        top: `${(i * 7.3) % 100}%`,
                        opacity: 0.04 + (i % 5) * 0.02,
                        fontSize: `${10 + (i % 3) * 2}px`
                    }}>{i % 2}</span>
                ))}
            </div>

            <div className={styles.container}>
                <h2 className={styles.heading}>Enterprise-Grade Security, Built for Trust</h2>

                <div className={styles.layout}>
                    {/* Left column */}
                    <div className={styles.col}>
                        {leftBadges.map((b) => (
                            <div key={b.text} className={styles.badge}>
                                <span className={styles.check}>✓</span>
                                <span>{b.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Center Padlock */}
                    <div className={styles.padlockWrapper}>
                        <div className={styles.padlock}>
                            <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                                <circle cx="36" cy="36" r="36" fill="rgba(124,58,237,0.15)" />
                                <rect x="20" y="33" width="32" height="24" rx="6" stroke="#a78bfa" strokeWidth="2" fill="none" />
                                <path d="M24 33V26a12 12 0 0124 0v7" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" fill="none" />
                                <circle cx="36" cy="43" r="4" fill="#a78bfa" />
                                <line x1="36" y1="47" x2="36" y2="52" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className={styles.col}>
                        {rightBadges.map((b) => (
                            <div key={b.text} className={styles.badge}>
                                <span className={styles.check}>✓</span>
                                <span>{b.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
