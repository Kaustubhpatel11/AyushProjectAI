'use client';
import styles from './HumanoidHero.module.css';

export default function HumanoidHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.headline}>
                        Revenue-Driven AI Agents <br />
                        that <span className={styles.highlight}>Retain</span> at Scale
                    </h1>
                    <p className={styles.subText}>
                        Intelligent Lead Prioritization, Hyper-Personalized Outreach, 2x Connectivity <br />
                        and 100% Compliance in <strong>One Enterprise-Grade AI Stack.</strong>
                    </p>
                </div>

                {/* Video Mockup Card */}
                <div className={styles.videoCard}>
                    {/* Audio Icon overlay */}
                    <div className={styles.audioControls}>
                        <div className={styles.speakerIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                            </svg>
                        </div>
                    </div>

                    <div className={styles.videoContent}>
                        <h3 className={styles.videoText}>You can't tell it apart from a human.</h3>
                    </div>

                    {/* Subtitle Bar */}
                    <div className={styles.captionBar}>
                        <div className={styles.captionText}>It has been trained on nearly six hundred million minutes of</div>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <h2 className={styles.bottomHeading}>Experience the <span className={styles.highlight}>Humanoid AI Agent Stack</span></h2>
                    <div className={styles.actions}>
                        <button className={styles.ctaPrimary}>Book a Demo →</button>
                        <button className={styles.ctaSecondary}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                            Listen to the Call →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
