import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const postItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const posts = [
  {
    title: 'IRIS v3.0: Introducing Real-Time Voice Cloning',
    desc: 'Our latest release brings zero-shot voice cloning with just 30 seconds of audio. Enterprise-grade quality, production ready.',
    date: 'Mar 15, 2026',
    tag: 'Release',
  },
  {
    title: 'Building Voice Agents That Understand Context',
    desc: 'A deep dive into our new context-aware NLP architecture that reduces hallucination rates by 73%.',
    date: 'Feb 28, 2026',
    tag: 'Engineering',
  },
  {
    title: 'IRIS Achieves SOC 2 Type II Certification',
    desc: 'Security and compliance are paramount. We are proud to announce SOC 2 Type II compliance for the IRIS platform.',
    date: 'Jan 20, 2026',
    tag: 'Company',
  },
]

export default function LatestUpdates() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-indigo-dark mb-4 tracking-tight">
            Latest Updates
          </h2>
          <p className="text-gray-500 text-lg">
            What&apos;s new at IRIS.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-6"
        >
          {posts.map((p) => (
            <motion.div key={p.title} variants={postItem}>
              <motion.a
                href="#"
                whileHover={{ scale: 1.01, x: 4 }}
                transition={{ duration: 0.25 }}
                className="group block bg-off-white rounded-2xl border border-gray-100 p-6 sm:p-8 transition-colors hover:border-gray-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-accent/20 to-indigo-dark/10 flex items-center justify-center shrink-0"
                  >
                    <svg className="w-6 h-6 text-indigo-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-teal-accent uppercase tracking-wider">{p.tag}</span>
                      <span className="text-xs text-gray-400">{p.date}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-indigo-dark group-hover:text-teal-accent transition-colors mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                  <motion.svg
                    whileHover={{ x: 4 }}
                    className="w-5 h-5 text-gray-300 group-hover:text-teal-accent transition-colors shrink-0 self-center sm:self-start mt-1"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </motion.svg>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
