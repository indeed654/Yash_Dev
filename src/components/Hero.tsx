import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import MagneticLink from './ui/MagneticLink'
import { fadeIn } from '../utils/motion'
import { useReducedMotion } from '../utils/useReducedMotion'

const HeroScene = lazy(() => import('./hero/HeroScene'))

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f0f0ee]">
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-1 flex items-end pb-10 sm:pb-16 lg:pb-20 px-6 sm:px-12 md:px-20 lg:px-28">
          <motion.div
            className="max-w-xs"
            initial={reduced ? undefined : 'hidden'}
            animate={reduced ? undefined : 'show'}
            variants={fadeIn()}
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-blue-500 hover:text-blue-600 transition-colors mb-3 group"
              initial={reduced ? undefined : { opacity: 0, y: 10, filter: 'blur(10px)' }}
              animate={reduced ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Building AI, Cybersecurity & IoT Solutions
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </motion.a>

            <motion.h1
              className="text-[1.5rem] sm:text-[1.75rem] leading-[1.15] font-medium text-gray-900 tracking-tight mb-3"
              initial={reduced ? undefined : { opacity: 0, y: 12, filter: 'blur(10px)' }}
              animate={reduced ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
            >
              Turning intelligent systems into real-world impact.
            </motion.h1>

            <motion.p
              className="text-[13px] text-gray-400 font-normal mb-3"
              initial={reduced ? undefined : { opacity: 0, y: 10, filter: 'blur(10px)' }}
              animate={reduced ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            >
              AI • Cybersecurity • IoT • Full Stack Development
            </motion.p>

            <motion.div
              initial={reduced ? undefined : { opacity: 0, y: 12, filter: 'blur(10px)' }}
              animate={reduced ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
            >
              <MagneticLink
                href="#projects"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-blue-500 border border-blue-400 rounded-full px-5 py-2.5 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200 group"
                ariaLabel="View my portfolio"
              >
                View My Portfolio
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </MagneticLink>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

