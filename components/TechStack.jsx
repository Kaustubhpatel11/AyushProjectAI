import styles from './TechStack.module.css';

const WAVEFORM_HEIGHTS = [16, 28, 22, 36, 30, 20, 38, 24, 32, 18, 34, 26, 36, 20, 28];
const VOC_HEIGHTS = [40, 65, 45, 80, 55, 70, 50];

// SVG viewBox: 960 x 420
// Pipeline Y = 210, top cards bottom = 180, bottom cards top = 240
const PIPELINE_Y = 210;
const stages = [
    { id: 'lead-mgr', label: 'AI Lead Manager', x: 240 },
    { id: 'human-ai', label: 'Human + AI Agents', x: 400 },
    { id: 'supervisor', label: 'AI Supervisor', x: 570 },
    { id: 'roi', label: 'ROI Optimizer', x: 730 },
];

export default function TechStack() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Driving Revenue with Deep Tech Stack</h2>

            <div className={styles.diagramWrap}>

                {/* ── TOP ROW ── */}
                <div className={styles.topRow}>

                    {/* Connectivity Engine + Omnichannel card */}
                    <div className={styles.topLeftCard}>
                        <div className={styles.connectEngineBox}>
                            {/* Lead avatars */}
                            <div className={styles.leadAvatars}>
                                {[1, 2, 3, 4].map(n => (
                                    <div key={n} className={styles.leadAvatar}>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                            <circle cx="14" cy="14" r="13" fill="url(#avatarGrad)" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
                                            <circle cx="14" cy="11" r="5" fill="rgba(255,255,255,0.8)" />
                                            <ellipse cx="14" cy="22" rx="7" ry="4" fill="rgba(255,255,255,0.7)" />
                                        </svg>
                                        <span className={styles.avatarNum}>{n}</span>
                                    </div>
                                ))}
                            </div>
                            {/* Engine label + badges */}
                            <div className={styles.engineInfo}>
                                <div className={styles.engineTitle}>Connectivity Engine</div>
                                <div className={styles.engineBadge}>Spam Check</div>
                                <div className={styles.engineBadge}>DND Scrubbing</div>
                            </div>
                        </div>

                        {/* Omnichannel section */}
                        <div className={styles.omniBox}>
                            <div className={styles.omniOrb}>
                                <div className={styles.omniOrbInner}>
                                    <div className={styles.omniIcon} title="WhatsApp">💬</div>
                                </div>
                            </div>
                            <div className={styles.omniLabel}>Omnichannel</div>
                            <div className={styles.omniChannels}>
                                <span title="WhatsApp">📱</span>
                                <span title="Email">📧</span>
                                <span title="Chat">💬</span>
                                <span title="SMS">🗨️</span>
                            </div>
                        </div>
                    </div>

                    {/* Quality Audits card */}
                    <div className={styles.topRightCard}>
                        <div className={styles.qualityTitle}>Quality Audits</div>
                        <div className={styles.qualityContent}>
                            <div className={styles.donutWrap}>
                                <svg viewBox="0 0 80 80" width="72" height="72">
                                    <defs>
                                        <linearGradient id="donutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#6366f1" />
                                            <stop offset="100%" stopColor="#06b6d4" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="40" cy="40" r="28" fill="none" stroke="#e0e7ff" strokeWidth="10" />
                                    <circle cx="40" cy="40" r="28" fill="none" stroke="url(#donutGrad)" strokeWidth="10"
                                        strokeDasharray={`${2 * Math.PI * 28 * 0.87} ${2 * Math.PI * 28 * 0.13}`}
                                        strokeDashoffset={`${2 * Math.PI * 28 * 0.25}`}
                                        strokeLinecap="round"
                                    />
                                    <text x="40" y="44" textAnchor="middle" fontSize="13" fontWeight="800" fill="#6366f1">87%</text>
                                </svg>
                            </div>
                            <div className={styles.qualityStats}>
                                <div className={styles.qualityStat}>23 Parameters</div>
                                <div className={styles.qualityStat}>Quality Score ✦</div>
                                <div className={styles.qualityStat}>Personalized Feedback ✦</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* ── PIPELINE ROW ── */}
                <div className={styles.pipelineRow}>

                    {/* Leads */}
                    <div className={styles.leadsNode}>
                        <div className={styles.leadsAvatars}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <circle cx="15" cy="15" r="14" fill="#ede9fe" stroke="#c4b5fd" strokeWidth="1" />
                                <circle cx="15" cy="12" r="5" fill="#7c3aed" opacity="0.8" />
                                <ellipse cx="15" cy="23" rx="8" ry="4" fill="#7c3aed" opacity="0.7" />
                            </svg>
                        </div>
                        <span className={styles.leadsLabel}>Leads</span>
                    </div>

                    {/* Dashed arrow */}
                    <div className={styles.arrow} />

                    {/* Stage nodes */}
                    {stages.map((s, i) => (
                        <div key={s.id} className={styles.stageGroup}>
                            <div className={styles.stageNode}>{s.label}</div>
                            <div className={styles.arrow} />
                        </div>
                    ))}

                    {/* Outcomes */}
                    <div className={styles.outcomesNode}>
                        <div className={styles.outcomesIcons}>
                            <span className={styles.outIcon} style={{ opacity: 1 }}>₹</span>
                            <span className={styles.outIcon} style={{ opacity: 0.7 }}>₹</span>
                            <span className={styles.outIcon} style={{ opacity: 0.4 }}>₹</span>
                        </div>
                        <span className={styles.outcomesLabel}>Outcomes</span>
                    </div>
                </div>

                {/* ── BOTTOM ROW ── */}
                <div className={styles.bottomRow}>

                    {/* Human Agents card */}
                    <div className={styles.humanCard}>
                        <div className={styles.humanAgentsRow}>
                            <div className={styles.humanPhotos}>
                                {['#8b5cf6', '#6366f1', '#3b82f6'].map((color, i) => (
                                    <div key={i} className={styles.humanAvatar} style={{ background: color }}>
                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                                            <circle cx="18" cy="14" r="7" fill="rgba(255,255,255,0.7)" />
                                            <ellipse cx="18" cy="30" rx="11" ry="6" fill="rgba(255,255,255,0.6)" />
                                        </svg>
                                    </div>
                                ))}
                            </div>
                            <span className={styles.humanLabel}>On-site &amp; Remote Human Agents</span>
                        </div>

                        <div className={styles.aiAgentRow}>
                            <div className={styles.aiOrbSmall}>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <circle cx="14" cy="14" r="13" fill="url(#aiGrad)" opacity="0.9" />
                                </svg>
                                <defs>
                                    <radialGradient id="aiGrad">
                                        <stop offset="0%" stopColor="#c4b5fd" />
                                        <stop offset="100%" stopColor="#6366f1" />
                                    </radialGradient>
                                </defs>
                            </div>
                            <div className={styles.waveform}>
                                {WAVEFORM_HEIGHTS.map((h, i) => (
                                    <div key={i} className={styles.waveBar}
                                        style={{ height: `${h}px`, animationDelay: `${(i * 0.08).toFixed(2)}s` }}
                                    />
                                ))}
                            </div>
                            <span className={styles.humanLabel}>Humanoid AI Agent</span>
                        </div>
                    </div>

                    {/* A/B Testing + VoC Insights card */}
                    <div className={styles.abVocCard}>
                        <div className={styles.abSection}>
                            <div className={styles.abTitle}>A/B Testing</div>
                            <div className={styles.abChartWrap}>
                                <svg viewBox="0 0 100 60" width="100%" height="70">
                                    <path d="M0 55 C20 45 40 20 65 10 L100 5" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" />
                                    <path d="M0 55 C20 48 40 40 65 32 L100 35" fill="none" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
                                </svg>
                                <div className={styles.abBadges}>
                                    <span className={styles.abBadge} style={{ background: '#6366f1' }}>A</span>
                                    <span className={styles.abBadge} style={{ background: '#06b6d4' }}>B</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.vocSection}>
                            <div className={styles.vocTitle}>VoC Insights</div>
                            <div className={styles.vocBarsWrap}>
                                {VOC_HEIGHTS.map((h, i) => (
                                    <div key={i} className={styles.vocBar} style={{ height: `${h}%` }} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Feedback Loop label */}
                    <div className={styles.feedbackLoop}>
                        Feedback<br />Loop
                    </div>
                </div>

                {/* ── SVG CONNECTOR LINES ── */}
                <svg className={styles.connectorSvg} viewBox="0 0 960 420" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                    <defs>
                        <marker id="arrowHead" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M0 0 L8 4 L0 8 Z" fill="#a78bfa" opacity="0.7" />
                        </marker>
                    </defs>
                    {/* Top: AI Lead Manager (x~240) up to Connectivity Engine bottom */}
                    <line x1="240" y1="195" x2="240" y2="160"
                        stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.6" markerEnd="url(#arrowHead)" />
                    {/* Top: AI Supervisor (x~570) up to Quality Audits bottom */}
                    <line x1="650" y1="195" x2="650" y2="160"
                        stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.6" markerEnd="url(#arrowHead)" />
                    {/* Bottom: Human+AI Agents (x~400) down to Human Agents card */}
                    <line x1="400" y1="230" x2="400" y2="265"
                        stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.6" markerEnd="url(#arrowHead)" />
                    {/* Bottom: AI Supervisor (x~570) down to A/B card */}
                    <line x1="570" y1="230" x2="570" y2="265"
                        stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.6" markerEnd="url(#arrowHead)" />
                    {/* Left side outer L-line: from top-left of outer box down to Leads */}
                    <line x1="68" y1="40" x2="68" y2="210"
                        stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                    {/* Right side outer L-line: from top-right down to Outcomes */}
                    <line x1="890" y1="40" x2="890" y2="210"
                        stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                </svg>

            </div>
        </section>
    );
}
