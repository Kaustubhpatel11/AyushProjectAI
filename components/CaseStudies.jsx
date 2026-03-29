'use client';
import { useState } from 'react';
import styles from './CaseStudies.module.css';

const caseStudies = [
    {
        brand: 'Eureka Forbes',
        color: '#1d4ed8',
        gradient: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
        metric: '2.3x',
        label: 'Sales Conversion',
        desc: 'Automated outreach for water purifier leads across India.',
    },
    {
        brand: 'MoneyView',
        color: '#059669',
        gradient: 'linear-gradient(135deg, #059669, #10b981)',
        metric: '40%',
        label: 'Cost Reduction',
        desc: 'AI-powered loan qualification reduced manual agent costs dramatically.',
    },
    {
        brand: 'Delhivery',
        color: '#92400e',
        gradient: 'linear-gradient(135deg, #92400e, #b45309)',
        metric: '98%',
        label: 'Resolution Rate',
        desc: 'Delivery rider hiring automation across 30+ cities with humanoid AI.',
    },
    {
        brand: 'Upstox',
        color: '#6b21a8',
        gradient: 'linear-gradient(135deg, #6b21a8, #7c3aed)',
        metric: '1.8x',
        label: 'Lead Conversion',
        desc: 'Demat account opening automation with 24/7 AI agent coverage.',
    },
    {
        brand: 'PhonePe',
        color: '#5b21b6',
        gradient: 'linear-gradient(135deg, #5b21b6, #7c3aed)',
        metric: '60%',
        label: 'Faster Onboarding',
        desc: 'KYC and account setup journeys streamlined with voice AI.',
    },
];

export default function CaseStudies() {
    const [page, setPage] = useState(0);
    const pageSize = 3;
    const totalPages = Math.ceil(caseStudies.length / pageSize);
    const visible = caseStudies.slice(page * pageSize, page * pageSize + pageSize);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Proven Outcomes for<br />India&apos;s Leading Brands</h2>

                <div className={styles.grid}>
                    {visible.map((cs) => (
                        <div
                            key={cs.brand}
                            className={styles.card}
                            style={{ background: cs.gradient }}
                        >
                            <div className={styles.cardBrand}>{cs.brand}</div>
                            <div className={styles.cardMetric}>{cs.metric}</div>
                            <div className={styles.cardLabel}>{cs.label}</div>
                            <p className={styles.cardDesc}>{cs.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className={styles.pagination}>
                    <button
                        className={styles.pageArrow}
                        onClick={() => setPage(Math.max(0, page - 1))}
                        disabled={page === 0}
                    >←</button>
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.pageDot} ${i === page ? styles.pageDotActive : ''}`}
                            onClick={() => setPage(i)}
                        >{i + 1}</button>
                    ))}
                    <button
                        className={styles.pageArrow}
                        onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
                        disabled={page === totalPages - 1}
                    >→</button>
                </div>
            </div>
        </section>
    );
}
