'use client';
import styles from './AgentMind.module.css';

export default function AgentMind() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.kicker}>THE INVISIBLE LAYER</p>
                    <h2 className={styles.heading}>Inside the Agent's Mind</h2>
                    <p className={styles.subText}>
                        A real-time view of how the AI processes, adapts, and steers every conversation toward the best possible outcome.
                    </p>
                </div>

                <div className={styles.dashboard}>
                    {/* Window Controls */}
                    <div className={styles.windowHeader}>
                        <div className={styles.dots}>
                            <span className={styles.dot} style={{ background: '#ef4444' }} />
                            <span className={styles.dot} style={{ background: '#eab308' }} />
                            <span className={styles.dot} style={{ background: '#22c55e' }} />
                        </div>
                        <div className={styles.windowTitle}>shyphan.ai — Conversational Intelligence</div>
                    </div>

                    <div className={styles.dashboardBody}>
                        {/* Column 1: Customer Insights */}
                        <div className={styles.col}>
                            <h4 className={styles.colTitle}>CUSTOMER INSIGHTS</h4>

                            <div className={styles.profileBox}>
                                <div className={styles.avatarWrap}>
                                    <img src="https://i.pravatar.cc/150?img=47" alt="Priya Sharma" className={styles.avatarImg} />
                                </div>
                                <div className={styles.profileName}>Priya Sharma</div>
                                <div className={styles.profileDesc}>Cautious Investor • Hindi Preferred</div>

                                <div className={styles.tags}>
                                    <span className={styles.tag}>DMAT Opening</span>
                                    <span className={styles.tag}>2nd Attempt</span>
                                    <span className={styles.tag}>Mobile User</span>
                                    <span className={styles.tag}>Evening Slot</span>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Live Transcript */}
                        <div className={`${styles.col} ${styles.colMid}`}>
                            <h4 className={styles.colTitle}>LIVE TRANSCRIPT</h4>

                            <div className={styles.chatStream}>
                                {/* Agent Msg 1 */}
                                <div className={styles.msgLine}>
                                    <div className={styles.msgMeta}>AGENT • HINGLISH</div>
                                    <div className={`${styles.msgBubble} ${styles.msgAgent}`}>
                                        नमस्ते Priya जी, I'm calling about your DMAT account — I see you started the process last week...
                                    </div>
                                </div>

                                {/* Customer Msg */}
                                <div className={styles.msgLine}>
                                    <div className={styles.msgMeta}>CUSTOMER</div>
                                    <div className={`${styles.msgBubble} ${styles.msgUser}`}>
                                        हाँ, but I'm in a rush right now, can you make it quick?
                                    </div>
                                </div>

                                {/* Agent Msg 2 */}
                                <div className={styles.msgLine}>
                                    <div className={styles.msgMeta}>AGENT • SPEED INCREASES</div>
                                    <div className={`${styles.msgBubble} ${styles.msgAgent}`}>
                                        Absolutely — just two quick things to complete and you're all set. First, I need to confirm your PAN details...
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Intelligence Feed */}
                        <div className={styles.col}>
                            <h4 className={styles.colTitle}>INTELLIGENCE FEED</h4>

                            {/* Progress Bars */}
                            <div className={styles.progressBlock}>
                                <div className={styles.progressRow}>
                                    <span>Conversion Probability</span>
                                </div>
                                <div className={styles.progressBar}>
                                    <div className={styles.progressFill} style={{ width: '78%' }} />
                                </div>
                                <div className={styles.progressStat}>78% ↑</div>
                            </div>

                            <div className={styles.progressBlock}>
                                <div className={styles.progressRow}>
                                    <span>Engagement Score</span>
                                </div>
                                <div className={styles.progressBar}>
                                    <div className={styles.progressFill} style={{ width: '52%' }} />
                                </div>
                                <div className={styles.progressStat}>52% ↘</div>
                            </div>

                            {/* Alert Cards */}
                            <div className={styles.alertCard}>
                                <div className={styles.alertHeader}>
                                    <span className={styles.alertIcon}>🧠</span> Classification
                                </div>
                                <div className={styles.alertBody}>
                                    User appears to be in a rush; increase the speech rate
                                </div>
                            </div>

                            <div className={`${styles.alertCard} ${styles.actionCard}`}>
                                <div className={styles.alertHeader}>
                                    <span className={styles.alertIcon}>⚡</span> Action
                                </div>
                                <div className={styles.alertBody}>
                                    Increase the speech rate for the user by 1.25x
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
