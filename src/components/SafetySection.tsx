import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function SafetySection() {
  return (
    <section className="py-24 bg-off-white overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-teal-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[250px] h-[250px] bg-indigo-dark/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-indigo-dark/5 text-indigo-dark rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider mb-4"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            Trust & Safety
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-indigo-dark mb-4 tracking-tight">
            Built with Safety at Its Core
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Enterprise-grade security, moderation, and provenance controls for every voice interaction.
          </p>
        </motion.div>

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
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-accent/20 to-teal-accent/5 flex items-center justify-center mb-6 ring-1 ring-teal-accent/10">
                <svg className="w-7 h-7 text-teal-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-dark mb-3">Moderation</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Multi-layered content moderation ensures every voice interaction stays safe, respectful, and compliant with your policies.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={cardItem}>
            <motion.div
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_20px_-8px_rgba(0,0,0,0.06)] p-8 h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-mid/20 to-blue-mid/5 flex items-center justify-center mb-6 ring-1 ring-blue-mid/10">
                <svg className="w-7 h-7 text-blue-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-dark mb-3">Accountability</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Full audit trails and transparent logging for every agent decision, enabling complete oversight and compliance reporting.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={cardItem}>
            <motion.div
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_20px_-8px_rgba(0,0,0,0.06)] p-8 h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-mid/20 to-blue-mid/5 flex items-center justify-center mb-6 ring-1 ring-blue-mid/10">
                <svg className="w-7 h-7 text-blue-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-dark mb-3">Provenance</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Verified content origin with cryptographic signatures, ensuring every AI-generated output can be traced and authenticated.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
