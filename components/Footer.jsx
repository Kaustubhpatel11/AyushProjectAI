import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <span className={styles.copy}>© 2025 – Copyright shyphan.ai</span>
                <div className={styles.links}>
                    <a href="#">ISO Certificate</a>
                    <span className={styles.dot}>•</span>
                    <a href="#">Privacy Policy</a>
                    <span className={styles.dot}>•</span>
                    <a href="#">Terms &amp; Conditions</a>
                    <span className={styles.dot}>•</span>
                    <a href="#">Data Security &amp; Compliance</a>
                </div>
            </div>
        </footer>
    );
}
