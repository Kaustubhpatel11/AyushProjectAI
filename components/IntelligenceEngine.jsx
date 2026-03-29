'use client';
import styles from './IntelligenceEngine.module.css';

const timelineSteps = [
    {
        num: '01',
        title: 'Contextual Preparation',
        desc: "Before the call begins, the engine aggregates historical interaction data and CRM inputs to prime the agent's strategy.",
    },
    {
        num: '02',
        title: 'Real-time Adaptive Steering',
        desc: "During the call, speech recognition and emotion detection work in tandem to course-correct the pitch in milliseconds.",
    },
    {
        num: '03',
        title: 'Continuous Optimization',
        desc: "After the call, outcomes are vectorized and fed back into the central model, ensuring tomorrow's calls are smarter than today's.",
    }
];

export default function IntelligenceEngine() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.kicker}>THE INTELLIGENCE ENGINE</p>
                    <h2 className={styles.heading}>Intelligence Before, During, and After Every Call</h2>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.line} />

                    <div className={styles.cardsRow}>
                        {timelineSteps.map((step, idx) => (
                            <div key={idx} className={styles.stepCard}>
                                <div className={styles.node}>[{step.num}]</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.actions}>
                    <button className={styles.ctaBtn}>Book a Demo →</button>
                </div>
            </div>
        </section>
    );
}
