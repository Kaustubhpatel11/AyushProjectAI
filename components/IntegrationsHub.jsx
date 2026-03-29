import styles from './IntegrationsHub.module.css';

const cardDefs = [
    {
        id: 'crms', label: 'CRMs', pos: 'topLeft',
        items: ['Salesforce', 'LeadSquared', 'Zoho', 'Kylas', 'Freshsales', '+ more'],
        // line connects from right edge mid of this card to center
        lineX: 222, lineY: 118,
    },
    {
        id: 'ticketing', label: 'Ticketing & Support', pos: 'top',
        items: ['Freshdesk', 'Zendesk', 'Intercom'],
        lineX: 490, lineY: 132,
    },
    {
        id: 'dialers', label: 'Dialers & Communication', pos: 'topRight',
        items: ['Exotel', 'Knowlarity', 'Ozonetel', 'Gupshup'],
        lineX: 758, lineY: 118,
    },
    {
        id: 'data', label: 'Data & Reporting', pos: 'bottomLeft',
        items: ['BigQuery', 'Redshift', 'AWS S3'],
        lineX: 222, lineY: 400,
    },
    {
        id: 'custom', label: 'Custom', pos: 'bottom',
        items: ['Add Your Own'], isCustom: true,
        lineX: 490, lineY: 385,
    },
    {
        id: 'apis', label: 'Lead & Workflow APIs', pos: 'bottomRight',
        items: ['Webhooks', 'JSON APIs', '3rd-Party Connectors'],
        lineX: 758, lineY: 400,
    },
];

// Center hub coordinates in the SVG viewBox (980 x 520)
const CX = 490, CY = 260;

export default function IntegrationsHub() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Seamless Integrations, Zero Friction</h2>

                <div className={styles.hubWrapper}>
                    {/* SVG Connector Lines — sits behind everything */}
                    <svg
                        className={styles.connectorSvg}
                        viewBox="0 0 980 520"
                        preserveAspectRatio="xMidYMid meet"
                        aria-hidden="true"
                    >
                        <defs>
                            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                            </linearGradient>
                            <filter id="lineGlow">
                                <feGaussianBlur stdDeviation="2" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {cardDefs.map((card) => (
                            <g key={card.id}>
                                {/* Glow line underneath */}
                                <line
                                    x1={CX} y1={CY}
                                    x2={card.lineX} y2={card.lineY}
                                    stroke="#6366f1"
                                    strokeWidth="3"
                                    strokeOpacity="0.12"
                                    filter="url(#lineGlow)"
                                />
                                {/* Main animated dashed line */}
                                <line
                                    x1={CX} y1={CY}
                                    x2={card.lineX} y2={card.lineY}
                                    stroke="url(#lineGrad)"
                                    strokeWidth="1.5"
                                    strokeDasharray="6 5"
                                    strokeOpacity="0.65"
                                    className={styles.connectorLine}
                                />
                                {/* Endpoint dot on the card side */}
                                <circle
                                    cx={card.lineX} cy={card.lineY}
                                    r="4"
                                    fill="#06b6d4"
                                    fillOpacity="0.8"
                                    className={styles.connectorDot}
                                />
                            </g>
                        ))}

                        {/* Center hub dot (behind the center card) */}
                        <circle cx={CX} cy={CY} r="40" fill="rgba(99,102,241,0.08)" />
                        <circle cx={CX} cy={CY} r="26" fill="rgba(99,102,241,0.14)" className={styles.centerPulse} />
                    </svg>

                    {/* Center Node */}
                    <div className={`${styles.card} ${styles.center}`}>
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                            <rect x="2" y="2" width="15" height="15" rx="3" fill="#6366f1" />
                            <rect x="21" y="2" width="15" height="15" rx="3" fill="#6366f1" opacity="0.7" />
                            <rect x="2" y="21" width="15" height="15" rx="3" fill="#6366f1" opacity="0.7" />
                            <rect x="21" y="21" width="15" height="15" rx="3" fill="#6366f1" opacity="0.4" />
                        </svg>
                    </div>

                    {/* Integration Cards */}
                    {cardDefs.map((card) => (
                        <div key={card.id} className={`${styles.card} ${styles[card.pos]}`}>
                            <div className={`${styles.cardHeader} ${card.isCustom ? styles.cardHeaderCustom : ''}`}>
                                {card.label}
                            </div>
                            <div className={styles.cardItems}>
                                {card.items.map(item => (
                                    <div key={item} className={styles.item}>{item}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
