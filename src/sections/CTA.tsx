"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Check, Star } from "lucide-react";

export function CTA() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#5c5fbe] via-[#6b6ec7] to-[#7a7dd4] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Start checking your IELTS essays today!
          </h2>

          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students who have improved their writing scores
            with our AI-powered feedback system. Get instant, detailed feedback
            and reach Band 7 or higher.
          </p>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {[
              "Instant feedback in seconds",
              "British Council standards",
              "Money-back guarantee",
              "Unlimited essay checking",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-white/90"
              >
                <Check className="w-5 h-5 text-green-300" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-10"
          >
            <Button
              variant="white"
              size="xl"
              onClick={() => scrollToSection("check-essay")}
              className="text-lg font-bold px-10 py-4 shadow-xl hover:shadow-2xl"
            >
              Start Now - It&apos;s Free
            </Button>

            <Button
              variant="outline"
              size="xl"
              onClick={() => scrollToSection("pricing")}
              className="text-lg font-semibold px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              View Pricing
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12"
          >
            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-yellow-300 fill-current"
                  />
                ))}
              </div>
              <span className="text-white/90 font-medium">
                4.9/5 from 45,000+ students
              </span>
            </div>

            {/* Guarantee */}
            <div className="flex items-center space-x-2 text-white/90">
              <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium">30-day money-back guarantee</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
