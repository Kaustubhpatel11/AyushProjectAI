'use client';
import styles from './CallQualityDashboard.module.css';

export default function CallQualityDashboard() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Left Text Block */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>Call Quality Dashboard</h2>
                    <p className={styles.description}>
                        Get complete visibility into the quality of your campaigns with our dashboard. where you can access valuable insights such as call quality scores, audit parameters, total audited calls, and performance-based categorization of callers.
                    </p>
                </div>

                {/* Right UI Mockup Graphics */}
                <div className={styles.mockupWrapper}>

                    {/* Background Panel (Dark Sidenav) */}
                    <div className={styles.sideNavMock}>
                        <div className={styles.navTop}>
                            <span className={styles.navLogo}>❖</span> shyphan
                        </div>
                        <div className={styles.navItems}>
                            <div className={styles.navItem}>Dashboard</div>
                            <div className={styles.navItem}>Campaigns</div>
                            <div className={`${styles.navItem} ${styles.navActive}`}>Analytics</div>
                            <div className={styles.navItem}>Reports</div>
                            <div className={styles.navItem}>Billing</div>
                        </div>
                    </div>

                    {/* Foreground Main Dashboard Card */}
                    <div className={styles.dashboardCard}>
                        {/* Top KPI row */}
                        <div className={styles.kpiRow}>
                            <div className={styles.kpiBox}>
                                <div className={styles.kpiLabel}>AVERAGE QUALITY SCORE</div>
                                <div className={styles.kpiValue}>97.5%</div>
                            </div>
                            <div className={styles.kpiBox}>
                                <div className={styles.kpiLabel}>TOTAL CALLS AUDITED</div>
                                <div className={styles.kpiValue}>150</div>
                            </div>
                            <div className={styles.kpiBox}>
                                <div className={styles.kpiLabel}>CALLS AUDITED PER AGENT</div>
                                <div className={styles.kpiValue}>8</div>
                            </div>
                        </div>

                        {/* Middle Tables */}
                        <div className={styles.tablesRow}>
                            <div className={styles.tableBox}>
                                <div className={styles.tableTitle}>Call Level Quality Distribution</div>
                                <div className={styles.tableHeader}>
                                    <span>Buckets</span>
                                    <span>Calls #</span>
                                    <span>Distribution %</span>
                                </div>
                                <div className={styles.tableRow}>
                                    <span><span style={{ color: '#10b981' }}>●</span> Good</span>
                                    <span style={{ color: '#0ea5e9' }}>100</span>
                                    <span>66.66%</span>
                                </div>
                                <div className={styles.tableRow}>
                                    <span><span style={{ color: '#fbbf24' }}>●</span> Fair</span>
                                    <span style={{ color: '#0ea5e9' }}>20</span>
                                    <span>13.33%</span>
                                </div>
                                <div className={styles.tableRow}>
                                    <span><span style={{ color: '#f97316' }}>●</span> Needs Improvement</span>
                                    <span style={{ color: '#0ea5e9' }}>20</span>
                                    <span>13.33%</span>
                                </div>
                            </div>

                            <div className={styles.tableBox}>
                                <div className={styles.tableTitle}>Tele-caller Quality Distribution</div>
                                <div className={styles.tableHeader}>
                                    <span>Buckets</span>
                                    <span>Tele-callers #</span>
                                    <span>Connected Calls%</span>
                                </div>
                                <div className={styles.tableRow}>
                                    <span><span style={{ color: '#10b981' }}>●</span> Good</span>
                                    <span style={{ color: '#0ea5e9' }}>4</span>
                                    <span>45%</span>
                                </div>
                                <div className={styles.tableRow}>
                                    <span><span style={{ color: '#fbbf24' }}>●</span> Fair</span>
                                    <span style={{ color: '#0ea5e9' }}>3</span>
                                    <span>30%</span>
                                </div>
                                <div className={styles.tableRow}>
                                    <span><span style={{ color: '#f97316' }}>●</span> Needs Improvement</span>
                                    <span style={{ color: '#0ea5e9' }}>2</span>
                                    <span>15%</span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Charts Placeholder */}
                        <div className={styles.chartsRow}>
                            <div className={styles.chartTitle}>QUALITY TRENDS</div>
                            <div className={styles.chartMockArea}>
                                <div className={styles.barGroup}>
                                    <div className={styles.bar} style={{ height: '30%', background: '#f87171' }}></div>
                                    <div className={styles.bar} style={{ height: '60%', background: '#fbbf24' }}></div>
                                    <div className={styles.bar} style={{ height: '90%', background: '#10b981' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
