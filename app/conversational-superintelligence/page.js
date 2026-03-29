'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import FooterCTA from '@/components/FooterCTA';
import Footer from '@/components/Footer';

import ConversationalHero from '@/components/ConversationalHero';
import LogoTickerSub from '@/components/LogoTickerSub';
import StatsGlowing from '@/components/StatsGlowing';
import AgentMind from '@/components/AgentMind';
import Flywheel from '@/components/Flywheel';
import DataMoatCaps from '@/components/DataMoatCaps';
import IntelligenceEngine from '@/components/IntelligenceEngine';
import SeeHowItWorksCTA from '@/components/SeeHowItWorksCTA';

export default function ConversationalSuperintelligence() {
    useScrollReveal();

    return (
        <>
            <AnnouncementBanner />
            <Navbar />
            <main>
                <ConversationalHero />

                <div className="reveal">
                    <LogoTickerSub />
                </div>

                <div className="reveal">
                    <StatsGlowing />
                </div>

                <div className="reveal">
                    <AgentMind />
                </div>

                <div className="reveal">
                    <Flywheel />
                </div>

                <div className="reveal">
                    <DataMoatCaps />
                </div>

                <div className="reveal">
                    <IntelligenceEngine />
                </div>

                <div className="reveal">
                    <SeeHowItWorksCTA />
                </div>

                <div className="reveal">
                    <FooterCTA />
                </div>
            </main>
            <Footer />
        </>
    );
}
