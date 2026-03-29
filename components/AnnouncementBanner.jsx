'use client';
import { useState } from 'react';
import styles from './AnnouncementBanner.module.css';

export default function AnnouncementBanner() {
    const [visible, setVisible] = useState(true);
    if (!visible) return null;
    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <span className={styles.badge}>Just Launched</span>
                <span className={styles.icon}>🎤</span>
                <span className={styles.text}>
                    Introducing Humanoid Vision Agent: The First AI Agent With Eyes
                </span>
                <a href="#" className={styles.learnMore}>Learn More →</a>
            </div>
            <button className={styles.close} onClick={() => setVisible(false)} aria-label="Close">✕</button>
        </div>
    );
}
