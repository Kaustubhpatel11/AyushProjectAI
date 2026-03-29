'use client';
import styles from './LogoTickerSub.module.css';

const logos = [
    { name: 'AngelOne', text: 'AngelOne', font: 'serif' },
    { name: 'Tata Digital', text: 'TATA DIGITAL', font: 'sans-serif' },
    { name: 'Zepto', text: 'zepto', font: 'sans-serif', bold: true },
    { name: 'Upstox', text: 'upstox', font: 'sans-serif' },
    { name: 'Delhivery', text: 'DELHIVERY', font: 'sans-serif', bold: true },
    { name: 'Eureka Forbes', text: 'EUREKA FORBES', font: 'sans-serif' },
    { name: 'redBus', text: 'redBus', font: 'sans-serif', badge: true },
    { name: 'MediBuddy', text: 'MediBuddy', font: 'sans-serif' },
    { name: 'PhonePe', text: 'PhonePe', font: 'sans-serif', bold: true },
    { name: 'Shiprocket', text: 'Shiprocket', font: 'sans-serif', bold: true },
];

export default function LogoTickerSub() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h3 className={styles.heading}>Trusted by India's Leading Enterprises</h3>

                <div className={styles.grid}>
                    {logos.map((logo, index) => (
                        <div key={logo.name} className={`${styles.cell} ${index < 5 ? styles.rowTop : ''} ${index % 5 !== 4 ? styles.colRight : ''}`}>
                            <div className={styles.logoItem}>
                                <span className={styles.logoText} style={{
                                    fontFamily: logo.font,
                                    fontWeight: logo.bold ? 800 : 600,
                                    textTransform: logo.name === 'Tata Digital' || logo.name === 'Delhivery' || logo.name === 'Eureka Forbes' ? 'uppercase' : 'none'
                                }}>
                                    {logo.badge && <span className={styles.badgeWrap}><span className={styles.badgeText}>{logo.text}</span></span>}
                                    {!logo.badge && logo.text}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
