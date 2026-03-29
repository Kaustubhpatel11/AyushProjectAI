'use client';
import styles from './HumanoidCaps.module.css';

const caps = [
    {
        title: 'Intelligent Outcome Extraction',
        icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M9 14l2 2 4-4"></path><path d="M9 10h6"></path><path d="M9 18h6"></path></svg>
    },
    {
        title: 'Loop Free Interactions',
        icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18.82 10.59a5.98 5.98 0 0 0-8.48 0L9.41 11.5a5.98 5.98 0 0 1-8.48 0"></path><path d="M5.18 13.41a5.98 5.98 0 0 0 8.48 0l.93-.91a5.98 5.98 0 0 1 8.48 0"></path><line x1="15" y1="9" x2="21" y2="15"></line><line x1="21" y1="9" x2="15" y2="15"></line></svg>
    },
    {
        title: 'Interruption Handling',
        icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 11V6a2 2 0 0 0-4 0v4H14V4a2 2 0 0 0-4 0v6H10V5a2 2 0 0 0-4 0v10a8 8 0 0 0 16 0v-2h-4z"></path><path d="M6 14v-2a2 2 0 0 0-4 0v3a8 8 0 0 0 14.5 4.5"></path></svg>
    },
    {
        title: '360-degree Context Awareness',
        icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"></path><path d="M12 7v5l3 3"></path></svg>
    },
    {
        title: 'Language Switching',
        icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 8l6 6"></path><path d="M4 14l6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="M22 22l-5-10-5 10"></path><path d="M14 18h6"></path></svg>
    },
    {
        title: 'Live Human Handoff',
        icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
    }
];

export default function HumanoidCaps() {
    return (
        <section className={styles.section}>
            {/* Top Purple Half */}
            <div className={styles.purpleSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {caps.map((cap, i) => (
                            <div key={i} className={styles.card}>
                                <div className={styles.icon}>{cap.icon}</div>
                                <h4 className={styles.title}>{cap.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom White overlapping transition */}
            <div className={styles.whiteTransitionContainer}>
                <div className={styles.whiteCard}>
                    <div className={styles.whiteCardInner}>
                        <p className={styles.kicker}>From First touch to Final conversion</p>
                        <h2 className={styles.heading}>
                            Inside our <span className={styles.highlight}>Humanoid AI Agent Stack</span>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
