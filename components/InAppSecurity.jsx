'use client';
import styles from './InAppSecurity.module.css';

const securityFeatures = [
    "ISO 27001 & SOC 2 Type II Certified",
    "Data Residency in India (AWS Mumbai region)",
    "Role-Based Access Controls with Audit Trails",
    "Deploys Across Web, Android & iOS",
    "VAPT & Penetration Testing Conducted Regularly",
    "Redaction of PII in Call Recordings & Transcripts",
    "At-Rest & In-Transit Encryption Using AES-256 & TLS 1.2+",
    "Ultra-Low Latency, Scalable Architecture"
];

export default function InAppSecurity() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Enterprise-Grade Security, Built for Trust</h2>
                </div>

                <div className={styles.grid}>
                    {securityFeatures.map((feature, i) => (
                        <div key={i} className={styles.featureItem}>
                            <span className={styles.checkIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </span>
                            <span className={styles.featureText}>{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
