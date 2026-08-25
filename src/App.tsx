import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FieldNotes } from './components/FieldNotes';
import { TheRefuge } from './components/TheRefuge';
import { ChaletSelector } from './components/ChaletSelector';
import { KilimanjaroSection } from './components/KilimanjaroSection';
import { Viewfinder } from './components/Viewfinder';
import { WarmBasecamp } from './components/WarmBasecamp';
import { AconcaguaSection } from './components/AconcaguaSection';
import { TrailConnection } from './components/TrailConnection';
import { OriginStory } from './components/OriginStory';
import { Reviews } from './components/Reviews';
import { FieldGallery } from './components/FieldGallery';
import { LocationSection } from './components/LocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#151715] text-[#EDE9DF] selection:bg-[#D86A3E] selection:text-[#151715] font-sans antialiased overflow-x-hidden">
      {/* 00. Field Navigation Header */}
      <Header />

      {/* 01. Hero Section */}
      <Hero />

      {/* 02. Field Notes Strip */}
      <FieldNotes />

      {/* 03. The Refuge Overview */}
      <TheRefuge />

      {/* 04. Choose Your Mountain Chalet Selector */}
      <ChaletSelector />

      {/* 05. Kilimanjaro Deep-Dive */}
      <KilimanjaroSection />

      {/* 06. Pedra do Baú Viewfinder */}
      <Viewfinder />

      {/* 07. Warm Basecamp Hospitality Highlights */}
      <WarmBasecamp />

      {/* 08. Aconcágua Route */}
      <AconcaguaSection />

      {/* 09. Trail Context & Regional Routes */}
      <TrailConnection />

      {/* 10. Origin & Mountaineering Heritage Story */}
      <OriginStory />

      {/* 11. Guest Logbook & Reviews */}
      <Reviews />

      {/* 12. Field Journal Photo Gallery */}
      <FieldGallery />

      {/* 13. Location & Route Info */}
      <LocationSection />

      {/* 14. Final Arrival CTA */}
      <FinalCTA />

      {/* 15. Mountain Field Station Footer */}
      <Footer />
    </div>
  );
}

export default App;
