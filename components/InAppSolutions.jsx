'use client';
import styles from './InAppSolutions.module.css';

const solutions = [
    {
        title: "Reduce Drop-Offs & Accelerate Decisions",
        desc: "Guide users at the moment of intent and help them act faster with real-time voice assistance.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><polyline points="13 2 13 9 22 9"></polyline><polyline points="11 22 11 15 2 15"></polyline><path d="M13 2L2 15h9v7l11-13h-9z"></path></svg>
    },
    {
        title: "Improve Customer Experience",
        desc: "Deliver instant, human-like help that reduces friction across buying journeys.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
    },
    {
        title: "Resolve Issues Faster",
        desc: "Handle questions and support requests instantly, improving resolution time and satisfaction.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    },
    {
        title: "Unlock Hidden Revenue",
        desc: "Convert users who would have left before entering the funnel, boosting overall conversion.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    }
];

export default function InAppSolutions() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Convert Intent into Action with a <br /> Conversational Layer</h2>
                </div>

                <div className={styles.grid}>
                    {solutions.map((item, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.iconBox}>
                                {item.icon}
                            </div>
                            <div className={styles.textContent}>
                                <h3 className={styles.title}>{item.title}</h3>
                                <p className={styles.desc}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
