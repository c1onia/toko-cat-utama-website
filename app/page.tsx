import { CTASection } from "@/components/home/CTASection";
import { AboutPreviewSection } from "@/components/home/AboutPreviewSection";
import { BrandSection } from "@/components/home/BrandSection";
import { CustomerJourneySection } from "@/components/home/CustomerJourneySection";
import { FreeDeliverySection } from "@/components/home/FreeDeliverySection";
import { HeroSection } from "@/components/home/HeroSection";
import { LoyaltyMemberSection } from "@/components/home/LoyaltyMemberSection";
import { ProductCategoriesSection } from "@/components/home/ProductCategoriesSection";
import { ProjectGallerySection } from "@/components/home/ProjectGallerySection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CustomerJourneySection />
      <AboutPreviewSection />
      <WhyChooseUsSection />
      <FreeDeliverySection />
      <ProductCategoriesSection />
      <BrandSection />
      <LoyaltyMemberSection />
      <ProjectGallerySection />
      <CTASection />
      <Footer />
    </main>
  );
}
