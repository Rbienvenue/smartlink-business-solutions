import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Intro() {
  return (
    <section
      id="intro"
      className="relative pt-40 pb-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg,var(--mist) 0%, #ffffff 70%)' }}
    >
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full float-shape"
        style={{ background: 'radial-gradient(circle,var(--blue-light) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-40 -left-32 w-80 h-80 rounded-full float-shape-delay"
        style={{ background: 'radial-gradient(circle,var(--blue-light) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <span className="eyebrow">Business &amp; Technology Solutions</span>
          <h1
            className="font-display font-bold leading-[1.08] mt-4 text-4xl sm:text-5xl lg:text-[3.4rem]"
            style={{ color: 'var(--navy)' }}
          >
            One company, multiple solutions for lasting business growth
          </h1>
          <p className="mt-6 text-lg leading-relaxed max-w-xl" style={{ color: 'var(--slate)' }}>
            SMART LINK offers integrated business services spanning technology, accounting, finance,
            business support, creative services, digital solutions, and virtual assistance. By combining
            these capabilities under one team, clients receive practical support, consistent communication,
            and dependable delivery across every need.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-3 text-sm">
            <div className="rounded-2xl border px-4 py-3" style={{ borderColor: 'var(--line)', background: 'rgba(255,255,255,.7)' }}>
              <p className="font-semibold" style={{ color: 'var(--navy)' }}>
                Integrated support
              </p>
              <p className="mt-1" style={{ color: 'var(--slate)' }}>
                Technology, finance, and operations aligned in one place.
              </p>
            </div>
            <div className="rounded-2xl border px-4 py-3" style={{ borderColor: 'var(--line)', background: 'rgba(255,255,255,.7)' }}>
              <p className="font-semibold" style={{ color: 'var(--navy)' }}>
                Flexible delivery
              </p>
              <p className="mt-1" style={{ color: 'var(--slate)' }}>
                Scalable services for startups, SMEs, and institutions.
              </p>
            </div>
            <div className="rounded-2xl border px-4 py-3" style={{ borderColor: 'var(--line)', background: 'rgba(255,255,255,.7)' }}>
              <p className="font-semibold" style={{ color: 'var(--navy)' }}>
                Reliable partnership
              </p>
              <p className="mt-1" style={{ color: 'var(--slate)' }}>
                A trusted team that stays engaged beyond delivery.
              </p>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="#contact" className="btn-primary inline-flex items-center gap-2">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#services" className="btn-secondary inline-flex items-center gap-2">
              Our Services
            </Link>
          </div>

          <div className="mt-14 flex items-center gap-10">
            <div>
              <p className="font-display font-bold text-2xl" style={{ color: 'var(--navy)' }}>
                24/7
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--slate)' }}>
                Responsive Support
              </p>
            </div>
            <div className="w-px h-10" style={{ background: 'var(--line)' }} />
            <div>
              <p className="font-display font-bold text-2xl" style={{ color: 'var(--navy)' }}>
                100%
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--slate)' }}>
                Tailored Solutions
              </p>
            </div>
            <div className="w-px h-10" style={{ background: 'var(--line)' }} />
            <div>
              <p className="font-display font-bold text-2xl" style={{ color: 'var(--navy)' }}>
                Kigali
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--slate)' }}>
                Based &amp; Growing
              </p>
            </div>
          </div>
        </div>

        {/* Network Graphic SVG */}
        <div className="reveal relative h-[420px] flex items-center justify-center">
          <svg
            viewBox="0 0 480 420"
            className="w-full h-full max-w-lg"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Abstract network of connected nodes representing linked business solutions"
          >
            <line x1="120" y1="120" x2="240" y2="210" stroke="#CBDBF3" strokeWidth="2" className="pulse-line" />
            <line x1="240" y1="210" x2="380" y2="130" stroke="#CBDBF3" strokeWidth="2" className="pulse-line" />
            <line x1="240" y1="210" x2="180" y2="330" stroke="#CBDBF3" strokeWidth="2" className="pulse-line" />
            <line x1="240" y1="210" x2="360" y2="320" stroke="#CBDBF3" strokeWidth="2" className="pulse-line" />
            <line x1="120" y1="120" x2="80" y2="260" stroke="#CBDBF3" strokeWidth="2" className="pulse-line" />

            <circle cx="240" cy="210" r="30" fill="var(--navy)" className="node-glow" />
            <circle cx="240" cy="210" r="30" fill="none" stroke="var(--navy)" strokeWidth="1" opacity="0.25" />
            <text
              x="240"
              y="215"
              textAnchor="middle"
              fontFamily="Sora"
              fontWeight="700"
              fontSize="13"
              fill="#fff"
            >
              SL
            </text>

            <circle cx="120" cy="120" r="20" fill="var(--blue)" />
            <foreignObject x="105" y="105" width="30" height="30">
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </svg>
              </div>
            </foreignObject>

            <circle cx="380" cy="130" r="22" fill="#fff" stroke="var(--blue)" strokeWidth="2" />
            <foreignObject x="365" y="115" width="30" height="30">
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--blue)',
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1E5FBF" strokeWidth="2">
                  <path d="M3 3v18h18M7 14l4-4 4 4 5-5" />
                </svg>
              </div>
            </foreignObject>

            <circle cx="180" cy="330" r="24" fill="#fff" stroke="var(--blue)" strokeWidth="2" />
            <foreignObject x="163" y="313" width="34" height="34">
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--blue)',
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E5FBF" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M3 10h18M8 2v4M16 2v4" />
                </svg>
              </div>
            </foreignObject>

            <circle cx="360" cy="320" r="18" fill="var(--navy)" opacity="0.85" />
            <circle cx="80" cy="260" r="14" fill="var(--blue)" opacity="0.7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
