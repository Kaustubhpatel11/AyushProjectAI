'use client';
import styles from './CallQualityHero.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function CallQualityHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>

                {/* Left Text Content */}
                <div className={styles.textContent}>
                    <div className={styles.label}>CALL QUALITY ANALYSIS</div>
                    <h1 className={styles.headline}>
                        Industry-leading call <br /> quality analysis
                    </h1>
                    <p className={styles.subText}>
                        We power high-quality calls combining AI and human <br /> expertise in quality analysis
                    </p>
                    <Link href="#" className={styles.ctaButton}>
                        TALK TO US
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                </div>

                {/* Right Video / Graphic Container */}
                <div className={styles.mediaWrapper}>
                    <div className={styles.videoPlayer}>
                        {/* Video Mockup Background */}
                        <div className={styles.videoBackground}>
                            {/* Abstract cyber visual simulation */}
                            <div className={styles.cyberBeam}></div>
                            <div className={styles.cyberGrid}></div>
                        </div>

                        {/* Overlay Content */}
                        <div className={styles.videoOverlay}>
                            <div className={styles.videoLogo}>
                                <span className={styles.logoIcon}>❖</span> shyphan
                            </div>

                            <div className={styles.videoCenter}>
                                <div className={styles.videoSub}>AI-POWERED</div>
                                <div className={styles.videoTitle}>Quality<br />Monitoring</div>

                                <div className={styles.playButtonWrapper}>
                                    <button className={styles.playButton}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                    </button>
                                </div>
                            </div>

                            {/* Video Controls Bar */}
                            <div className={styles.videoControls}>
                                <div className={styles.playPauseToggle}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                </div>
                                <div className={styles.timestamp}>1:37</div>
                                <div className={styles.progressBar}>
                                    <div className={styles.progressFill}></div>
                                    <div className={styles.progressNub}></div>
                                </div>
                                <div className={styles.controlIcons}>
                                    <span className={styles.controlIcon}>cc</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* How it works pointer */}
                    <div className={styles.howItWorks}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2"><path d="M12 20V14"></path><path d="M8 18L12 14L16 18"></path><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect></svg>
                        HERE'S HOW IT WORKS
                    </div>
                </div>

            </div>
        </section>
    );
}
