import styles from './HumanLikeAI.module.css';

const features = [
    'Live Human Handoff',
    'Intelligent Outcome Extraction',
    'Loop Free Interactions',
    'Interruption Handling',
    '360-degree Context Awareness',
    'Language Switching',
    'Real-time Sentiment Analysis',
    'Multi-turn Conversations',
    'Adaptive Tone Matching',
    'Zero Jailbreaking',
];

const doubled = [...features, ...features];

export default function HumanLikeAI() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.container}>
                    <p className={styles.validated}>Validated by the Turing Test</p>
                    <h2 className={styles.heading}>
                        India&apos;s First Truly Human-Like AI for CX
                    </h2>

                    {/* Video/Demo Placeholder */}
                    <div className={styles.videoCard}>
                        <div className={styles.videoHeader}>
                            <div className={styles.dots}>
                                <span className={styles.dot} style={{ background: '#ff5f57' }} />
                                <span className={styles.dot} style={{ background: '#febc2e' }} />
                                <span className={styles.dot} style={{ background: '#28c840' }} />
                            </div>
                            <div className={styles.videoLogo}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <rect x="1" y="1" width="6" height="6" rx="1.5" fill="#a78bfa" />
                                    <rect x="9" y="1" width="6" height="6" rx="1.5" fill="#a78bfa" opacity="0.7" />
                                    <rect x="1" y="9" width="6" height="6" rx="1.5" fill="#a78bfa" opacity="0.7" />
                                    <rect x="9" y="9" width="6" height="6" rx="1.5" fill="#a78bfa" opacity="0.4" />
                                </svg>
                                <span>shyphan.ai</span>
                            </div>
                            <button className={styles.soundBtn}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M3 6.5H6L9 3v12L6 11.5H3V6.5Z" fill="#fff" />
                                    <path d="M12 5.5C13.5 6.5 14.5 7.8 14.5 9s-1 2.5-2.5 3.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                        <div className={styles.videoBody}>
                            <div className={styles.waveform}>
                                {[16, 28, 22, 36, 30, 20, 38, 24, 32, 18, 34, 26, 36, 20, 28, 38, 22, 30, 24, 18].map((h, i) => (
                                    <div key={i} className={styles.bar} style={{ animationDelay: `${(i * 0.08).toFixed(2)}s`, height: `${h}px` }} />
                                ))}
                            </div>
                            <div className={styles.subtitle}>
                                &ldquo;That&apos;s because most of them sound robotic,&rdquo;
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Ticker */}
            <div className={styles.featureTicker}>
                <div className={styles.tickerTrack}>
                    {doubled.map((f, i) => (
                        <span key={i} className={styles.featureItem}>
                            <span className={styles.star}>✦</span>
                            {f}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
