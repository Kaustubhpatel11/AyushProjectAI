'use client';
import styles from './StatsGlowing.module.css';

const statsData = [
    { value: '10x', label: 'Better Call Experience', arrow: '↑' },
    { value: '2x', label: 'Conversion Uplift', arrow: '↑' },
    { value: '5x', label: 'Lower CAC', arrow: '↓' },
    { value: '300M+', label: 'Mins. of Sales Training Data', arrow: '' },
];

export default function StatsGlowing() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {statsData.map((stat, i) => (
                        <div key={i} className={styles.card}>
                            <h3 className={styles.value}>
                                {stat.value}
                                {stat.arrow && <span className={styles.arrow}>{stat.arrow}</span>}
                            </h3>
                            <p className={styles.label}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* The bright glowing transition block at the bottom */}
            <div className={styles.glowTransition} aria-hidden="true" />
        </section>
    );
}
