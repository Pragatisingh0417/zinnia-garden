import AboutSection from "./components/AboutSection";
import FixedFlowers from "./components/FixedFlowers";
import GallerySection from "./components/GallerySection";
import HeroVideo from "./components/HeroVideo";
import MarqueePreview from "./components/MarqueePreview";
import ServicesSection from "./components/ServicesSection";
import VenueHighlights from "./components/VenueHighlights";

export default function Home() {
  return (
    <>
      <FixedFlowers />
      <HeroVideo />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <VenueHighlights />
      <MarqueePreview />
    </>
  );
}
