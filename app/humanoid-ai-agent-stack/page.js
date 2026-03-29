'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import FooterCTA from '@/components/FooterCTA';
import Footer from '@/components/Footer';

import HumanoidHero from '@/components/HumanoidHero';
import HumanoidStats from '@/components/HumanoidStats';
import OneStackUseCases from '@/components/OneStackUseCases';
import HumanoidAudioUI from '@/components/HumanoidAudioUI';
import HumanoidCaps from '@/components/HumanoidCaps';

export default function HumanoidAIAgentStack() {
    useScrollReveal();

    return (
        <>
            <AnnouncementBanner />
            <Navbar />
            <main>
                <HumanoidHero />

                <div className="reveal">
                    <HumanoidStats />
                </div>

                <div className="reveal">
                    <OneStackUseCases />
                </div>

                <div className="reveal">
                    <HumanoidAudioUI />
                </div>

                <div className="reveal">
                    <HumanoidCaps />
                </div>

                <div className="reveal">
                    <FooterCTA />
                </div>
            </main>
            <Footer />
        </>
    );
}
