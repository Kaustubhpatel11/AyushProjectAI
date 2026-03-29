'use client';
import styles from './AgentMgmtHero.module.css';
import Link from 'next/link';

export default function AgentMgmtHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>

                {/* Left Text Content */}
                <div className={styles.textContent}>
                    <div className={styles.label}>AGENT MANAGEMENT PLATFORM</div>
                    <h1 className={styles.headline}>
                        Simplifying screening, <br /> training, & outreach
                    </h1>
                    <p className={styles.subText}>
                        Empowering best-in-class telecallers with a fully managed <br /> ecosystem
                    </p>
                    <Link href="#" className={styles.ctaButton}>
                        BOOK A DEMO
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                </div>

                {/* Right Mockup Graphic */}
                <div className={styles.mockupWrapper}>
                    {/* Background Desktop Dashboard */}
                    <div className={styles.dashboardCard}>
                        {/* Mockup Top Bar */}
                        <div className={styles.dashboardTop}>
                            <div className={styles.dashLogo}>
                                <span className={styles.dashIcon}>❖</span> shyphan Partners
                            </div>
                        </div>
                        {/* Mockup Tabs */}
                        <div className={styles.dashboardTabs}>
                            <div className={`${styles.dashTab} ${styles.activeTab}`}>Overview</div>
                            <div className={styles.dashTab}>Script</div>
                            <div className={styles.dashTab}>FAQs</div>
                            <div className={styles.dashTab}>Training</div>
                            <div className={styles.dashTab}>Webinars</div>
                            <div className={styles.dashTab}>My Calls</div>
                            <div className={styles.btnStart}>Start Job</div>
                        </div>
                        {/* Mockup Body Content */}
                        <div className={styles.dashboardBody}>
                            <div className={styles.mockCard}>
                                <div className={styles.mockCardHeader}>
                                    <span style={{ fontWeight: 600 }}>About the Campaign</span>
                                    <span style={{ color: '#7c3aed', fontWeight: 600, fontSize: '0.9rem' }}>• shyx</span>
                                </div>
                                <div className={styles.mockLines}>
                                    <div className={styles.line}></div>
                                    <div className={styles.line} style={{ width: '80%' }}></div>
                                    <div className={styles.line} style={{ width: '60%' }}></div>
                                </div>
                            </div>
                            <div className={styles.mockCard}>
                                <div className={styles.mockCardHeader}>
                                    <span style={{ fontWeight: 600 }}>About the task</span>
                                </div>
                                <div className={styles.mockGrid}>
                                    <div>
                                        <div style={{ fontWeight: 600 }}>15,000 <span style={{ color: '#fbbf24' }}>●</span></div>
                                        <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Potential coins per hour</div>
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600 }}>8 mins</div>
                                        <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Exp. duration per call</div>
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600 }}>English, Hindi</div>
                                        <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Languages</div>
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600 }}>80 mins</div>
                                        <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Total time allocated</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Foreground Mobile Phone */}
                    <div className={styles.phoneFrame}>
                        <div className={styles.phoneDynamicIsland}></div>
                        <div className={styles.phoneContent}>
                            <div className={styles.phoneLogo}>
                                <span className={styles.dashIcon} style={{ fontSize: '2rem' }}>❖</span>
                                <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>shyphan</div>
                                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Partners</div>
                            </div>

                            <div className={styles.phoneImageWrapper}>
                                {/* Abstract purple user placeholder graphic */}
                                <div className={styles.phoneUserGraphic}></div>
                            </div>

                            <div className={styles.phoneBottom}>
                                <div className={styles.phoneBtn}>GET STARTED</div>
                                <div style={{ fontSize: '0.65rem', opacity: 0.7, textAlign: 'center', marginTop: '8px' }}>
                                    By signing up, you agree to the <br /> terms and conditions
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Star */}
                    <svg className={styles.floatingStar} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="#e2e8f0"></path></svg>
                </div>
            </div>
        </section>
    );
}
