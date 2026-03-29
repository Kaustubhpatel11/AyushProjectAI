import styles from './FooterCTA.module.css';

const footerLinks = {
    col1: ['Solutions', 'Our Complete Stack', 'Blog', 'Webinars', 'Life at shyphan'],
    col2: ['Careers', 'Industry Reports', 'Contact Us'],
};

export default function FooterCTA() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Day 1 of Smarter CX and Revenue Growth Starts Here</h2>

                <div className={styles.card}>
                    <div className={styles.cardTop}>
                        {/* Logo */}
                        <div className={styles.logoArea}>
                            <a href="/" className={styles.logo}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <rect x="1" y="1" width="8" height="8" rx="2" fill="#7c3aed" />
                                    <rect x="12" y="1" width="8" height="8" rx="2" fill="#7c3aed" opacity="0.7" />
                                    <rect x="1" y="12" width="8" height="8" rx="2" fill="#7c3aed" opacity="0.7" />
                                    <rect x="12" y="12" width="8" height="8" rx="2" fill="#7c3aed" opacity="0.4" />
                                </svg>
                                <span>shyphan.ai</span>
                            </a>
                        </div>

                        {/* Links */}
                        <div className={styles.linksArea}>
                            <div className={styles.linkCol}>
                                {footerLinks.col1.map(l => (
                                    <a key={l} href="#" className={styles.footerLink}>{l}</a>
                                ))}
                            </div>
                            <div className={styles.linkCol}>
                                {footerLinks.col2.map(l => (
                                    <a key={l} href="#" className={styles.footerLink}>{l}</a>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className={styles.ctaArea}>
                            <a href="#" className={styles.demoBtn}>Book a Demo →</a>
                            <a href="mailto:hello@shyphan.ai" className={styles.email}>hello@shyphan.ai</a>
                        </div>
                    </div>

                    <div className={styles.cardBottom}>
                        <div className={styles.companyInfo}>
                            <p>Shyphan Technologies Pvt Ltd</p>
                            <p>Sector 5, Gurugram, Haryana 122001</p>
                        </div>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink} aria-label="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="X/Twitter">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
