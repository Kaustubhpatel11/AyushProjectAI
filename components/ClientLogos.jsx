import styles from './ClientLogos.module.css';

const logos = [
    { name: 'Upstox', style: { fontWeight: 700, fontSize: '1.1rem', color: '#6b21a8' } },
    { name: 'Shiprocket', style: { fontWeight: 700, fontSize: '0.95rem', color: '#ea580c' } },
    { name: 'Axis Securities', style: { fontWeight: 700, fontSize: '0.9rem', color: '#92400e', letterSpacing: '0.05em' } },
    { name: 'PhonePe', style: { fontWeight: 700, fontSize: '1rem', color: '#5b21b6' } },
    { name: 'Kotak', style: { fontWeight: 800, fontSize: '1.1rem', color: '#92400e' } },
    { name: 'BankBazaar', style: { fontWeight: 700, fontSize: '0.9rem', color: '#374151' } },
    { name: 'Policybazaar', style: { fontWeight: 700, fontSize: '0.9rem', color: '#0c4a6e' } },
    { name: 'CarDekho', style: { fontWeight: 700, fontSize: '0.95rem', color: '#166534' } },
    { name: 'Delhivery', style: { fontWeight: 800, fontSize: '0.95rem', color: '#9a3412' } },
];

export default function ClientLogos() {
    const doubled = [...logos, ...logos];
    return (
        <section className={styles.section}>
            <div className={styles.tickerWrapper}>
                <div className={styles.ticker}>
                    {doubled.map((logo, i) => (
                        <div key={i} className={styles.logoItem}>
                            <span style={logo.style}>{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
