'use client';
import styles from './AgentMgmtFeature.module.css';
import Link from 'next/link';

/**
 * Reusable layout for Agent Management features
 * @param {string} label - Uppercase tiny label above title (e.g. SCREENING)
 * @param {string} title - Main H2 Title
 * @param {string} description - P tag description
 * @param {string} linkText - Text for the CTA link
 * @param {string} linkHref - Href for the CTA link
 * @param {ReactNode} mediaNode - The custom graphical component (mockup) to display
 * @param {boolean} reversed - If true, text is on the right, media on the left
 */
export default function AgentMgmtFeature({
    id,
    label,
    title,
    description,
    linkText = "Explore Further",
    linkHref = "#",
    mediaNode,
    reversed = false
}) {
    return (
        <section id={id} className={`${styles.section} ${reversed ? styles.reversed : ''}`}>
            <div className={styles.container}>
                <div className={styles.textContent}>
                    {label && <div className={styles.label}>{label}</div>}
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>

                    <Link href={linkHref} className={styles.featureLink}>
                        {linkText}
                    </Link>
                </div>

                <div className={styles.mediaContent}>
                    {mediaNode}
                </div>
            </div>
        </section>
    );
}
