import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const chatMessages = [
  { role: 'user', text: 'Book me a flight to Bali tomorrow' },
  { role: 'ai', text: "Sure, I found 5 flights. Would you like the cheapest option?" },
]

export default function Hero() {
  const [visibleChat, setVisibleChat] = useState(0)

  useEffect(() => {
    if (visibleChat < chatMessages.length) {
      const timer = setTimeout(() => setVisibleChat((v) => v + 1), 1800)
      return () => clearTimeout(timer)
    }
  }, [visibleChat])

  return (
    <section id="meet-iris" className="min-h-screen flex items-center bg-gradient-to-b from-white via-white to-off-white pt-24 overflow-hidden relative">
      {/* Subtle background decoration */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#3bb9ad]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#11154c]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* ── LEFT COLUMN ── */}
          <div className="space-y-8">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-[#11154c]/5 text-[#11154c] rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3bb9ad]" />
              AI Voice Platform
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#111] leading-[1.05] tracking-tight"
            >
              The Future of{' '}
              <span className="text-[#3bb9ad]">AI Voice</span>{' '}
              Conversations
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-500 max-w-lg leading-relaxed"
            >
              Build intelligent voice agents that can speak, listen, and act in real time.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block bg-[#11154c] text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-[#11154c]/90 transition-all shadow-sm"
              >
                Start Free Trial
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-[#11154c]/5 hover:border-[#11154c] hover:text-[#11154c] transition-all"
              >
                <motion.svg
                  className="w-5 h-5"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </motion.svg>
                Watch Demo
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-8 pt-4 border-t border-gray-100"
            >
              {[
                { value: 10, suffix: 'M+', label: 'Conversations' },
                { value: 500, suffix: '+', label: 'Enterprise Clients' },
                { value: 99.99, suffix: '%', label: 'Uptime', decimals: 2 },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-[#11154c]">
                    <CountUp target={s.value} decimals={s.decimals ?? 0} />
                    {s.suffix}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Interactive AI Card ── */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
              whileHover={{ scale: 1.01 }}
              className="w-full max-w-md bg-white/70 backdrop-blur-xl rounded-3xl border border-white/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-6 sm:p-8 space-y-6"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#11154c] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813 2.846a4.5 4.5 0 01-3.09 3.09L2.25 22.5l2.846-.813a4.5 4.5 0 003.09-3.09L9 18.75l.813-2.846a4.5 4.5 0 013.09-3.09L15.75 12l-2.846-.813a4.5 4.5 0 01-3.09-3.09L9 5.25l-.813 2.846a4.5 4.5 0 01-3.09 3.09L2.25 12l2.846.813a4.5 4.5 0 013.09 3.09z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111]">AI Assistant</p>
                    <div className="flex items-center gap-1.5">
                      <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 rounded-full bg-green-500"
                      />
                      <span className="text-xs text-gray-400">Active</span>
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                  className="w-10 h-10 rounded-full bg-[#3bb9ad]/10 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 text-[#3bb9ad]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                </motion.div>
              </div>

              {/* Waveform */}
              <div className="flex items-end justify-center gap-1.5 h-16">
                {[28, 44, 20, 52, 34, 60, 40, 26, 48, 32, 56, 38, 46, 22].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [`${h}%`, `${h + (i % 3 === 0 ? 16 : -10)}%`, `${h}%`] }}
                    transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.06, ease: 'easeInOut' }}
                    className="w-2 rounded-full bg-gradient-to-t from-[#3bb9ad]/50 to-[#3bb9ad]"
                  />
                ))}
              </div>

              {/* Conversation simulation */}
              <div className="bg-[#F7F7F5] rounded-2xl p-4 space-y-3 min-h-[100px]">
                <AnimatedMessage
                  show={visibleChat >= 1}
                  role="user"
                  text={chatMessages[0].text}
                  delay={0.3}
                />
                <AnimatedMessage
                  show={visibleChat >= 2}
                  role="ai"
                  text={chatMessages[1].text}
                  delay={0.5}
                />
              </div>

              {/* Mic indicator */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  className="w-12 h-12 rounded-full bg-[#11154c] flex items-center justify-center shadow-lg cursor-pointer"
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function CountUp({ target, decimals = 0 }: { target: number; decimals?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const duration = 1800
          const start = performance.now()

          const animate = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(eased * target)
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count.toFixed(decimals)}</span>
}

function AnimatedMessage({
  show,
  role,
  text,
  delay,
}: {
  show: boolean
  role: 'user' | 'ai'
  text: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={show ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay, duration: 0.4, ease: 'easeOut' }}
      className={`flex ${role === 'user' ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
          role === 'user'
            ? 'bg-white border border-gray-100 rounded-bl-sm'
            : 'bg-[#11154c] text-white rounded-br-sm'
        }`}
      >
        <p className={`text-sm ${role === 'user' ? 'text-[#111]' : 'text-white/90'}`}>
          {text}
        </p>
      </div>
    </motion.div>
  )
}
