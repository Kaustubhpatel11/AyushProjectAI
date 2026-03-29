'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ClientLogos from '@/components/ClientLogos';
import CaseStudies from '@/components/CaseStudies';
import StatsSection from '@/components/StatsSection';
import HumanLikeAI from '@/components/HumanLikeAI';
import VoiceAI from '@/components/VoiceAI';
import TechStack from '@/components/TechStack';
import SecuritySection from '@/components/SecuritySection';
import IntegrationsHub from '@/components/IntegrationsHub';
import FooterCTA from '@/components/FooterCTA';
import Footer from '@/components/Footer';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <AnnouncementBanner />
      <Navbar />
      <main>
        <HeroSection />

        <div className="reveal">
          <ClientLogos />
        </div>

        <div className="reveal">
          <CaseStudies />
        </div>

        <div className="reveal">
          <StatsSection />
        </div>

        <div className="reveal">
          <HumanLikeAI />
        </div>

        <div className="reveal">
          <VoiceAI />
        </div>

        <div className="reveal">
          <TechStack />
        </div>

        <div className="reveal">
          <SecuritySection />
        </div>

        <div className="reveal">
          <IntegrationsHub />
        </div>

        <div className="reveal">
          <FooterCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
