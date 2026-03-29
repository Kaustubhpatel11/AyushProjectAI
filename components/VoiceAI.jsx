import styles from './VoiceAI.module.css';

const features = [
    {
        icon: '🤖',
        title: 'Humanlike support that elevates trust & satisfaction',
        position: 'left',
    },
    {
        icon: '⚡',
        title: 'Accelerates decisions & boosts journey completion',
        position: 'topRight',
    },
    {
        icon: '🎯',
        title: 'Higher-quality conversions at a lower cost',
        position: 'bottomRight',
    },
];

export default function VoiceAI() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>
                    Create Frictionless Digital Journeys with Voice AI
                </h2>
                <p className={styles.subtext}>
                    Resolve queries instantly in your website &amp; apps and drive conversions with{' '}
                    <a href="#" className={styles.link}>India&apos;s most human-sounding Voice AI.</a>
                </p>

                {/* Illustration Area */}
                <div className={styles.illusWrapper}>
                    <div className={styles.bgBlob} />

                    {/* Browser Mockup */}
                    <div className={styles.browserMock}>
                        <div className={styles.browserBar}>
                            <div className={styles.bDots}>
                                <span className={styles.bDot} style={{ background: '#ff5f57' }} />
                                <span className={styles.bDot} style={{ background: '#febc2e' }} />
                                <span className={styles.bDot} style={{ background: '#28c840' }} />
                            </div>
                            <div className={styles.bUrl}>shyphan.ai/voice</div>
                        </div>
                        <div className={styles.browserContent}>
                            <div className={styles.mockHeader}>
                                <div className={styles.mockNav} />
                                <div className={styles.mockHero}>
                                    <div className={styles.mockHeroText}>The Future of<br />Customer Experience</div>
                                    <div className={styles.mockHeroTag}>AI POWERED</div>
                                </div>
                            </div>
                            {/* AI Call Widget inside browser */}
                            <div className={styles.callWidget}>
                                <div className={styles.callAvatar}>
                                    <div className={styles.callAvatarInner}>AI</div>
                                </div>
                                <div className={styles.callInfo}>
                                    <div className={styles.callName}>Humanoid AI Agent</div>
                                    <div className={styles.callTimer}>00:00</div>
                                </div>
                                <button className={styles.callEndBtn}>📞</button>
                            </div>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    {features.map((f) => (
                        <div key={f.position} className={`${styles.featureCard} ${styles[f.position]}`}>
                            <span className={styles.featureIcon}>{f.icon}</span>
                            <span className={styles.featureTitle}>{f.title}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaRow}>
                    <a href="#" className={styles.ctaBtn}>Book a Demo →</a>
                </div>
            </div>
        </section>
    );
}
