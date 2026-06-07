import { motion } from 'framer-motion'

const logos = [
  {
    name: 'Disney',
    svg: (
      <svg viewBox="0 0 120 40" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="30" fontFamily="'Georgia', serif" fontWeight="bold" fontSize="28" letterSpacing="3" fill="#aaa">Disney</text>
      </svg>
    ),
  },
  {
    name: 'Nvidia',
    svg: (
      <svg viewBox="0 0 120 40" className="h-7 w-auto" fill="currentColor">
        <g transform="translate(10,4)">
          <path d="M0 16c0 8 6 13 12 16l2 1V7c-3 2-14 3-14 9z" fill="#76B900" />
          <path d="M14 2v29c8-3 16-10 16-19 0-4-3-8-7-10h-9z" fill="#76B900" opacity="0.8" />
          <path d="M14 2v29c8-3 16-10 16-19 0-4-3-8-7-10h-9z" fill="#76B900" opacity="0.6" transform="translate(3)" />
        </g>
        <text x="42" y="28" fontFamily="'Arial', sans-serif" fontWeight="700" fontSize="18" fill="#aaa">NVIDIA</text>
      </svg>
    ),
  },
  {
    name: 'Cisco',
    svg: (
      <svg viewBox="0 0 120 40" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="28" fontFamily="'Arial', sans-serif" fontWeight="700" fontSize="20" letterSpacing="2" fill="#aaa">CISCO</text>
      </svg>
    ),
  },
  {
    name: 'Meta',
    svg: (
      <svg viewBox="0 0 120 40" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="28" fontFamily="'Arial', sans-serif" fontWeight="700" fontSize="22" letterSpacing="1" fill="#aaa">Meta</text>
      </svg>
    ),
  },
  {
    name: 'Epic Games',
    svg: (
      <svg viewBox="0 0 120 40" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="28" fontFamily="'Arial', sans-serif" fontWeight="700" fontSize="17" letterSpacing="2" fill="#aaa">EPIC GAMES</text>
      </svg>
    ),
  },
  {
    name: 'KPN',
    svg: (
      <svg viewBox="0 0 120 40" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="28" fontFamily="'Arial', sans-serif" fontWeight="700" fontSize="22" letterSpacing="3" fill="#aaa">KPN</text>
      </svg>
    ),
  },
  {
    name: 'Spotify',
    svg: (
      <svg viewBox="0 0 120 40" className="h-7 w-auto" fill="currentColor">
        <circle cx="18" cy="20" r="14" fill="#1DB954" />
        <path d="M9 17c6-3 16-2.5 18-1" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M10.5 21.5c5.5-2.5 14-2 16-.5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M12 26c4-2 10-1.5 12 0" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        <text x="38" y="28" fontFamily="'Arial', sans-serif" fontWeight="700" fontSize="18" fill="#aaa">Spotify</text>
      </svg>
    ),
  },
  {
    name: 'Airbnb',
    svg: (
      <svg viewBox="0 0 120 40" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="28" fontFamily="'Arial', sans-serif" fontWeight="700" fontSize="20" letterSpacing="1" fill="#aaa">Airbnb</text>
      </svg>
    ),
  },
]

export default function TrustedBy() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-10"
        >
          Trusted by industry leaders
        </motion.p>

        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex gap-16 animate-scroll"
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex items-center justify-center h-12 min-w-fit"
              >
                {logo.svg}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 24s linear infinite;
        }
      `}</style>
    </motion.section>
  )
}
