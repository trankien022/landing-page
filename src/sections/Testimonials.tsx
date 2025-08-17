"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/content/site";
import { TestimonialCard } from "@/components/TestimonialCard";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What people say about Writing9
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real students, real results. See how Writing9 has helped thousands
            achieve their target IELTS scores.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5c5fbe] to-[#7a7dd4] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                {siteConfig.testimonials[0].name.charAt(0)}
              </div>

              <blockquote className="text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed mb-6 italic">
                &ldquo;{siteConfig.testimonials[0].quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {siteConfig.testimonials[0].name}
                  </div>
                  <div className="text-[#5c5fbe] font-medium">
                    IELTS Score: {siteConfig.testimonials[0].score}
                  </div>
                </div>

                <div className="w-px h-8 bg-gray-300"></div>

                <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#5c5fbe] transition-colors duration-200">
                  <span>View Certificate</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.testimonials.slice(1).map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              score={testimonial.score}
              quote={testimonial.quote}
              avatar={testimonial.avatar}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-[#5c5fbe] mb-2">
                  4.9/5
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#5c5fbe] mb-2">
                  95%
                </div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#5c5fbe] mb-2">
                  45K+
                </div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
