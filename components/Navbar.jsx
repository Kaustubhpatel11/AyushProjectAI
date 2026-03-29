'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
    {
        label: 'Product',
        hasDropdown: true,
        items: [
            {
                label: 'Conversational Superintelligence™',
                href: '/conversational-superintelligence',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M10.2 6.2L9 5M17.8 6.2L19 5M10.2 11.8L9 13M14 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM3 21l9-9" /></svg>,
                color: '#6b7280'
            },
            {
                label: 'Humanoid AI Agent',
                href: '/humanoid-ai-agent-stack',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d946ef" strokeWidth="2"><path d="M12 2l3 5h5l-4 4 1 5-5-3-5 3 1-5-4-4h5z" fill="#d946ef" fillOpacity="0.2" /></svg>,
                color: '#d946ef'
            },
            {
                label: 'In-App Voice AI Assistant', href: '/in-app-voice-ai-assistant', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" /><line x1="8" y1="22" x2="16" y2="22" /></svg>
            },
            {
                label: 'Agent Management Platform', href: '#', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            },
            {
                label: 'AI Call Quality Analysis', href: '#', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            },
            {
                label: 'Analytics & Reporting', href: '#', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
            },
            {
                label: 'Vetted & Trained Telecallers', href: '#', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>
            },
            {
                label: 'Lead Management & Omnichannel Outreach', href: '#', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
            },
        ]
    },
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
                    {navLinks.map((navItem) => (
                        <li key={navItem.label} className={styles.navItem}>
                            <a href="#" className={styles.navLink}>
                                {navItem.label}
                                {navItem.hasDropdown && (
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </a>

                            {/* Dropdown Menu */}
                            {navItem.items && (
                                <div className={styles.dropdown}>
                                    {navItem.items.map((dropItem) => (
                                        <a href={dropItem.href} key={dropItem.label} className={styles.dropLink}>
                                            <span className={styles.dropIcon} style={{ color: dropItem.color || 'inherit' }}>
                                                {dropItem.icon}
                                            </span>
                                            <span className={styles.dropText}>{dropItem.label}</span>
                                        </a>
                                    ))}
                                </div>
                            )}
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
                    {navLinks.map((navItem) => (
                        <div key={navItem.label} className={styles.drawerGroup}>
                            <a href="#" className={styles.drawerLink} onClick={() => !navItem.items && setMenuOpen(false)}>
                                {navItem.label}
                            </a>
                            {navItem.items && (
                                <div className={styles.drawerSub}>
                                    {navItem.items.map(subItem => (
                                        <a href={subItem.href} key={subItem.label} className={styles.drawerSubLink} onClick={() => setMenuOpen(false)}>
                                            {subItem.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <a href="#" className={styles.drawerCta} onClick={() => setMenuOpen(false)}>Book a Demo →</a>
                </div>
            )}
        </nav>
    );
}
