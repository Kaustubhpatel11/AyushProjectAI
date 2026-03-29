'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
    { label: 'Product', hasDropdown: true },
    { label: 'Solutions', hasDropdown: true },
    { label: 'Case Studies', hasDropdown: false },
    { label: 'Resources', hasDropdown: true },
    { label: 'Company', hasDropdown: true },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.inner}>
                {/* Logo */}
                <a href="/" className={styles.logo}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="9" height="9" rx="2" fill="#7c3aed" />
                        <rect x="13" y="2" width="9" height="9" rx="2" fill="#7c3aed" opacity="0.7" />
                        <rect x="2" y="13" width="9" height="9" rx="2" fill="#7c3aed" opacity="0.7" />
                        <rect x="13" y="13" width="9" height="9" rx="2" fill="#7c3aed" opacity="0.4" />
                    </svg>
                    <span>shyphan.ai</span>
                </a>

                {/* Desktop Nav */}
                <ul className={styles.links}>
                    {navLinks.map(({ label, hasDropdown }) => (
                        <li key={label} className={styles.navItem}>
                            <a href="#" className={styles.navLink}>
                                {label}
                                {hasDropdown && (
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right Side */}
                <div className={styles.actions}>
                    <a href="#" className={styles.launchedBadge}>
                        <span>Just Launched</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 2l1.08 3.26L13 5.27l-2.64 2.57.62 3.62L8 9.77l-3 1.69.62-3.62L3 5.27l3.92.99L8 2z" fill="#a78bfa" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 2l1.08 3.26L13 5.27l-2.64 2.57.62 3.62L8 9.77l-3 1.69.62-3.62L3 5.27l3.92.99L8 2z" fill="#c4b5fd" opacity="0.6" />
                        </svg>
                    </a>
                    <a href="#" className={styles.ctaBtn}>Book a Demo →</a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
                    <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
                    <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
                </button>
            </div>

            {/* Mobile Drawer */}
            {menuOpen && (
                <div className={styles.drawer}>
                    {navLinks.map(({ label }) => (
                        <a key={label} href="#" className={styles.drawerLink} onClick={() => setMenuOpen(false)}>
                            {label}
                        </a>
                    ))}
                    <a href="#" className={styles.drawerCta} onClick={() => setMenuOpen(false)}>Book a Demo →</a>
                </div>
            )}
        </nav>
    );
}
