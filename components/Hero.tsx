import Link from 'next/link'
import { BadgeCheck, Wallet, HeartHandshake, Zap } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-32 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bgn.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(8,31,66,.60) 0%, rgba(8,31,66,.50) 45%, rgba(8,31,66,.64) 100%)',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative text-center reveal">
        <span className="eyebrow" style={{ color: '#9DC0F0' }}>
          Professional Business, Technology &amp; Digital Solutions
        </span>

        <h1
          className="font-display font-bold leading-[1.08] mt-5 text-4xl sm:text-5xl lg:text-6xl text-white"
          style={{ textWrap: 'balance' }}
        >
          Transforming Businesses Through Technology, Innovation &amp; Professional Services
        </h1>

        <p className="mt-6 text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#C7D7EF' }}>
          SMART LINK Business Solutions LTD helps startups, SMEs, NGOs, schools, government institutions
          and large organizations improve efficiency through technology, accounting, virtual assistance,
          business consulting, digital marketing and creative services.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="#contact" className="btn-primary inline-flex items-center gap-2">
            Request Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-colors"
            style={{ border: '1.5px solid rgba(255,255,255,.4)' }}
          >
            Explore Services
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2 text-white">
            <BadgeCheck className="w-4 h-4" />
            <span className="text-sm" style={{ color: '#C7D7EF' }}>
              Professional Team
            </span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Wallet className="w-4 h-4" />
            <span className="text-sm" style={{ color: '#C7D7EF' }}>
              Affordable Solutions
            </span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <HeartHandshake className="w-4 h-4" />
            <span className="text-sm" style={{ color: '#C7D7EF' }}>
              Client Satisfaction
            </span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Zap className="w-4 h-4" />
            <span className="text-sm" style={{ color: '#C7D7EF' }}>
              Fast Support
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
