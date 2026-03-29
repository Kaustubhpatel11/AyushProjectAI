'use client';
import styles from './InAppUseCases.module.css';

const useCases = [
    {
        title: "Assisted Sales",
        desc: "Help users compare options, product details and make faster purchase decisions.",
        color: "#3b82f6", // blue
        bg: "#eff6ff",
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
    },
    {
        title: "Onboarding Guidance",
        desc: "Explain steps and guide users without friction.",
        color: "#8b5cf6", // purple
        bg: "#f5f3ff",
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
    },
    {
        title: "Resolve Confusion",
        desc: "Clear doubts without breaking the journey.",
        color: "#10b981", // green
        bg: "#ecfdf5",
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    }
];

export default function InAppUseCases() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Help Users Compare, Decide & <br />Resolve Instantly</h2>

                <div className={styles.grid}>
                    {useCases.map((uc, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.iconCircle} style={{ backgroundColor: uc.bg, color: uc.color }}>
                                {uc.icon}
                            </div>
                            <h3 className={styles.title}>{uc.title}</h3>
                            <p className={styles.desc}>{uc.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
