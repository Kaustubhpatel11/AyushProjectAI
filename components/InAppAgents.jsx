'use client';
import { useState } from 'react';
import styles from './InAppAgents.module.css';

const agents = [
    { id: 'buyer', label: 'Buyer Requirement Gathering' },
    { id: 'rider', label: 'Delivery Rider Hiring' },
    { id: 'demat', label: 'Demat Account Opening' },
    { id: 'lead', label: 'Lead Qualification' },
    { id: 'support', label: 'Customer Support' },
    { id: 'booking', label: 'Appointment Booking' },
    { id: 'loan', label: 'Loan Qualification' },
    { id: 'insurance', label: 'Insurance Renewal' }
];

export default function InAppAgents() {
    const [activeAgent, setActiveAgent] = useState('support');

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.leftCol}>
                    <h2 className={styles.heading}>Largest Scale Voice AI Agents Built for Bharat</h2>
                    <p className={styles.subText}>Human-sounding AI that improves conversions, boosts retention, and reduces CAC.</p>

                    <div className={styles.tagGrid}>
                        {agents.map((agent) => (
                            <button
                                key={agent.id}
                                className={`${styles.tagBtn} ${activeAgent === agent.id ? styles.activeTag : ''}`}
                                onClick={() => setActiveAgent(agent.id)}
                            >
                                {agent.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.rightCol}>
                    <div className={styles.playerBox}>
                        <div className={styles.playerHeader}>
                            <h3 className={styles.playerTitle}>Hear Real Customer Calls</h3>
                            <div className={styles.bars}>
                                <span className={styles.bar}></span>
                                <span className={styles.bar}></span>
                                <span className={styles.bar}></span>
                                <span className={styles.bar}></span>
                            </div>
                        </div>

                        <div className={styles.audioControls}>
                            <button className={styles.playBtn}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            </button>
                            <div className={styles.timeline}>
                                <div className={styles.timelineProgress}></div>
                            </div>
                            <span className={styles.timeLabel}>0:45</span>
                        </div>

                        <div className={styles.callDetails}>
                            <p className={styles.transcript}>
                                <span className={styles.speaker}>AI Agent:</span> "Hi, this is Neha from Customer Support. I understand you're facing an issue with your recent order. How can I assist you today?"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
