'use client';
import styles from './CallQualityFeatures.module.css';

const features = [
    {
        iconContent: <div className={styles.circleIcon} style={{ background: '#bae6fd' }}><div className={styles.bigNum}>15%</div><div className={styles.smallText}>SAMPLING<br />RATE</div></div>,
        title: "Reducing Incorrect Qualification with Smart Sampling",
        description: "We minimize incorrect qualifications with a smart sampling rate of 12%, which surpasses the industry standard of 1-2%."
    },
    {
        iconContent: <div className={styles.circleIcon} style={{ background: '#bbf7d0' }}><div className={styles.bigNum}>23</div><div className={styles.smallText}>QUALITY<br />PARAMETERS</div></div>,
        title: "Flexible Parameters & Industry Expertise",
        description: "Our quality monitoring samples 15% calls across 23 quality parameters using the best method to ensure high standards of quality."
    },
    {
        iconContent: <div className={styles.circleIcon} style={{ background: '#d9f99d' }}><div className={styles.bigNum}>Flow</div><div className={styles.smallText}>FEEDBACK<br />LOOP</div></div>,
        title: "Accelerated Feedback Loop",
        description: "Our feedback loop is faster than the average manual process and can be accelerated, leading to improved decision-making for your business."
    },
    {
        iconContent: <div className={styles.circleIcon} style={{ background: '#fef08a' }}><div className={styles.bigNum}>$</div><div className={styles.smallText}>GREATER<br />SAVINGS</div></div>,
        title: "Cost Efficiency at Scale",
        description: "Our cost model ensures that the increase in quality monitoring cost slows down as your company scales, leading to greater savings."
    },
    {
        iconContent: <div className={styles.circleIcon} style={{ background: '#e9d5ff' }}><div className={styles.bigNum}>✓</div><div className={styles.smallText}>MANUAL<br />CHECKS</div></div>,
        title: "Pinpoint Accuracy",
        description: "We ensure the accuracy of AI-generated quality scores and minimize errors with the help of manual checks and audits."
    },
    {
        iconContent: <div className={styles.circleIcon} style={{ background: '#fed7aa' }}><div className={styles.bigNum}>🎯</div><div className={styles.smallText}>OBJECTIVE<br />ANSWERS</div></div>,
        title: "Deterministic Approach",
        description: "We use a deterministic approach to our call assessments, ensuring the result is free of human bias and provides objective answers."
    }
];

export default function CallQualityFeatures() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {features.map((item, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {item.iconContent}
                            </div>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
