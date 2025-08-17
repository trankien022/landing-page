"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  score: string;
  quote: string;
  avatar?: string;
  index?: number;
}

export function TestimonialCard({
  name,
  score,
  quote,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
    >
      {/* Quote */}
      <div className="flex-1 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      {/* User Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-[#5c5fbe] to-[#7a7dd4] rounded-full flex items-center justify-center text-white font-bold border-2 border-white shadow-md">
              {name.charAt(0)}
            </div>
            {/* Placeholder for actual avatar when available */}
            {/* <Image
              src={avatar}
              alt={name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
            /> */}
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-[#5c5fbe] font-medium">
                IELTS score: {score}
              </span>
            </div>
          </div>
        </div>

        {/* Certificate/Score Badge */}
        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
            title="View Certificate"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-200">
              <Award className="w-5 h-5 text-white" />
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              View Certificate
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Rating Stars */}
      <div className="flex items-center justify-center mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-2 text-sm text-gray-600 font-medium">5.0</span>
        </div>
      </div>
    </motion.div>
  );
}
