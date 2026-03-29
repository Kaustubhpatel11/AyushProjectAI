'use client';
import styles from './CallQualityAnalytics.module.css';

export default function CallQualityAnalytics() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Left Text Content */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>Unlock actionable insights with AI-powered call quality analytics</h2>
                    <p className={styles.description}>
                        Easily analyze groups of calls by agents, lead sources, call duration, dispositions, accurate transcripts and more with customizable filters to drive better sales and customer experience.
                    </p>
                </div>

                {/* Right UI Graphic Setup */}
                <div className={styles.graphicWrapper}>
                    <div className={styles.filterCard}>
                        <div className={styles.filterHeader}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                            Filters Applied
                        </div>
                        <div className={styles.pillsContainer}>
                            <div className={styles.pill}>Agent: shyx <span className={styles.close}>✕</span></div>
                            <div className={styles.pill}>Score: &lt; 80% <span className={styles.close}>✕</span></div>
                            <div className={styles.pill}>Tag: Objection Handling <span className={styles.close}>✕</span></div>
                        </div>

                        <div className={styles.insightBox}>
                            <div className={styles.insightTop}>
                                <div className={styles.insightAvatar}></div>
                                <div>
                                    <div className={styles.insightName}>Call ID #9842A</div>
                                    <div className={styles.insightSub}>Duration: 12m 45s</div>
                                </div>
                                <div className={styles.insightScoreBadge}>Score: 72%</div>
                            </div>
                            <div className={styles.insightText}>
                                <span className={styles.aiBadge}>AI Insight</span>
                                Agent struggled with pricing objection at 04:12. Recommend reviewing Objection Handling Module 3.
                            </div>
                        </div>

                        <div className={styles.insightBox} style={{ opacity: 0.7 }}>
                            <div className={styles.insightTop}>
                                <div className={styles.insightAvatar}></div>
                                <div>
                                    <div className={styles.insightName}>Call ID #9842B</div>
                                    <div className={styles.insightSub}>Duration: 08m 10s</div>
                                </div>
                                <div className={styles.insightScoreBadge} style={{ background: '#fef08a', color: '#854d0e' }}>Score: 85%</div>
                            </div>
                            <div className={styles.insightText}>
                                <span className={styles.aiBadge}>AI Insight</span>
                                Excellent rapport building. Missed secondary cross-sell opportunity.
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
