import { useState, useEffect } from 'react'
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

type ChatStep = { role: 'user' | 'ai'; text: string; delay: number }

const supportChat: ChatStep[] = [
  { role: 'user', text: 'Hi, I need help tracking my order #2837.', delay: 600 },
  { role: 'ai', text: 'I found your order. It\'s out for delivery and expected today.', delay: 2400 },
]

const salesChat: ChatStep[] = [
  { role: 'user', text: "I'm looking for a plan for my startup.", delay: 600 },
  { role: 'ai', text: 'Our Growth plan is perfect for startups — $49/mo with full access.', delay: 2200 },
  { role: 'user', text: "Sounds great! Let's start with that.", delay: 1200 },
]

function ChatPreview({ steps, accentColor }: { steps: ChatStep[]; accentColor: string }) {
  const [visible, setVisible] = useState(0)
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    if (visible >= steps.length) return
    const isAi = steps[visible].role === 'ai'
    const typingDelay = isAi ? 800 : 300
    const t1 = setTimeout(() => setTyping(true), steps[visible].delay - typingDelay)
    const t2 = setTimeout(() => {
      setTyping(false)
      setVisible((v) => v + 1)
    }, steps[visible].delay)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [visible, steps])

  const bubbleColors: Record<string, string> = {
    user: 'bg-white border border-gray-100 shadow-sm',
    ai: `bg-[${accentColor}] text-white`,
  }

  return (
    <div className="bg-[#F7F7F5] rounded-2xl border border-gray-100 p-4 min-h-[160px] flex flex-col justify-end gap-3">
      {steps.slice(0, visible).map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className={`flex ${s.role === 'user' ? 'justify-start' : 'justify-end'}`}
        >
          <div
            className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
              s.role === 'user'
                ? 'bg-white border border-gray-100 shadow-sm rounded-bl-sm'
                : `${accentColor === '#11154c' ? 'bg-[#11154c]' : 'bg-teal-accent'} text-white rounded-br-sm`
            }`}
          >
            <p className={`text-sm ${s.role === 'user' ? 'text-[#111]' : 'text-white/90'}`}>
              {s.text}
            </p>
          </div>
        </motion.div>
      ))}
      {typing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-end"
        >
          <div className="bg-gray-200/60 rounded-2xl rounded-br-sm px-4 py-3 flex items-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.15 }}
                className="w-1.5 h-1.5 rounded-full bg-gray-400"
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default function CustomizeAgent() {
  return (
    <section id="features" className="py-24 bg-white overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-teal-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-indigo-dark/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── HEADER ── */}
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
            className="inline-flex items-center gap-2 bg-teal-accent/10 text-teal-accent rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-accent" />
            AI Agents
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-indigo-dark mb-4 tracking-tight">
            Customize IRIS Agent
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Build specialized AI agents tailored to your business needs.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Agent Support */}
          <motion.div variants={cardItem}>
            <motion.div
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="group h-full bg-white rounded-3xl border border-gray-200/60 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_60px_-16px_rgba(59,185,173,0.15)] transition-shadow duration-500 overflow-hidden"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-accent/20 to-teal-accent/5 flex items-center justify-center shrink-0 ring-1 ring-teal-accent/10">
                    <svg className="w-7 h-7 text-teal-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-indigo-dark">Agent Support</h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-xs text-gray-400">Customer service automation</span>
                    </div>
                  </div>
                </div>

                {/* Chat preview */}
                <ChatPreview steps={supportChat} accentColor="#3bb9ad" />

                {/* Features list */}
                <div className="mt-5 space-y-2">
                  {['24/7 ticket resolution', 'Multi-language support', 'Smart escalation'].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-teal-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Button */}
              <div className="px-8 pb-8">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="block w-full text-center bg-gradient-to-r from-teal-accent to-teal-accent/80 text-white font-semibold py-3.5 rounded-xl shadow-[0_4px_16px_-4px_rgba(59,185,173,0.35)] hover:shadow-[0_8px_24px_-4px_rgba(59,185,173,0.45)] transition-all duration-300"
                >
                  Configure Agent
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Agent Sales */}
          <motion.div variants={cardItem}>
            <motion.div
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="group h-full bg-white rounded-3xl border border-gray-200/60 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_60px_-16px_rgba(17,21,76,0.12)] transition-shadow duration-500 overflow-hidden"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-mid/20 to-blue-mid/5 flex items-center justify-center shrink-0 ring-1 ring-blue-mid/10">
                    <svg className="w-7 h-7 text-blue-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-indigo-dark">Agent Sales</h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-xs text-gray-400">Revenue conversion engine</span>
                    </div>
                  </div>
                </div>

                {/* Chat preview */}
                <ChatPreview steps={salesChat} accentColor="#11154c" />

                {/* Features list */}
                <div className="mt-5 space-y-2">
                  {['Lead qualification & nurturing', 'Personalized upselling', 'Conversational checkout'].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-blue-mid shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Button */}
              <div className="px-8 pb-8">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="block w-full text-center bg-gradient-to-r from-indigo-dark to-blue-mid text-white font-semibold py-3.5 rounded-xl shadow-[0_4px_16px_-4px_rgba(17,21,76,0.3)] hover:shadow-[0_8px_24px_-4px_rgba(17,21,76,0.4)] transition-all duration-300"
                >
                  Configure Agent
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
