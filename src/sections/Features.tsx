"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/content/site"
import { X, Check } from "lucide-react"

export function Features() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {siteConfig.problemSolution.title}
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            {siteConfig.problemSolution.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Without Writing9 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-red-600">
              Without Writing9
            </h3>
            <div className="space-y-4">
              {siteConfig.problemSolution.problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-red-50 border border-red-200 rounded-xl hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <p className="text-gray-800 font-medium leading-relaxed">
                    {problem}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* With Writing9 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-green-600">
              With Writing9
            </h3>
            <div className="space-y-4">
              {siteConfig.problemSolution.solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-green-50 border border-green-200 rounded-xl hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-800 font-medium leading-relaxed">
                    {solution}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to transform your IELTS writing?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of students who have improved their scores with our AI-powered feedback system.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("check-essay")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="bg-[#5c5fbe] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4a4d9e] transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Checking Essays Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
