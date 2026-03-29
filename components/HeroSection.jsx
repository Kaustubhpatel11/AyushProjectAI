'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './HeroSection.module.css';

const WORDS = ['Talk', 'Sell', 'Convert', 'Engage', 'Qualify'];

const useCases = [
    'Buyer Requirement Gathering',
    'Appointment Booking',
    'Credit Card Sales',
    'Insurance Renewal',
    'Demat Account Opening',
    'Delivery Rider Hiring',
    'Lead Qualification \u2013 Education',
    'Drop-Chase \u2013 Lending',
    'Address Capture',
];

const DOT_DATA = [
    { left: 12, top: 8, w: 3.2, h: 2.8, op: 0.70 },
    { left: 34, top: 22, w: 2.5, h: 3.5, op: 0.55 },
    { left: 56, top: 15, w: 4.0, h: 2.2, op: 0.80 },
    { left: 78, top: 35, w: 2.8, h: 4.1, op: 0.60 },
    { left: 91, top: 10, w: 3.6, h: 2.6, op: 0.75 },
    { left: 20, top: 48, w: 2.2, h: 3.8, op: 0.50 },
    { left: 45, top: 60, w: 3.9, h: 2.4, op: 0.90 },
    { left: 67, top: 52, w: 2.6, h: 3.2, op: 0.65 },
    { left: 83, top: 70, w: 4.2, h: 2.9, op: 0.70 },
    { left: 8, top: 75, w: 3.0, h: 4.0, op: 0.55 },
    { left: 30, top: 82, w: 2.7, h: 2.5, op: 0.85 },
    { left: 52, top: 88, w: 3.5, h: 3.6, op: 0.60 },
    { left: 70, top: 80, w: 2.3, h: 2.8, op: 0.72 },
    { left: 88, top: 90, w: 4.1, h: 3.0, op: 0.48 },
    { left: 15, top: 30, w: 2.9, h: 4.3, op: 0.65 },
    { left: 40, top: 5, w: 3.7, h: 2.6, op: 0.80 },
    { left: 62, top: 40, w: 2.4, h: 3.9, op: 0.58 },
    { left: 75, top: 55, w: 3.3, h: 2.2, op: 0.92 },
    { left: 5, top: 55, w: 4.4, h: 3.7, op: 0.50 },
    { left: 25, top: 68, w: 2.1, h: 2.9, op: 0.77 },
    { left: 48, top: 72, w: 3.8, h: 4.2, op: 0.62 },
    { left: 60, top: 25, w: 2.6, h: 3.1, op: 0.88 },
    { left: 80, top: 18, w: 3.4, h: 2.7, op: 0.55 },
    { left: 95, top: 45, w: 2.2, h: 3.5, op: 0.70 },
    { left: 18, top: 92, w: 4.0, h: 2.3, op: 0.60 },
    { left: 37, top: 44, w: 3.1, h: 4.0, op: 0.82 },
    { left: 55, top: 95, w: 2.8, h: 2.6, op: 0.47 },
    { left: 72, top: 62, w: 3.6, h: 3.3, op: 0.73 },
    { left: 86, top: 28, w: 2.3, h: 4.1, op: 0.66 },
    { left: 42, top: 33, w: 4.5, h: 2.5, op: 0.79 },
];

const PARTICLE_DATA = [
    { left: 18, top: 22, w: 5.2, h: 4.1, op: 0.5 },
    { left: 32, top: 45, w: 3.8, h: 5.6, op: 0.65 },
    { left: 55, top: 18, w: 4.9, h: 3.4, op: 0.4 },
    { left: 70, top: 60, w: 5.5, h: 4.7, op: 0.6 },
    { left: 82, top: 30, w: 3.2, h: 5.0, op: 0.72 },
    { left: 12, top: 72, w: 4.6, h: 3.9, op: 0.48 },
    { left: 28, top: 85, w: 5.1, h: 4.5, op: 0.36 },
    { left: 45, top: 55, w: 3.7, h: 5.2, op: 0.78 },
    { left: 60, top: 80, w: 4.3, h: 3.6, op: 0.58 },
    { left: 75, top: 12, w: 5.8, h: 4.8, op: 0.43 },
    { left: 20, top: 35, w: 3.5, h: 5.4, op: 0.70 },
    { left: 38, top: 68, w: 4.8, h: 3.2, op: 0.53 },
    { left: 52, top: 28, w: 5.3, h: 4.6, op: 0.84 },
    { left: 65, top: 48, w: 3.9, h: 5.1, op: 0.38 },
    { left: 80, top: 75, w: 4.4, h: 3.8, op: 0.65 },
    { left: 15, top: 58, w: 5.6, h: 4.2, op: 0.51 },
    { left: 30, top: 15, w: 3.3, h: 5.7, op: 0.74 },
    { left: 48, top: 88, w: 4.7, h: 3.5, op: 0.59 },
    { left: 62, top: 38, w: 5.0, h: 4.9, op: 0.45 },
    { left: 77, top: 52, w: 3.6, h: 5.3, op: 0.82 },
    { left: 10, top: 25, w: 4.9, h: 3.7, op: 0.56 },
    { left: 25, top: 78, w: 5.4, h: 4.4, op: 0.41 },
    { left: 42, top: 42, w: 3.1, h: 5.8, op: 0.69 },
    { left: 58, top: 65, w: 4.6, h: 3.3, op: 0.84 },
    { left: 72, top: 22, w: 5.2, h: 4.7, op: 0.47 },
    { left: 85, top: 88, w: 3.8, h: 5.0, op: 0.62 },
    { left: 22, top: 50, w: 4.3, h: 3.6, op: 0.73 },
    { left: 35, top: 30, w: 5.7, h: 4.3, op: 0.50 },
    { left: 50, top: 72, w: 3.4, h: 5.5, op: 0.66 },
    { left: 68, top: 14, w: 4.8, h: 3.9, op: 0.44 },
];

