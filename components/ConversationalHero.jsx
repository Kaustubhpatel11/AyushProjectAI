'use client';
import styles from './ConversationalHero.module.css';

export default function ConversationalHero() {
    return (
        <section className={styles.hero}>
            {/* Background elements */}
            <div className={styles.auroraBlob1} aria-hidden="true" />
            <div className={styles.auroraBlob2} aria-hidden="true" />

            {/* Abstract dotted faces on sides */}
            <div className={styles.leftVisual}>
                <div className={styles.abstractFaceLeft} />
            </div>
            <div className={styles.rightVisual}>
                <div className={styles.abstractFaceRight} />
            </div>

            <div className={styles.content}>
                <div className={styles.badge}>
                    World's First <span className={styles.sparkles}>✨</span>
                </div>
                <h1 className={styles.headline}>
                    Conversational<br />
                    Superintelligence™
                </h1>
                <p className={styles.subText}>
                    So your outbound calls don't get blocked as spam, your scripts don't feel generic, and your campaigns don't start cold. This layer fixes all three with 300M+ minutes of real conversational data behind every decision.
                </p>
                <div className={styles.actions}>
                    <button className={styles.ctaBtn}>Book a Demo →</button>
                </div>
            </div>
        </section>
    );
}
