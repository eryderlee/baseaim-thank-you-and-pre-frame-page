'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ThankYou() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <Image
          src="/logo-black.png"
          alt="Baseaim"
          width={160}
          height={48}
          priority
        />
      </motion.div>

      {/* Success checkmark */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
        className="mb-8"
      >
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary-blue to-blue-400 flex items-center justify-center shadow-lg shadow-blue-200">
          <svg
            className="w-10 h-10 md:w-12 md:h-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-montserrat font-semibold text-center text-gray-900 text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
      >
        Thank You for{' '}
        <span className="bg-gradient-to-r from-sky-blue via-medium-blue to-bright-blue bg-clip-text text-transparent">
          Booking Your Call
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-gray-500 text-base md:text-lg text-center max-w-md mb-10"
      >
        We&apos;re excited to connect with you. Your call has been successfully scheduled.
      </motion.p>

      {/* Email confirmation card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 md:p-8 max-w-md w-full shadow-lg shadow-blue-50"
      >
        <div className="flex items-start gap-4">
          {/* Mail icon */}
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-tint flex items-center justify-center">
            <svg
              className="w-5 h-5 text-primary-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div>
            <h2 className="font-montserrat font-semibold text-gray-900 text-lg mb-1">
              Check Your Email
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We&apos;ve sent a confirmation email with the details of your upcoming call. Please check your inbox (and spam folder, just in case).
            </p>
          </div>
        </div>
      </motion.div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-10 text-gray-400 text-xs text-center"
      >
        &copy; {new Date().getFullYear()} Baseaim. All rights reserved.
      </motion.p>
    </div>
  )
}
