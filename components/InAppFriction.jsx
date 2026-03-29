'use client';
import styles from './InAppFriction.module.css';

const painPoints = [
    {
        title: "User Journeys Are Too Complex",
        desc: "People struggle to navigate apps, leading to drop-offs and lost revenue.",
        icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a9 9 0 0 0-9 9c0 3.3 1.8 6.2 4.5 7.8M12 2a9 9 0 0 1 9 9c0 3.3-1.8 6.2-4.5 7.8"></path><path d="M12 2v6"></path><path d="M9 13a3 3 0 1 0 6 0 3 3 0 0 0-6 0z"></path><path d="M10 12s-1-2-3-2M14 12s1-2 3-2"></path></svg>
    },
    {
        title: "Help Arrives Late",
        desc: "Users wait or dig through FAQs and chatbots that can't solve problems in real time.",
        icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v4"></path><path d="M12 18v4"></path><path d="M4.93 4.93l2.83 2.83"></path><path d="M16.24 16.24l2.83 2.83"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="M4.93 19.07l2.83-2.83"></path><path d="M16.24 7.76l2.83-2.83"></path></svg>
    },
    {
        title: "Forms are Annoying",
        desc: "Form fatigue is the #1 reason for drop-offs in lead gen and checkout.",
        icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    }
];

export default function InAppFriction() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>The High Cost of Digital Friction</h2>

                <div className={styles.grid}>
                    {painPoints.map((point, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {point.icon}
                            </div>
                            <h3 className={styles.title}>{point.title}</h3>
                            <p className={styles.desc}>{point.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
