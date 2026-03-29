'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './StatsSection.module.css';

const conversations = [
    { city: 'Mumbai', task: 'Buyer Requirement Gathering', lang: 'Hindi', duration: '8m 32s', ago: '2h 4m ago', status: 'Resolved' },
    { city: 'Ghaziabad', task: 'Cart Recovery', lang: 'Hindi', duration: '13m 01s', ago: '1h 13m ago', status: 'Sale completed' },
    { city: 'Chennai', task: 'Loan Qualification', lang: 'Tamil', duration: '15m 44s', ago: '2h 12m ago', status: 'Sale completed' },
    { city: 'Siliguri', task: 'KYC', lang: 'Hindi', duration: '3m 35s', ago: '2h 46m ago', status: 'Resolved' },
    { city: 'Pune', task: 'Appointment Booking', lang: 'Marathi', duration: '5m 12s', ago: '45m ago', status: 'Booked' },
    { city: 'Bengaluru', task: 'Insurance Renewal', lang: 'Kannada', duration: '11m 08s', ago: '3h 20m ago', status: 'Renewed' },
    { city: 'Delhi', task: 'Demat Account Opening', lang: 'Hindi', duration: '19m 00s', ago: '1h 50m ago', status: 'Sale completed' },
    { city: 'Hyderabad', task: 'Credit Card Sales', lang: 'Telugu', duration: '7m 55s', ago: '4h 02m ago', status: 'Sale completed' },
];

const doubled = [...conversations, ...conversations];

function Avatar({ city }) {
    const colors = ['#6366f1', '#06b6d4', '#059669', '#dc2626', '#d97706', '#8b5cf6'];
    const color = colors[city.length % colors.length];
    return (
        <div className={styles.avatar} style={{ background: color }}>
            {city[0]}
        </div>
    );
}

function CountUp({ target, duration = 2000, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const start = performance.now();
                    const tick = (now) => {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * target));
                        if (progress < 1) requestAnimationFrame(tick);
                        else setCount(target);
                    };
                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
    return (
        <section className={styles.section}>
            {/* Background decorative blobs */}
            <div className={styles.blob1} aria-hidden="true" />
            <div className={styles.blob2} aria-hidden="true" />

            <div className={styles.container}>
                <div className={styles.stat}>
                    <span className={styles.statNumber}>
                        <CountUp target={3} suffix=" million+" duration={1800} />
                    </span>
                    <span className={styles.statLabel}>Conversations. Every Day.</span>
                    <div className={styles.statBadges}>
                        <span className={styles.statBadge}>🌍 30+ Cities</span>
                        <span className={styles.statBadge}>🗣️ 8 Languages</span>
                        <span className={styles.statBadge}>⚡ 24/7 Active</span>
                    </div>
                </div>
            </div>

            {/* Scrolling conversation ticker */}
            <div className={styles.tickerWrapper}>
                <div className={styles.ticker}>
                    {doubled.map((conv, i) => (
                        <div key={i} className={styles.convCard}>
                            <Avatar city={conv.city} />
                            <div className={styles.convInfo}>
                                <div className={styles.convTitle}>
                                    {conv.city} | {conv.task} | {conv.lang}
                                </div>
                                <div className={styles.convMeta}>
                                    {conv.duration} • {conv.ago} •{' '}
                                    <span className={`${styles.convStatus} ${conv.status === 'Resolved' ? styles.resolved : styles.sale}`}>
                                        {conv.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
