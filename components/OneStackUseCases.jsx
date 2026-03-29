'use client';
import styles from './OneStackUseCases.module.css';

export default function OneStackUseCases() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>One Stack. Many Use Cases.</h2>

                <div className={styles.flowContainer}>
                    {/* Floating icons Left */}
                    <div className={`${styles.floatingIcon} ${styles.floatUp} ${styles.iconProfileTop}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6d28d9" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                    </div>
                    <div className={`${styles.floatingIcon} ${styles.floatDown} ${styles.iconProfileBottom}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6d28d9" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                    </div>

                    {/* Left Node */}
                    <div className={styles.colStart}>
                        <div className={`${styles.node} ${styles.nodeDark}`}>Leads</div>
                    </div>

                    {/* Connecting Line 1 */}
                    <div className={styles.hLine} style={{ width: '40px' }} />

                    {/* Mid Node */}
                    <div className={styles.colMid}>
                        <div className={styles.node}>
                            <span className={styles.star}>✦</span> Smart Lead Qualification
                        </div>
                    </div>

                    {/* Branching Lines Left */}
                    <div className={styles.branchLinesLeft}>
                        {/* CSS handles the top/bottom borders connecting to the 4 nodes */}
                    </div>

                    {/* Sales Column */}
                    <div className={styles.colStacked}>
                        <div className={styles.colHeader}>
                            <div className={styles.arrowLabel}>
                                <div className={styles.arrowLeft}>←</div>
                                <div className={styles.pillLabel}>Sales</div>
                                <div className={styles.arrowRight}>→</div>
                            </div>
                        </div>
                        <div className={styles.node}><span className={styles.star}>✦</span> Onboarding & Activation</div>
                        <div className={styles.node}><span className={styles.star}>✦</span> Product Sales</div>
                        <div className={styles.node}><span className={styles.star}>✦</span> Cross Sell</div>
                        <div className={styles.node}><span className={styles.star}>✦</span> Renewal</div>
                    </div>

                    {/* Connecting bridges between Sales and Support columns */}
                    <div className={styles.bridges}>
                        <div className={styles.vLineBridge} />
                        <div className={styles.vLineBridge} />
                        <div className={styles.vLineBridge} />
                        <div className={styles.vLineBridge} />
                    </div>

                    {/* Support Column */}
                    <div className={styles.colStacked}>
                        <div className={styles.colHeader}>
                            <div className={styles.arrowLabel}>
                                <div className={styles.arrowLeft}>←</div>
                                <div className={styles.pillLabel}>Support</div>
                                <div className={styles.arrowRight}>→</div>
                            </div>
                        </div>
                        <div className={styles.node}><span className={styles.star}>✦</span> Feedback</div>
                        <div className={styles.node}><span className={styles.star}>✦</span> Customer Support</div>
                        <div className={styles.node}><span className={styles.star}>✦</span> Workforce Management</div>
                        <div className={styles.node}><span className={styles.star}>✦</span> Virtual RM</div>
                    </div>

                    {/* Branching Lines Right */}
                    <div className={styles.branchLinesRight} />

                    {/* Right Node */}
                    <div className={styles.colEnd}>
                        <div className={`${styles.node} ${styles.nodeDark}`}>Outcome</div>
                    </div>

                    {/* Floating icons Right */}
                    <div className={`${styles.floatingIcon} ${styles.floatDown} ${styles.iconRupeeTop}`}>
                        <span style={{ color: '#6d28d9', fontSize: '18px', fontWeight: 'bold' }}>₹</span>
                    </div>
                    <div className={`${styles.floatingIcon} ${styles.floatUp} ${styles.iconRupeeBottom}`}>
                        <span style={{ color: '#6d28d9', fontSize: '18px', fontWeight: 'bold' }}>₹</span>
                    </div>

                </div>
            </div>
        </section>
    );
}