export default function HeroSection() {
    const [active, setActive] = useState(0);
    const [wordIdx, setWordIdx] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [deleting, setDeleting] = useState(false);
    const timerRef = useRef(null);

    // Typewriter effect
    useEffect(() => {
        const word = WORDS[wordIdx];
        if (!deleting) {
            if (displayed.length < word.length) {
                timerRef.current = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 90);
            } else {
                timerRef.current = setTimeout(() => setDeleting(true), 1800);
            }
        } else {
            if (displayed.length > 0) {
                timerRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 55);
            } else {
                setDeleting(false);
                setWordIdx((i) => (i + 1) % WORDS.length);
            }
        }
        return () => clearTimeout(timerRef.current);
    }, [displayed, deleting, wordIdx]);

    return (
        <section className={styles.hero}>
            {/* Aurora blobs */}
            <div className={styles.auroraBlob1} aria-hidden="true" />
            <div className={styles.auroraBlob2} aria-hidden="true" />
            <div className={styles.auroraBlob3} aria-hidden="true" />

            {/* Grid overlay */}
            <div className={styles.gridOverlay} aria-hidden="true" />

            {/* Left AI Head Visual */}
            <div className={styles.leftVisual} aria-hidden="true">
                <div className={styles.aiHead}>
                    {DOT_DATA.map((d, i) => (
                        <div key={i} className={styles.dot} style={{
                            left: `${d.left}%`, top: `${d.top}%`,
                            animationDelay: `${(i * 0.15) % 3}s`,
                            width: `${d.w}px`, height: `${d.h}px`, opacity: d.op,
                        }} />
                    ))}
                    <svg className={styles.headSvg} viewBox="0 0 200 300" fill="none">
                        <path d="M100 20 C50 20 20 60 20 110 C20 150 40 180 70 200 L70 240 C70 250 80 260 100 260 C120 260 130 250 130 240 L130 200 C160 180 180 150 180 110 C180 60 150 20 100 20Z" stroke="#6366f1" strokeWidth="1.5" fill="none" opacity="0.7" />
                        <path d="M100 40 C60 40 40 70 40 110 C40 145 58 172 85 190" stroke="#06b6d4" strokeWidth="1" fill="none" opacity="0.5" strokeDasharray="4 4" />
                        <circle cx="80" cy="110" r="8" fill="#6366f1" opacity="0.9" />
                        <circle cx="120" cy="110" r="8" fill="#6366f1" opacity="0.9" />
                        <circle cx="80" cy="110" r="4" fill="#a5b4fc" />
                        <circle cx="120" cy="110" r="4" fill="#a5b4fc" />
                        <path d="M90 140 C95 147 105 147 110 140" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" fill="none" />
                        <line x1="20" y1="110" x2="0" y2="90" stroke="#6366f1" strokeWidth="1" opacity="0.4" />
                        <line x1="20" y1="140" x2="0" y2="140" stroke="#6366f1" strokeWidth="1" opacity="0.3" />
                        <line x1="180" y1="110" x2="200" y2="90" stroke="#6366f1" strokeWidth="1" opacity="0.4" />
                        <line x1="180" y1="140" x2="200" y2="140" stroke="#6366f1" strokeWidth="1" opacity="0.3" />
                    </svg>
                </div>
            </div>

            {/* Main Content */}
            <div className={styles.content}>
                {/* Badge */}
                <div className={styles.heroBadge}>
                    <span className={styles.badgeDot} />
                    AI-Powered Sales Intelligence
                </div>

                <h1 className={styles.headline}>
                    <span className={styles.headlineLine1}>AI Sales Advisors</span>
                    <br />
                    <span className={styles.headlineLine2}>
                        That Do More Than{' '}
                        <span className={styles.typewriter}>
                            {displayed}
                            <span className={styles.cursor}>|</span>
                        </span>
                    </span>
                </h1>
                <p className={styles.subText}>Hear Real Customer Calls</p>

                {/* Use-case pills */}
                <div className={styles.pillGrid}>
                    {useCases.map((uc, i) => (
                        <button
                            key={uc}
                            className={`${styles.pill} ${active === i ? styles.pillActive : ''}`}
                            onClick={() => setActive(i)}
                            style={{ animationDelay: `${i * 60}ms` }}
                        >
                            <span className={styles.pillIcon}>
                                {active === i ? (
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <circle cx="7" cy="7" r="7" fill="#fff" opacity="0.3" />
                                        <polygon points="5,4 11,7 5,10" fill="#fff" />
                                    </svg>
                                ) : (
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <circle cx="7" cy="7" r="6" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
                                        <polygon points="5,4 11,7 5,10" fill="rgba(255,255,255,0.45)" />
                                    </svg>
                                )}
                            </span>
                            {uc}
                        </button>
                    ))}
                </div>

                <div className={styles.ctaRow}>
                    <a href="#" className={styles.demoCta}>
                        Book a Demo
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a href="#" className={styles.watchDemo}>
                        <span className={styles.playBtn}>▶</span> Watch Demo
                    </a>
                </div>
            </div>

            {/* Right Particle Visual */}
            <div className={styles.rightVisual} aria-hidden="true">
                <div className={styles.particleCloud}>
                    {PARTICLE_DATA.map((p, i) => (
                        <div key={i} className={styles.particle} style={{
                            left: `${p.left}%`, top: `${p.top}%`,
                            animationDelay: `${(i * 0.12) % 4}s`,
                            width: `${p.w}px`, height: `${p.h}px`, opacity: p.op,
                        }} />
                    ))}
                </div>
            </div>
        </section>
    );
}
