'use client';
import styles from './AgentMgmtCTA.module.css';
import Link from 'next/link';

export default function AgentMgmtCTA() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Revolutionize Your Sales Process Today!</h2>
                    <p className={styles.subtext}>
                        Join top brands using shyphan to scale their outreach and improve conversion rates without the overhead of traditional call centers.
                    </p>
                    <Link href="#" className={styles.ctaButton}>
                        Book a Demo
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                </div>

                {/* Decorative background elements matching the tech/saas aesthetic */}
                <div className={styles.glowBlob}></div>
                <div className={styles.gridOverlay}></div>
            </div>
        </section>
    );
}
