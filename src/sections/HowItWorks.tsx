"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/content/site"
import { Play } from "lucide-react"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {siteConfig.howItWorks.title}
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            {siteConfig.howItWorks.subtitle}
          </p>
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          {siteConfig.howItWorks.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-16`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5c5fbe] to-[#7a7dd4] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Demo button for first step */}
                {index === 0 && (
                  <div className="pt-4">
                    <button className="inline-flex items-center space-x-2 text-[#5c5fbe] font-semibold hover:text-[#4a4d9e] transition-colors duration-200">
                      <Play className="w-5 h-5" />
                      <span>See how it works</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Visual/Video placeholder */}
              <div className="flex-1 max-w-lg">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    {/* Placeholder for demo video/image */}
                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-gray-600 ml-1" />
                    </div>
                  </div>
                  
                  {/* Overlay with step number */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-[#5c5fbe] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-24"
        >
          <div className="bg-gradient-to-r from-[#5c5fbe] to-[#7a7dd4] rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to see your writing improve?
            </h3>
            <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get instant feedback on your IELTS essays and start improving your band score today.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("check-essay")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="bg-white text-[#5c5fbe] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Try It Free Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
