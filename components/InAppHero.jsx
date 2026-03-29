'use client';
import styles from './InAppHero.module.css';

export default function InAppHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.headline}>
                        Convert Browsing into Buying with <br />
                        <span className={styles.highlight}>In-App Voice AI Assistant</span>
                    </h1>
                    <p className={styles.subText}>
                        Engage users in real-time voice interactions that answer questions, guide decisions, <br />
                        and nudge them toward conversion.
                    </p>
                </div>

                <div className={styles.mockupContainer}>
                    <div className={styles.browserBar}>
                        <div className={styles.browserDots}>
                            <span className={styles.dot} style={{ background: '#ef4444' }} />
                            <span className={styles.dot} style={{ background: '#eab308' }} />
                            <span className={styles.dot} style={{ background: '#22c55e' }} />
                        </div>
                        <div className={styles.browserUrl}>shyphan.ai</div>
                    </div>

                    <div className={styles.videoCard}>
                        {/* Play overlay button */}
                        <div className={styles.playOverlay}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                        </div>

                        <div className={styles.videoContent}>
                            <div className={styles.logoMark}>
                                <span className={styles.logoIcon}>❖</span> shyphan.ai
                            </div>
                            <h2 className={styles.videoTitle}>
                                Orchestrate Frictionless <br /> Digital Journeys with <br /> In-App Voice AI Assistant
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
