'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import FooterCTA from '@/components/FooterCTA';
import Footer from '@/components/Footer';

import InAppHero from '@/components/InAppHero';
import InAppFriction from '@/components/InAppFriction';
import InAppSolutions from '@/components/InAppSolutions';
import InAppUseCases from '@/components/InAppUseCases';
import InAppAgents from '@/components/InAppAgents';
import InAppSecurity from '@/components/InAppSecurity';

export default function InAppVoiceAIAssistant() {
    useScrollReveal();

    return (
        <>
            <AnnouncementBanner />
            <Navbar />
            <main>
                <InAppHero />

                <div className="reveal">
                    <InAppFriction />
                </div>

                <div className="reveal">
                    <InAppSolutions />
                </div>

                <div className="reveal">
                    <InAppUseCases />
                </div>

                <div className="reveal">
                    <InAppAgents />
                </div>

                <div className="reveal">
                    <InAppSecurity />
                </div>

            </main>
            <Footer />
        </>
    );
}
