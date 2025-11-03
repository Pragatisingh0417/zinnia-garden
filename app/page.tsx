import AboutSection from "./components/AboutSection";
import Banner from "./components/Banner";
import FixedFlowers from "./components/FixedFlowers";
import GallerySection from "./components/GallerySection";
import HeroVideo from "./components/HeroVideo";
import MarqueePreview from "./components/MarqueePreview";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <>
      <FixedFlowers />
      <Banner />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <MarqueePreview />
      <HeroVideo />
      
    </>
  );
}
