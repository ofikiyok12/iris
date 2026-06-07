import { motion } from 'framer-motion'

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const chatItem = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.6 + i * 0.25, duration: 0.4, ease: 'easeOut' },
  }),
}

export default function DeployAgents() {
  return (
    <section id="solutions" className="py-24 bg-off-white overflow-hidden relative">
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
            Deploy agents that talk, type, and take action
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Build omnichannel AI agents that can understand, respond, reason, and execute actions across every customer touchpoint.
          </p>
        </motion.div>

        {/* ── MAIN SHOWCASE CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-[#E5E5E5] rounded-[32px] p-8 sm:p-10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)]"
        >
          <div className="flex items-start gap-4 mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-[0.15em] uppercase text-[#11154c] bg-[rgba(17,21,76,0.08)]">
              FEATURE
            </span>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-indigo-dark">Omnichannel Agents</h3>
              <p className="text-gray-400 text-sm mt-1">Phone, chat, email, WhatsApp, and customer support automation.</p>
            </div>
          </div>

          {/* ── CONVERSATION DEMO AREA ── */}
          <div className="bg-[#0F1117] rounded-3xl p-6 sm:p-8 min-h-[320px] flex flex-col justify-end relative overflow-hidden mb-8">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-accent/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-dark/20 rounded-full blur-3xl pointer-events-none" />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 relative z-10 max-w-lg mx-auto w-full"
            >
              {/* User message */}
              <motion.div custom={0} variants={chatItem} className="flex justify-start">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[75%]">
                  <p className="text-white/90 text-sm">Can I get a refund?</p>
                </div>
              </motion.div>

              {/* AI response */}
              <motion.div custom={1} variants={chatItem} className="flex justify-end">
                <div className="bg-white rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[75%] shadow-sm">
                  <p className="text-gray-900 text-sm">Sure. Can you share your order number?</p>
                </div>
              </motion.div>

              {/* User follow-up */}
              <motion.div custom={2} variants={chatItem} className="flex justify-start">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[75%]">
                  <p className="text-white/90 text-sm">It&apos;s EL4543490</p>
                </div>
              </motion.div>

              {/* Final AI response */}
              <motion.div custom={3} variants={chatItem} className="flex justify-end">
                <div className="bg-white rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[75%] shadow-sm">
                  <p className="text-gray-900 text-sm font-medium">Refund initiated <span className="text-green-500">✓</span></p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ── BOTTOM FEATURE POINTS ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid sm:grid-cols-3 gap-6"
          >
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                ),
                title: 'Simulate real-world conversations',
                desc: 'Natural voice and chat interactions.',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: 'Behavioral & compliance rules',
                desc: 'Guardrails and policy enforcement.',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                ),
                title: 'Business logic + secure connections',
                desc: 'Integrate with APIs, CRMs, and databases.',
              },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[rgba(17,21,76,0.08)] flex items-center justify-center shrink-0 text-indigo-dark">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-indigo-dark">{item.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── FLOATING ACTION BUTTON ── */}
      <motion.a
        href="#"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
        animate={{ boxShadow: ['0 0 0 0 rgba(17,21,76,0.4)', '0 0 0 16px rgba(17,21,76,0)', '0 0 0 0 rgba(17,21,76,0.4)'] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeOut', delay: 2 }}
        className="fixed bottom-8 right-8 z-40 hidden lg:flex flex-col items-center justify-center w-[88px] h-[88px] rounded-full bg-indigo-dark text-white text-[10px] font-bold tracking-wider uppercase shadow-2xl"
      >
        <svg className="w-5 h-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
        BOT
        <br />
        WEB
      </motion.a>
    </section>
  )
}
