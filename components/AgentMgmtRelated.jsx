'use client';
import styles from './AgentMgmtRelated.module.css';
import Link from 'next/link';

const posts = [
    {
        tag: "REPORT",
        title: "Introducing Humanoid Vision Agent: The First AI Agent With Eyes",
        link: "#",
        bgMode: "purple"
    },
    {
        tag: "BLOG",
        title: "Why Building Voice AI In-House Is a Costly Illusion for Enterprises",
        link: "#",
        bgMode: "blue"
    },
    {
        tag: "ARTICLE",
        title: "Why India Is the Boss Fight for Voice AI",
        link: "#",
        bgMode: "green"
    }
];

export default function AgentMgmtRelated() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Related Posts</h2>

                <div className={styles.grid}>
                    {posts.map((post, i) => (
                        <Link href={post.link} key={i} className={styles.card}>
                            <div className={`${styles.imagePlaceholder} ${styles[post.bgMode]}`}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.tag}>{post.tag}</div>
                                <h3 className={styles.title}>{post.title}</h3>
                                <div className={styles.readMore}>
                                    Read Now
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
