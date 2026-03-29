'use client';
import styles from './DataMoatCaps.module.css';

const capabilities = [
    {
        title: 'Anti-Spam Intelligence',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M14 2 22 10M14 10 22 2" /></svg>,
        desc: "DND scrubbing, channel optimization, timing intelligence, clean number routing, and system-driven outreach. That's how you hit 80-90% lead connectivity in a market stuck at 40-60%."
    },
    {
        title: 'Hyper-Relevant Messaging',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>,
        desc: "No two customers hear the same call. The language, tone, offer framing, even objection handling is tailored to each customer's profile and real-time emotional state."
    },
    {
        title: 'Dynamic Persona Matching',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 1 0-16 0" /><path d="M16 14 A3 3 0 0 1 21 14" /></svg>,
        desc: "Voice selected, language locked and personality is matched, everything before the first ring. That's how the customer gets their personal AI sales advisor."
    },
    {
        title: 'Real-time Emotion Detection',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>,
        desc: "Conversational parameters adapt on-the-fly based on sentiment analysis, ensuring angry customers are handled delicately and eager buyers are rushed to closing."
    },
    {
        title: 'Adaptive Speech Modulation',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" /><line x1="8" y1="22" x2="16" y2="22" /></svg>,
        desc: "Pacing matches the user's speech rate dynamically. The AI speaks 1.25x faster for rushed users and slows down to enunciate complex terms for elderly demographics."
    },
    {
        title: 'Live Conversion Probability',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="14" width="4" height="6" /><rect x="10" y="8" width="4" height="12" /><rect x="17" y="2" width="4" height="18" /></svg>,
        desc: "The propensity model updates scoring with every passing second, allocating scarce Human-in-the-loop escalation bandwidth exclusively to high-probability closures."
    }
];

export default function DataMoatCaps() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Data Moat Banner */}
                <div className={styles.moatBanner}>
                    <h3 className={styles.moatTitle}>The Data Moat <span className={styles.sparkles}>✨</span></h3>
                    <p className={styles.moatDesc}>
                        <strong>5M+ hours</strong> of India-specific voice data across <strong>15K+ pincodes</strong>, <strong>6 languages</strong>, and <strong>100M+ unique consumers</strong>.
                    </p>
                </div>

                <div className={styles.header}>
                    <p className={styles.kicker}>CORE CAPABILITIES</p>
                    <h2 className={styles.heading}>What Makes It Super Intelligent</h2>
                </div>

                <div className={styles.grid}>
                    {capabilities.map((cap) => (
                        <div key={cap.title} className={styles.card}>
                            <div className={styles.iconBox}>{cap.icon}</div>
                            <h3 className={styles.capTitle}>{cap.title}</h3>
                            <p className={styles.capDesc}>{cap.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
