import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Stats } from "@/sections/Stats";
import { Features } from "@/sections/Features";
import { HowItWorks } from "@/sections/HowItWorks";
import { Testimonials } from "@/sections/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/sections/CTA";
import { LeadForm } from "@/components/LeadForm";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />

        {/* Lead Capture Section */}
        <section
          id="check-essay"
          className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Ready to improve your IELTS writing?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get started today and see how our AI-powered feedback can help
                you reach Band 7 or higher.
              </p>
            </div>
            <LeadForm />
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
