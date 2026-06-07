import { motion } from 'framer-motion'

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const barHeights = [32, 48, 26, 58, 38, 68, 44, 30, 52, 36, 62, 40, 56, 28]

export default function TryIris() {
  return (
    <section id="try-iris" className="py-24 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-indigo-dark mb-4 tracking-tight">
            TRY IRIS
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Experience voice and conversational AI in real time.
            <br />
            Talk, type, and interact naturally with IRIS.
          </p>
        </motion.div>

        {/* ── MAIN DEMO CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-[#E5E5E5] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] overflow-hidden mb-8"
        >
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
              {/* Left — Status & Info */}
              <div className="lg:w-72 shrink-0">
                <div className="flex items-center gap-2 mb-1">
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-2 h-2 rounded-full bg-green-500"
                  />
                  <span className="text-xs font-medium text-green-600">Online</span>
                </div>
                <h3 className="text-2xl font-bold text-indigo-dark mt-3">IRIS</h3>
                <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                  Your intelligent voice assistant. Ready to speak, listen, and take action.
                </p>
              </div>

              {/* Center — Waveform */}
              <div className="flex-1 flex items-center justify-center py-6 lg:py-0">
                <div className="flex items-end justify-center gap-1.5 h-28 w-full max-w-sm">
                  {barHeights.map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [`${h}%`, `${h + (i % 3 === 0 ? 20 : -14)}%`, `${h}%`],
                        background: [
                          'linear-gradient(to top, rgba(59,185,173,0.5), #3bb9ad)',
                          'linear-gradient(to top, rgba(17,21,76,0.4), #11154c)',
                          'linear-gradient(to top, rgba(59,185,173,0.5), #3bb9ad)',
                        ],
                      }}
                      transition={{ repeat: Infinity, duration: 1.4, delay: i * 0.07, ease: 'easeInOut' }}
                      className="w-2.5 sm:w-3 rounded-full"
                    />
                  ))}
                </div>
              </div>

              {/* Right — Conversation Preview */}
              <div className="lg:w-80 shrink-0">
                <div className="bg-off-white rounded-2xl p-4 border border-gray-100 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-indigo-dark/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-indigo-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <div className="bg-white rounded-xl px-3.5 py-2 border border-gray-100 flex-1">
                      <p className="text-xs font-medium text-indigo-dark/60 mb-0.5">You</p>
                      <p className="text-sm text-indigo-dark">What can you do?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-teal-accent flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-[9px] font-bold">AI</span>
                    </div>
                    <div className="bg-teal-accent/5 rounded-xl px-3.5 py-2 border border-teal-accent/15 flex-1">
                      <p className="text-xs font-medium text-teal-accent mb-0.5">IRIS</p>
                      <p className="text-sm text-indigo-dark">
                        I can speak, listen, answer questions, control workflows, and integrate with your tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom — Input Field */}
            <div className="mt-6 flex items-center gap-2 sm:gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Ask anything..."
                  className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-off-white text-indigo-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-accent/40 focus:border-teal-accent transition text-sm"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.93 }}
                className="w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-dark via-blue-mid to-teal-accent flex items-center justify-center shrink-0 shadow-lg"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.93 }}
                className="w-12 h-12 rounded-2xl bg-indigo-dark flex items-center justify-center shrink-0"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* ── FEATURE HIGHLIGHT CARD ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-[#E5E5E5] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] overflow-hidden mb-8"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: text */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#11154c] bg-[rgba(17,21,76,0.08)] w-fit mb-5">
                FEATURE
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-indigo-dark mb-4 tracking-tight">
                Ultra-realistic Speech
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Generate human-quality voices with natural emotion, intonation, pauses, and multilingual support.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Deploy expressive voice agents across more than 70 languages with ultra-low latency and industry-leading accuracy.
              </p>
            </div>

            {/* Right: waveform + audio mockup */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col items-center justify-center bg-off-white border-l border-gray-100">
              <div className="flex items-end justify-center gap-1 h-20 w-full max-w-xs mb-6">
                {[28, 44, 20, 52, 34, 60, 40, 26, 48, 32, 56, 38].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [`${h}%`, `${h + (i % 2 === 0 ? 14 : -10)}%`, `${h}%`] }}
                    transition={{ repeat: Infinity, duration: 1.6, delay: i * 0.05, ease: 'easeInOut' }}
                    className="w-2 rounded-full bg-gradient-to-t from-indigo-dark/40 to-indigo-dark"
                  />
                ))}
              </div>
              <div className="flex items-center gap-4 w-full max-w-xs">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-dark via-blue-mid to-teal-accent flex items-center justify-center shrink-0 shadow-lg"
                >
                  <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.button>
                <div className="flex-1 h-1.5 rounded-full bg-gray-200 overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '65%' }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-dark via-blue-mid to-teal-accent"
                  />
                </div>
                <span className="text-xs text-gray-400 font-mono shrink-0">0:32 / 1:24</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── FEATURE GRID — 3 cards ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1: SFX */}
          <motion.div variants={fadeUp}>
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.25 }}
              className="group bg-white rounded-2xl border border-[#E5E5E5] p-7 h-full transition-all duration-300 hover:border-[#3bb9ad] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider text-[#11154c] bg-[rgba(17,21,76,0.08)] mb-5">
                VOICE AI
              </span>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-accent/15 to-teal-accent/5 flex items-center justify-center mb-4 text-teal-accent">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-indigo-dark mb-2">SFX</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Generate custom sound effects, ambient sounds, and audio assets instantly.
              </p>
            </motion.div>
          </motion.div>

          {/* Card 2: Voices */}
          <motion.div variants={fadeUp}>
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.25 }}
              className="group bg-white rounded-2xl border border-[#E5E5E5] p-7 h-full transition-all duration-300 hover:border-[#3bb9ad] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider text-[#11154c] bg-[rgba(17,21,76,0.08)] mb-5">
                FEATURE
              </span>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-mid/15 to-blue-mid/5 flex items-center justify-center mb-4 text-blue-mid">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-indigo-dark mb-2">Voices</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Create, clone, and customize voices for brands, products, and virtual agents.
              </p>
              <div className="inline-flex items-center gap-1.5 bg-off-white rounded-lg px-3 py-1.5 border border-gray-100">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-accent" />
                <span className="text-xs font-semibold text-indigo-dark">10,000+</span>
                <span className="text-xs text-gray-400">Voices Available</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 3: Image & Video */}
          <motion.div variants={fadeUp}>
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.25 }}
              className="group bg-white rounded-2xl border border-[#E5E5E5] p-7 h-full transition-all duration-300 hover:border-[#3bb9ad] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider text-[#11154c] bg-[rgba(17,21,76,0.08)] mb-5">
                MULTIMODAL
              </span>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-mid/15 to-blue-mid/5 flex items-center justify-center mb-4 text-blue-mid">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-indigo-dark mb-2">Image &amp; Video</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Generate images and videos through integrations with leading AI models and media pipelines.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Sora', 'Kling', 'Veo', 'Wan', 'Seedance'].map((m) => (
                  <span key={m} className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium text-indigo-dark bg-[rgba(17,21,76,0.06)] border border-gray-100">
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
