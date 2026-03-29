'use client';
import styles from './SeeHowItWorksCTA.module.css';

export default function SeeHowItWorksCTA() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.banner}>
                    <h2 className={styles.heading}>See How It Works for Your Use Case</h2>
                    <br />
                    <button className={styles.ctaBtn}>Book a Demo →</button>
                </div>
            </div>
        </section>
    );
}
