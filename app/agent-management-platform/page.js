'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import AgentMgmtHero from '@/components/AgentMgmtHero';
import AgentMgmtTabs from '@/components/AgentMgmtTabs';
import AgentMgmtFeature from '@/components/AgentMgmtFeature';

import AgentMgmtRelated from '@/components/AgentMgmtRelated';
import AgentMgmtCTA from '@/components/AgentMgmtCTA';

// Custom graphics for feature nodes
const GraphicOne = () => (
    <div style={{ position: 'relative', width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', width: '300px', height: '300px', background: '#ecfdf5', borderRadius: '50%', zIndex: 0, bottom: '-20px', left: '-20px' }}></div>
        <div style={{ zIndex: 1, width: '220px', height: '450px', background: '#fff', borderRadius: '24px', border: '8px solid #111827', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <div style={{ background: '#6d28d9', color: '#fff', padding: '20px 16px', borderRadius: '16px 16px 0 0', textAlign: 'center', height: '90px' }}>
                <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>shyphan</span>
            </div>
            <div style={{ padding: '16px' }}>
                <div style={{ width: '100%', height: '12px', background: '#e5e7eb', borderRadius: '4px', marginBottom: '12px' }}></div>
                <div style={{ width: '80%', height: '12px', background: '#e5e7eb', borderRadius: '4px', marginBottom: '24px' }}></div>
                <div style={{ width: '100%', height: '180px', background: '#f3f4f6', borderRadius: '12px' }}></div>
            </div>
        </div>
    </div>
);

const GraphicTwo = () => (
    <div style={{ position: 'relative', width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '80%', height: '300px', background: '#ccfbf1', borderRadius: '24px', padding: '32px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#115e59', marginBottom: '8px' }}>Lesson #4</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111827', lineHeight: 1 }}>CONVINCE<br />& CLOSE</div>
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '200px', height: '200px', background: '#14b8a6', borderRadius: '50%' }}></div>
        </div>
    </div>
);

export default function AgentManagementPlatform() {
    useScrollReveal();

    return (
        <div style={{ background: '#f4f5f9' }}> {/* Entire page has a slight off-white/gray backing based on ref */}
            <AnnouncementBanner />
            <Navbar />
            <main>
                <AgentMgmtHero />

                <div className="reveal">
                    <AgentMgmtTabs />
                </div>

                <div className="reveal">
                    <AgentMgmtFeature
                        id="screening"
                        label="SCREENING"
                        title="Selecting the right callers for your campaign"
                        description="Your campaign is handled by skilled and vetted callers. Only 2% of the callers who sign up on the app successfully qualify, meeting the CEFR guidelines through telesales and speech assessments."
                        linkText="Explore Further"
                        mediaNode={<GraphicOne />}
                        reversed={false}
                    />
                </div>

                <div className="reveal">
                    <AgentMgmtFeature
                        id="training"
                        label="TRAINING"
                        title="Module-based & on-the-job training for improved performance"
                        description="Our training modules are based on real-life scenarios. The app has built-in training for calling, objection handling, and product mastery ensuring maximum quality."
                        linkText="Discover More"
                        mediaNode={<GraphicTwo />}
                        reversed={true}
                    />
                </div>

                <div className="reveal">
                    <AgentMgmtFeature
                        id="outreach"
                        label="OUTREACH"
                        title="System-driven omnichannel outreach for maximum connectivity"
                        description="Combine AI-powered voice calls with automated SMS and WhatsApp sequences to ensure you reach leads exactly when they are most likely to respond."
                        linkText="Learn More"
                        mediaNode={<div style={{ width: '100%', height: '400px', background: '#f3f4f6', borderRadius: '24px' }} />}
                        reversed={false}
                    />
                </div>

                <div className="reveal">
                    <AgentMgmtRelated />
                </div>

                <div className="reveal">
                    <AgentMgmtCTA />
                </div>

            </main>
            <Footer />
        </div>
    );
}
