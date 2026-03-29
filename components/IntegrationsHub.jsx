import styles from './IntegrationsHub.module.css';

// Card definitions with SVG line connection point (in 1000x520 viewBox)
const cardDefs = [
    {
        id: 'crms', pos: 'topLeft', label: 'CRMs',
        lineX: 230, lineY: 110,
        items: [
            { name: 'Salesforce' }, { name: 'LeadSquared' },
            { name: 'Zoho' }, { name: 'Kylas' },
            { name: 'Freshsales' }, { name: '+ more', plain: true },
        ],
    },
    {
        id: 'ticketing', pos: 'top', label: 'Ticketing & Support',
        lineX: 500, lineY: 152,
        items: [
            { name: 'Freshdesk' }, { name: 'Zendesk' },
            { name: 'Intercom' },
        ],
    },
    {
        id: 'dialers', pos: 'topRight', label: 'Dialers & Communication',
        lineX: 770, lineY: 110,
        items: [
            { name: 'Exotel' }, { name: 'Knowlarity' },
            { name: 'Ozonetel' }, { name: 'Gupshup' },
        ],
    },
    {
        id: 'data', pos: 'bottomLeft', label: 'Data & Reporting',
        lineX: 230, lineY: 395,
        items: [
            { name: 'BigQuery' }, { name: 'Redshift' },
            { name: 'AWS S3' },
        ],
    },
    {
        id: 'custom', pos: 'bottom', label: 'Custom',
        lineX: 500, lineY: 402,
        items: [{ name: 'Add Your Own', plain: true }],
        isCustom: true,
    },
    {
        id: 'apis', pos: 'bottomRight', label: 'Lead & Workflow APIs',
        lineX: 770, lineY: 395,
        items: [
            { name: 'Webhooks' }, { name: 'JSON APIs' },
            { name: '3rd-Party Connectors' },
        ],
        isList: true,
    },
];

// Center hub coords in 1000×520 SVG space
const CX = 500, CY = 260;

export default function IntegrationsHub() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Seamless Integrations, Zero Friction</h2>

                <div className={styles.hubWrapper}>

                    {/* SVG Connector Lines (Desktop) */}
                    <svg
                        className={styles.connectorSvgDesktop}
                        viewBox="0 0 1000 520"
                        preserveAspectRatio="xMidYMid meet"
                        aria-hidden="true"
                    >
                        <defs>
                            <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                                <stop offset="35%" stopColor="#e8d5ff" stopOpacity="0.9" />
                                <stop offset="70%" stopColor="#9f7aea" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                            </radialGradient>
                        </defs>

                        {/* Glow halo behind center */}
                        <circle cx={CX} cy={CY} r="110" fill="url(#hubGlow)" opacity="0.35" />

                        {/* Connector lines */}
                        {cardDefs.map((card) => (
                            <g key={card.id}>
                                <line
                                    x1={CX} y1={CY}
                                    x2={card.lineX} y2={card.lineY}
                                    stroke="rgba(180,160,255,0.35)"
                                    strokeWidth="1.5"
                                    className={styles.connectorLine}
                                />
                                {/* Endpoint dot on card side */}
                                <circle
                                    cx={card.lineX} cy={card.lineY}
                                    r="4" fill="#b794f4" fillOpacity="0.9"
                                    className={styles.connectorDot}
                                />
                            </g>
                        ))}
                    </svg>

                    {/* Center Hub */}
                    <div className={styles.centerHub}>
                        <div className={styles.centerGlow} />
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                            {/* Stack/layers icon matching the reference */}
                            <path d="M21 6 L36 14 L21 22 L6 14 Z" fill="rgba(80,60,140,0.9)" stroke="rgba(120,100,200,0.6)" strokeWidth="0.8" />
                            <path d="M6 14 L6 22 L21 30 L36 22 L36 14 L21 22 Z" fill="rgba(60,45,120,0.85)" stroke="rgba(120,100,200,0.5)" strokeWidth="0.8" />
                            <path d="M6 22 L6 28 L21 36 L36 28 L36 22 L21 30 Z" fill="rgba(45,35,100,0.8)" stroke="rgba(120,100,200,0.4)" strokeWidth="0.8" />
                            <ellipse cx="21" cy="14" rx="15" ry="4" fill="rgba(180,160,255,0.25)" />
                        </svg>
                    </div>

                    {/* Integration Cards Container */}
                    <div className={styles.cardsContainer}>
                        {/* Mobile Top Rail (drops from orb to horizontal rail) */}
                        <div className={styles.mobileRailTop} />

                        {cardDefs.map((card) => (
                            <div key={card.id} className={`${styles.card} ${styles[card.pos]}`}>
                                {/* Mobile Stubs and Dots */}
                                <div className={styles.mobileStubDotLeft} />
                                <div className={styles.mobileStubDotRight} />

                                {/* Category label */}
                                <div className={`${styles.label} ${card.isCustom ? styles.labelCustom : ''}`}>
                                    {card.label}
                                </div>

                                {/* Items */}
                                {card.isList ? (
                                    <ul className={styles.bulletList}>
                                        {card.items.map(it => (
                                            <li key={it.name} className={styles.bulletItem}>{it.name}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className={`${styles.items} ${card.items.length <= 3 ? styles.itemsCol : ''}`}>
                                        {card.items.map(it => (
                                            <div key={it.name} className={`${styles.item} ${it.plain ? styles.itemPlain : ''}`}>
                                                {!it.plain && <span className={styles.icon} />}
                                                <span className={styles.itemName}>{it.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
