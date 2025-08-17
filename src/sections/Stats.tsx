"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/content/site"
import { formatNumber } from "@/lib/utils"
import { Users, FileText, Award } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: siteConfig.stats.users,
      label: "Students Trust Us",
      color: "text-blue-600"
    },
    {
      icon: FileText,
      value: siteConfig.stats.texts,
      label: "Essays Checked",
      color: "text-green-600"
    },
    {
      icon: Award,
      value: 95,
      label: "Success Rate",
      suffix: "%",
      color: "text-purple-600"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {siteConfig.stats.trustText}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of students who have improved their IELTS writing scores with our AI-powered feedback system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color.split('-')[1]}-100 to-${stat.color.split('-')[1]}-200 rounded-2xl transform group-hover:scale-110 transition-transform duration-300`}></div>
                <stat.icon className={`relative w-8 h-8 ${stat.color}`} />
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900">
                  {formatNumber(stat.value)}{stat.suffix || ""}
                </div>
                <div className="text-lg font-medium text-gray-600">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-16">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">British Council Standards</div>
                <div className="text-sm text-gray-600">Meets official IELTS criteria</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Instant Feedback</div>
                <div className="text-sm text-gray-600">Results in seconds</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Money-Back Guarantee</div>
                <div className="text-sm text-gray-600">100% satisfaction guaranteed</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
