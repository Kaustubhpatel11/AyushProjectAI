import styles from './TechStack.module.css';

const stages = [
    { id: 'lead-mgr', label: 'AI Lead Manager', color: '#7c3aed' },
    { id: 'agents', label: 'Human + AI Agents', color: '#7c3aed' },
    { id: 'supervisor', label: 'AI Supervisor', color: '#7c3aed' },
    { id: 'roi', label: 'ROI Optimizer', color: '#7c3aed' },
];

export default function TechStack() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Driving Revenue with Deep Tech Stack</h2>

                {/* Top info cards */}
                <div className={styles.topCards}>
                    <div className={styles.infoCard}>
                        <div className={styles.infoCardTitle}>Connectivity Engine</div>
                        <div className={styles.infoTag}>Spam Check</div>
                        <div className={styles.infoTag}>DND Scrubbing</div>
                        <div className={styles.infoCardSep} />
                        <div className={styles.omniLabel}>Omnichannel</div>
                        <div className={styles.omniIcons}>
                            <span title="WhatsApp">💬</span>
                            <span title="Email">📧</span>
                            <span title="SMS">📱</span>
                            <span title="Chat">🗨️</span>
                        </div>
                    </div>
                    <div className={styles.infoCard}>
                        <div className={styles.infoCardTitle}>Quality Audits</div>
                        <div className={styles.infoRow}>
                            <div className={styles.donut}>
                                <svg viewBox="0 0 40 40" width="56" height="56">
                                    <circle cx="20" cy="20" r="15" fill="none" stroke="#ede9fe" strokeWidth="5" />
                                    <circle cx="20" cy="20" r="15" fill="none" stroke="#7c3aed" strokeWidth="5"
                                        strokeDasharray={`${2 * Math.PI * 15 * 0.87} ${2 * Math.PI * 15 * 0.13}`}
                                        strokeDashoffset={`${2 * Math.PI * 15 * 0.25}`}
                                        strokeLinecap="round"
                                    />
                                    <text x="20" y="24" textAnchor="middle" fontSize="9" fontWeight="700" fill="#7c3aed">87%</text>
                                </svg>
                            </div>
                            <div>
                                <div className={styles.qualityRow}>23 Parameters</div>
                                <div className={styles.qualityRow}>Quality Score ✦</div>
                                <div className={styles.qualityRow}>Personalized Feedback ✦</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pipeline Row */}
                <div className={styles.pipeline}>
                    <div className={styles.pipelineStart}>
                        <div className={styles.leadsNode}>
                            <div className={styles.userIcon}>👤</div>
                            <div className={styles.userIcon}>👤</div>
                            <div className={styles.userIcon}>👤</div>
                            <div className={styles.userIcon}>👤</div>
                        </div>
                        <span className={styles.leadsLabel}>Leads</span>
                    </div>
                    <div className={styles.pipelineLine} />
                    {stages.map((s, i) => (
                        <div key={s.id} className={styles.pipelineStageWrapper}>
                            <div className={styles.stageNode} style={{ background: s.color }}>
                                {s.label}
                            </div>
                            {i < stages.length - 1 && <div className={styles.pipelineLine} />}
                        </div>
                    ))}
                    <div className={styles.pipelineLine} />
                    <div className={styles.outcomeNode}>
                        <span className={styles.outcomeLabel}>Outcomes</span>
                        <div className={styles.outcomeIcons}>
                            <span className={styles.outIcon}>₹</span>
                            <span className={styles.outIcon}>₹</span>
                            <span className={styles.outIcon} style={{ opacity: 0.4 }}>₹</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Info Cards */}
                <div className={styles.bottomCards}>
                    <div className={styles.infoCard}>
                        <div className={styles.infoCardTitle}>Human Agents</div>
                        <div className={styles.agentRow}>
                            <div className={styles.agentAvatar} style={{ background: '#7c3aed' }}>A</div>
                            <div className={styles.agentAvatar} style={{ background: '#059669' }}>B</div>
                            <span className={styles.agentText}>On-site &amp; Remote Human Agents</span>
                        </div>
                        <div className={styles.aiWave}>
                            <div className={styles.aiWaveIcon}>🤖</div>
                            <div className={styles.waveBars}>
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className={styles.waveBar} style={{ animationDelay: `${i * 0.1}s`, height: `${8 + Math.sin(i) * 6}px` }} />
                                ))}
                            </div>
                            <span className={styles.agentText}>Humanoid AI Agent</span>
                        </div>
                    </div>
                    <div className={styles.infoCard}>
                        <div className={styles.abRow}>
                            <div>
                                <div className={styles.infoCardTitle}>A/B Testing</div>
                                <div className={styles.abChart}>
                                    <div className={styles.abBarA} />
                                    <div className={styles.abBarB} />
                                </div>
                            </div>
                            <div>
                                <div className={styles.infoCardTitle}>VoC Insights</div>
                                <div className={styles.vocBars}>
                                    {[60, 80, 45, 90, 70].map((h, i) => (
                                        <div key={i} className={styles.vocBar} style={{ height: `${h * 0.5}px` }} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={styles.feedbackTag}>Feedback Loop</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
