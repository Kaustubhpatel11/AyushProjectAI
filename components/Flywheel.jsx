'use client';
import styles from './Flywheel.module.css';

export default function Flywheel() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.kicker}>THE FLYWHEEL</p>
                    <h2 className={styles.heading}>Every Interaction Makes the Next One Smarter</h2>
                    <p className={styles.subText}>
                        Built on 300M+ minutes of real conversations, the system learns from every interaction so new campaigns skip the cold start entirely.
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Card 1: Learn */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Learn</h3>
                        <p className={styles.cardDesc}>
                            Every interaction captures what actually worked — the <strong>right greeting</strong>, the <strong>right time</strong>, the <strong>right objection response</strong> — across millions of real outcomes.
                        </p>

                        <div className={styles.flowBox}>
                            <div className={styles.pillRow}>
                                <span className={styles.pill}><span className={styles.icon}>💬</span> Hindi Greeting</span>
                                <span className={styles.pill}><span className={styles.icon}>🕗</span> Evening Call</span>
                            </div>
                            <div className={styles.flowNode}>Simplified KYC Flow</div>
                            <div className={styles.arrowDown}>↓</div>
                            <div className={`${styles.flowNode} ${styles.highlightNode}`}>
                                3.2x Higher DMAT Conversion
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Match */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Match</h3>
                        <p className={styles.cardDesc}>
                            New lead comes in. The system instantly finds the closest patterns from <strong>similar past customers</strong> and loads the <strong>highest-converting strategy</strong>. No ramp-up. No guesswork.
                        </p>

                        <div className={styles.flowBox}>
                            <div className={styles.flowLabel}>New Lead in Pune</div>
                            <div className={styles.pillRow}>
                                <span className={styles.pill}><span className={styles.icon}>👤</span> 28, F</span>
                                <span className={styles.pill}><span className={styles.icon}>🔎</span> Browsed Mutual Funds</span>
                            </div>
                            <div className={styles.flowNode}>Matched to 14k Similar Profiles</div>
                            <div className={styles.arrowDown}>↓</div>
                            <div className={`${styles.flowNode} ${styles.highlightNode}`}>
                                Best Script Selected
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Compound */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Compound</h3>
                        <p className={styles.cardDesc}>
                            Better outcomes attract <strong>more volume</strong>. More volume means <strong>more signal</strong>. Campaign 10 outperforms Campaign 1 by a wide margin - without anyone touching a setting.
                        </p>

                        <div className={styles.flowBox}>
                            <div className={styles.flowNode}>System Accumulates Interaction Data</div>
                            <div className={styles.flowNode}>Performance Compounds</div>
                            <div className={styles.arrowDown}>↓</div>
                            <div className={`${styles.flowNode} ${styles.highlightNode}`}>
                                Campaign ROI Improves by 15-30% MoM
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
