import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const articles = [
  {
    title: 'Advancing Neural Audio Codecs for Low-Bandwidth Speech',
    category: 'Audio Engineering',
    icon: (
      <svg className="w-8 h-8 text-indigo-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
  },
  {
    title: 'Emotion-Aware Voice Synthesis: The Next Frontier',
    category: 'AI Research',
    icon: (
      <svg className="w-8 h-8 text-indigo-medium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813 2.846a4.5 4.5 0 01-3.09 3.09L2.25 22.5l2.846-.813a4.5 4.5 0 003.09-3.09L9 18.75l.813-2.846a4.5 4.5 0 013.09-3.09L15.75 12l-2.846-.813a4.5 4.5 0 01-3.09-3.09L9 5.25l-.813 2.846a4.5 4.5 0 01-3.09 3.09L2.25 12l2.846.813a4.5 4.5 0 013.09 3.09z" />
      </svg>
    ),
  },
  {
    title: 'Multilingual Voice Models: Breaking Language Barriers in Real-Time',
    category: 'NLP',
    icon: (
      <svg className="w-8 h-8 text-blue-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
  },
  {
    title: 'Zero-Shot Voice Cloning for Accessibility and Personalization',
    category: 'Voice AI',
    icon: (
      <svg className="w-8 h-8 text-teal-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
]

export default function ResearchSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-indigo-dark mb-4 tracking-tight">
            Showcasing the Global Impact of AI Audio Research
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Breakthroughs in voice AI that are shaping the future of communication.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {articles.map((a) => (
            <motion.div key={a.title} variants={cardItem}>
              <motion.div
                whileHover={{ scale: 1.02, y: -6 }}
                transition={{ duration: 0.3 }}
                className="group bg-off-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] transition-all duration-300 p-8 h-full flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  {a.icon}
                </div>
                <span className="text-xs font-semibold text-teal-accent uppercase tracking-wider mb-3">
                  {a.category}
                </span>
                <h3 className="text-lg font-bold text-indigo-dark mb-4 leading-snug group-hover:text-teal-accent transition-colors flex-1">
                  {a.title}
                </h3>
                <motion.a
                  href="#"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-dark/60 hover:text-teal-accent transition-colors mt-auto"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
