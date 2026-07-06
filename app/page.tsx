import { CTASection } from "@/components/home/CTASection";
import { AboutPreviewSection } from "@/components/home/AboutPreviewSection";
import { BrandSection } from "@/components/home/BrandSection";
import { CustomerJourneySection } from "@/components/home/CustomerJourneySection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductCategoriesSection } from "@/components/home/ProductCategoriesSection";
import { ProjectGallerySection } from "@/components/home/ProjectGallerySection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CustomerJourneySection />
      <AboutPreviewSection />
      <WhyChooseUsSection />
      <ProductCategoriesSection />
      <BrandSection />
      <ProjectGallerySection />
      <CTASection />
      <Footer />
    </main>
  );
}
