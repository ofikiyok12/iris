import { motion } from 'framer-motion'

export default function CtaBanner() {
  return (
    <section id="pricing" className="py-16 sm:py-20 bg-off-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-gradient-to-br from-[#0F1117] via-[#11154c] to-[#11154c] rounded-[28px] p-10 sm:p-14 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12"
        >
          {/* Text side */}
          <div className="flex-1 text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="text-xs font-semibold tracking-[0.25em] uppercase text-white/60"
            >
              AI Communication Platform
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-[clamp(36px,5vw,72px)] font-bold leading-[1.1] text-white mt-4 tracking-tight"
            >
              Start Building Your<br className="hidden sm:block" /> Custom IRIS Today
            </motion.h2>
          </div>

          {/* Button side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="shrink-0"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              animate={{ boxShadow: ['0 0 0 0 rgba(255,255,255,0.3)', '0 0 0 14px rgba(255,255,255,0)', '0 0 0 0 rgba(255,255,255,0.3)'] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeOut', delay: 1.5 }}
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-9 py-4.5 rounded-full text-lg hover:bg-white hover:text-[#11154c] transition-all duration-300"
              style={{ padding: '18px 36px' }}
            >
              Talk to Sales
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
