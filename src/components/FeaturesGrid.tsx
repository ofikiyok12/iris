import { motion } from 'framer-motion'

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stories = [
  {
    badge: 'DELIVEROO',
    title: 'Deliveroo',
    desc: 'Voice agents enhance rider and restaurant experiences.',
    gradient: 'from-teal-accent/20 to-teal-accent/5',
    accent: 'text-teal-accent',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    badge: 'MEESHO',
    title: 'Meesho',
    desc: 'Real-time multilingual customer support.',
    gradient: 'from-indigo-medium/20 to-indigo-medium/5',
    accent: 'text-indigo-medium',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    badge: 'CARS24',
    title: 'Cars24',
    desc: "India's largest voice-driven car retail operations.",
    gradient: 'from-blue-mid/20 to-blue-mid/5',
    accent: 'text-blue-mid',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-[900px] mx-auto text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-indigo-dark mb-4 tracking-tight">
            Or build anything with a powerful IRIS
          </h2>
          <p className="text-gray-500 text-lg">
            Flexible APIs and AI building blocks for every application.
          </p>
        </motion.div>

        {/* ── CUSTOMER STORIES ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-3 gap-6 mb-12"
        >
          {stories.map((s) => (
            <motion.div key={s.title} variants={fadeUp}>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.25 }}
                className="group block bg-off-white rounded-2xl border border-[#E5E5E5] p-6 transition-all duration-300 hover:border-[#3bb9ad] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-4 ${s.accent}`}>
                  {s.icon}
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider text-[#11154c] bg-[rgba(17,21,76,0.08)] mb-3">
                  {s.badge}
                </span>
                <h3 className="text-xl font-bold text-indigo-dark mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-indigo-dark/60 group-hover:text-teal-accent transition-colors">
                  Read story <span className="text-lg leading-none">→</span>
                </span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* ── API PRODUCTS GRID ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {/* Card 1: Text to Speech */}
          <motion.div variants={fadeUp}>
            <motion.div
              whileHover={{ scale: 1.01, y: -6 }}
              transition={{ duration: 0.25 }}
              className="group bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-[#3bb9ad]"
            >
              <div className="p-6">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider text-[#11154c] bg-[rgba(17,21,76,0.08)] mb-4">
                  API
                </span>
                <h3 className="text-xl font-bold text-indigo-dark mb-2">Text to Speech</h3>
                <p className="text-sm text-gray-500 mb-6">Generate realistic voices with industry-leading quality.</p>
              </div>

              {/* Preview — waveform player */}
              <div className="mx-6 mb-6 h-[220px] bg-[#0F1117] rounded-2xl flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-accent/5 rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-end justify-center gap-1 h-16">
                  {[28, 44, 20, 52, 34, 60, 40, 26, 48, 32, 56, 38].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [`${h}%`, `${h + (i % 2 === 0 ? 14 : -10)}%`, `${h}%`] }}
                      transition={{ repeat: Infinity, duration: 1.6, delay: i * 0.05, ease: 'easeInOut' }}
                      className="w-1.5 rounded-full bg-gradient-to-t from-teal-accent/60 to-teal-accent"
                    />
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 2: Speech to Text */}
          <motion.div variants={fadeUp}>
            <motion.div
              whileHover={{ scale: 1.01, y: -6 }}
              transition={{ duration: 0.25 }}
              className="group bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-[#3bb9ad]"
            >
              <div className="p-6">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider text-[#11154c] bg-[rgba(17,21,76,0.08)] mb-4">
                  API
                </span>
                <h3 className="text-xl font-bold text-indigo-dark mb-2">Speech to Text</h3>
                <p className="text-sm text-gray-500 mb-6">High-accuracy transcription and speaker diarization.</p>
              </div>

              {/* Preview — transcript viewer */}
              <div className="mx-6 mb-6 h-[220px] bg-[#0F1117] rounded-2xl p-5 flex flex-col justify-center gap-3 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-dark/20 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 space-y-2.5">
                  <div className="flex items-start gap-2">
                    <span className="text-[10px] font-semibold text-teal-accent shrink-0 mt-0.5">Speaker A:</span>
                    <p className="text-white/70 text-xs leading-relaxed">
                      Hello, I&apos;d like information about your services.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[10px] font-semibold text-teal-accent shrink-0 mt-0.5">Speaker B:</span>
                    <p className="text-white/70 text-xs leading-relaxed">
                      Absolutely. How can I assist you today?
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 3: Call IRIS */}
          <motion.div variants={fadeUp}>
            <motion.div
              whileHover={{ scale: 1.01, y: -6 }}
              transition={{ duration: 0.25 }}
              className="group bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-[#3bb9ad]"
            >
              <div className="p-6">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider text-[#11154c] bg-[rgba(17,21,76,0.08)] mb-4">
                  API
                </span>
                <h3 className="text-xl font-bold text-indigo-dark mb-2">CALL IRIS</h3>
                <p className="text-sm text-gray-500 mb-6">Voice-powered phone agents for sales and support.</p>
              </div>

              {/* Preview — call interface */}
              <div className="mx-6 mb-6 h-[220px] bg-[#0F1117] rounded-2xl flex flex-col items-center justify-center gap-3 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-teal-accent/5 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 flex items-center gap-2 text-white/50 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  00:32
                </div>
                <div className="relative z-10 flex items-end justify-center gap-1 h-10">
                  {[32, 48, 24, 56, 38, 62, 44, 28, 50, 36].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [`${h}%`, `${h + (i % 2 === 0 ? 12 : -8)}%`, `${h}%`] }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.06, ease: 'easeInOut' }}
                      className="w-1.5 rounded-full bg-gradient-to-t from-teal-accent/50 to-teal-accent"
                    />
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="relative z-10 w-14 h-14 rounded-full bg-red-500 flex items-center justify-center shadow-lg"
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
