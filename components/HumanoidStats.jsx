'use client';
import styles from './HumanoidStats.module.css';

const logos = [
    { name: 'BankBazaar', text: 'bankbazaar.com', font: 'serif', colors: ['#3b82f6', '#eab308'] },
    { name: 'Zepto', text: 'zepto', font: 'sans-serif', colors: ['#9333ea'], bold: true },
    { name: 'Shiprocket', text: 'Shiprocket', font: 'sans-serif', icon: '▶', sub: 'Making Shipping Delightful' },
    { name: 'MediBuddy', text: 'MediBuddy', font: 'sans-serif', icon: '✜', colors: ['#3b82f6', '#ef4444'] },
];

const pills = [
    { value: '90%', label: 'Connectivity' },
    { value: '30%', label: 'More Qualified Leads' },
    { value: '40%', label: 'Lower CAC' },
];

export default function HumanoidStats() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <div className={styles.header}>
                    <div className={styles.line} />
                    <h3 className={styles.heading}>Trusted by Leading Brands</h3>
                    <div className={styles.line} />
                </div>

                <div className={styles.logosWrap}>
                    {logos.map((logo) => (
                        <div key={logo.name} className={styles.logoItem} style={{ fontFamily: logo.font, fontWeight: logo.bold ? 800 : 500 }}>
                            {logo.icon && <span className={styles.logoIcon}>{logo.icon}</span>}
                            <div className={styles.logoStack}>
                                <span style={{
                                    color: logo.colors ? logo.colors[0] : '#1a1040',
                                    fontSize: logo.name === 'Zepto' ? '2.2rem' : '1.4rem',
                                    letterSpacing: logo.name === 'Zepto' ? '-0.05em' : 'normal'
                                }}>
                                    {logo.text}
                                </span>
                                {logo.sub && <span className={styles.logoSub}>{logo.sub}</span>}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.pillsWrap}>
                    {pills.map((pill, i) => (
                        <div key={i} className={styles.pill}>
                            <h4 className={styles.pillValue}>{pill.value}</h4>
                            <p className={styles.pillLabel}>{pill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
