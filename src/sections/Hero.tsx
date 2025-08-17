"use client"

import { Button } from "@/components/ui/Button"
import { siteConfig } from "@/content/site"
import { Check, Play } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-[#5c5fbe] min-h-screen flex items-center pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              {siteConfig.hero.title}
            </h1>
            
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              {siteConfig.hero.subtitle}
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              {siteConfig.hero.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center justify-center lg:justify-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/90 text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button
                variant="white"
                size="xl"
                onClick={() => scrollToSection("check-essay")}
                className="w-full sm:w-auto text-lg font-bold px-8 py-4"
              >
                {siteConfig.hero.ctaText}
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 flex items-center justify-center lg:justify-start space-x-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-white font-semibold text-sm"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-white/90">
                <div className="flex items-center space-x-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm">
                  {siteConfig.stats.trustText}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Video/Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Video Hint */}
              <div className="flex items-center justify-end mb-4 text-yellow-300">
                <span className="text-sm font-medium mr-2">
                  {siteConfig.hero.videoHint}
                </span>
                <Play className="w-4 h-4" />
              </div>

              {/* Video Container */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
                <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden relative">
                  {/* Placeholder for video */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  
                  {/* Simulated browser chrome */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center px-4 space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
