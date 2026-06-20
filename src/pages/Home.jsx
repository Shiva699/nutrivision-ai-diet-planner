import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AIMealGenerator from "../components/AIMealGenerator";
import AIAssistant from "../components/AIAssistant";
import AIMealAnalyzer from "../components/AIMealAnalyzer";
import DietTips from "../components/DietTips";
import ProgressSection from "../components/ProgressSection";
import FoodCategories from "../components/FoodCategories";
import MealPlanner from "../components/MealPlanner";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        <Hero />
        
        {/* AI-Powered Features Section */}
        <div className="space-y-0">
          <AIMealGenerator />
          <AIAssistant />
          <AIMealAnalyzer />
        </div>
        
        {/* Regular Features */}
        <DietTips />
        <ProgressSection />
        <FoodCategories />
        <MealPlanner />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
}
