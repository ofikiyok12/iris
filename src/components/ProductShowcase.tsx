import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={cardItem}>
            <motion.div
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_20px_-8px_rgba(0,0,0,0.06)] p-8 h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-accent/20 to-teal-accent/5 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-teal-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-indigo-dark mb-3">Text To Speech</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Convert written content into natural-sounding speech with human-like intonation and emotion.
              </p>
              <div className="bg-off-white rounded-xl p-4 border border-gray-100 flex items-center gap-3">
                <svg className="w-5 h-5 text-indigo-dark/40 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
                <span className="text-xs text-gray-400">Preview your voice — click to play</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={cardItem}>
            <motion.div
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_20px_-8px_rgba(0,0,0,0.06)] p-8 h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-mid/20 to-blue-mid/5 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-indigo-dark mb-3">Speech To Text</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Transcribe spoken words into accurate text in real-time with 50+ language support.
              </p>
              <div className="bg-off-white rounded-xl p-4 border border-gray-100 flex items-center gap-3">
                <svg className="w-5 h-5 text-indigo-dark/40 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424" />
                </svg>
                <span className="text-xs text-gray-400">Real-time transcription with 99% accuracy</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={cardItem}>
            <motion.div
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_20px_-8px_rgba(0,0,0,0.06)] p-8 h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-mid/20 to-blue-mid/5 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-indigo-dark mb-3">Call IRIS</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Deploy voice agents that handle inbound and outbound calls with natural conversation flow.
              </p>
              <div className="bg-off-white rounded-xl p-4 border border-gray-100 flex items-center gap-3">
                <svg className="w-5 h-5 text-indigo-dark/40 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs text-gray-400">AI-powered phone agent ready in minutes</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
