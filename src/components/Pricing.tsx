"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { siteConfig } from "@/content/site"
import { Check, Crown, Zap } from "lucide-react"

export function Pricing() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <Zap className="w-4 h-4" />
            <span>{siteConfig.pricing.discount}</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {siteConfig.pricing.title}
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include our core features with unlimited essay checking.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {siteConfig.pricing.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                plan.popular
                  ? "border-[#5c5fbe] shadow-2xl scale-105"
                  : "border-gray-200 shadow-lg hover:shadow-xl"
              } transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#5c5fbe] to-[#7a7dd4] text-white px-6 py-2 rounded-full font-semibold text-sm flex items-center space-x-2">
                    <Crown className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                
                <div className="mb-6">
                  {plan.originalPrice && (
                    <div className="text-lg text-gray-400 line-through mb-1">
                      {plan.originalPrice}
                    </div>
                  )}
                  <div className="text-4xl font-bold text-gray-900 mb-1">
                    {plan.price}
                  </div>
                  <div className="text-gray-600">{plan.period}</div>
                  {plan.description && (
                    <div className="text-sm text-gray-500 mt-2">
                      {plan.description}
                    </div>
                  )}
                </div>

                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  onClick={() => scrollToSection("check-essay")}
                  className="w-full mb-6"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Everything included in all plans
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.pricing.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Money-Back Guarantee
              </h3>
            </div>
            <p className="text-gray-700">
              {siteConfig.pricing.guarantee}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
