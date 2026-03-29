'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import CallQualityHero from '@/components/CallQualityHero';
import CallQualityFeatures from '@/components/CallQualityFeatures';
import CallQualityDashboard from '@/components/CallQualityDashboard';
import CallQualityAnalytics from '@/components/CallQualityAnalytics';
import CallQualityRelated from '@/components/CallQualityRelated';

import AgentMgmtCTA from '@/components/AgentMgmtCTA';

export default function CallQualityAnalysis() {
    useScrollReveal();

    return (
        <div style={{ background: '#f4f5f9' }}> {/* Entire page has a very subtle off-white/gray base theme */}
            <AnnouncementBanner />
            <Navbar />
            <main>
                <CallQualityHero />

                <div className="reveal">
                    <CallQualityFeatures />
                </div>

                <div className="reveal">
                    <CallQualityDashboard />
                </div>

                <div className="reveal">
                    <CallQualityAnalytics />
                </div>

                <div className="reveal">
                    <CallQualityRelated />
                </div>

                <div className="reveal">
                    <AgentMgmtCTA />
                </div>

            </main>
            <Footer />
        </div>
    );
}
