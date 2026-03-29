'use client';
import styles from './HumanoidAudioUI.module.css';

const leftTags = [
    "Buyer Requirement Gathering",
    "Customer Support",
    "Lead Qualification",
    "Appointment Booking"
];

const rightTags = [
    "Insurance Renewal",
    "Demat Account Opening",
    "Loan Qualification",
    "Delivery Rider Hiring"
];

export default function HumanoidAudioUI() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>So Real, You'll think it's Human</h2>

                <div className={styles.interactiveArea}>

                    {/* Left Column of Tags */}
                    <div className={styles.tagColumn}>
                        {leftTags.map((tag, i) => (
                            <div key={i} className={styles.tagPill}>{tag}</div>
                        ))}
                    </div>

                    {/* Center Glowing Orb */}
                    <div className={styles.orbContainer}>
                        <div className={styles.orbGlow} />
                        <div className={styles.orbCore}>
                            {/* Abstract organic CSS shapes simulating the flower design */}
                            <div className={styles.petal1} />
                            <div className={styles.petal2} />
                            <div className={styles.petal3} />
                            <div className={styles.petal4} />
                            <div className={styles.centerLight} />
                        </div>
                    </div>

                    {/* Right Column of Tags */}
                    <div className={styles.tagColumn}>
                        {rightTags.map((tag, i) => (
                            <div key={i} className={styles.tagPill}>{tag}</div>
                        ))}
                    </div>

                </div>

                <div className={styles.bottomLink}>
                    <button className={styles.listenBtn}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                        Listen to the Call
                    </button>
                </div>
            </div>
        </section>
    );
}
