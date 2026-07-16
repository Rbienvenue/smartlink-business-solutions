import { Lightbulb, BadgeCheck, ShieldCheck, HeartHandshake } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-28" style={{ background: 'var(--paper)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal order-2 lg:order-1 relative">
          <div className="card p-10 lg:p-12" style={{ background: 'var(--navy)' }}>
            <p className="font-display text-2xl font-semibold text-white leading-snug">
              &quot;One roof for technology, finance, and professional business services — built on innovation,
              integrity, and real client outcomes.&quot;
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="eyebrow" style={{ color: '#9DC0F0' }}>
                  Focus
                </p>
                <p className="text-white text-sm mt-1">Technology &amp; Systems</p>
              </div>
              <div>
                <p className="eyebrow" style={{ color: '#9DC0F0' }}>
                  Focus
                </p>
                <p className="text-white text-sm mt-1">Creative &amp; Marketing</p>
              </div>
              <div>
                <p className="eyebrow" style={{ color: '#9DC0F0' }}>
                  Focus
                </p>
                <p className="text-white text-sm mt-1">Finance &amp; Advisory</p>
              </div>
              <div>
                <p className="eyebrow" style={{ color: '#9DC0F0' }}>
                  Location
                </p>
                <p className="text-white text-sm mt-1">Kigali, Rwanda</p>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal order-1 lg:order-2">
          <span className="eyebrow">About Us</span>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl mt-4"
            style={{ color: 'var(--navy)' }}
          >
            Built to bring every business need under one roof
          </h2>
          <p className="mt-6 leading-relaxed" style={{ color: 'var(--slate)' }}>
            SMART LINK Business Solutions LTD combines technology, finance, and professional business
            services into a single, dependable partner. Instead of juggling separate vendors, our clients
            work with one team that understands the full picture — from the systems that run their operations
            to the numbers that guide their decisions.
          </p>
          <p className="mt-4 leading-relaxed" style={{ color: 'var(--slate)' }}>
            We&apos;re guided by four commitments in every engagement:
          </p>

          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'var(--blue-light)' }}
              >
                <Lightbulb className="w-4 h-4" style={{ color: 'var(--blue)' }} />
              </span>
              <span>
                <span className="font-semibold" style={{ color: 'var(--navy)' }}>
                  Innovation
                </span>
                <span style={{ color: 'var(--slate)' }}> — practical solutions that keep clients ahead.</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'var(--blue-light)' }}
              >
                <BadgeCheck className="w-4 h-4" style={{ color: 'var(--blue)' }} />
              </span>
              <span>
                <span className="font-semibold" style={{ color: 'var(--navy)' }}>
                  Professionalism
                </span>
                <span style={{ color: 'var(--slate)' }}> — clear communication, every step of the way.</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'var(--blue-light)' }}
              >
                <ShieldCheck className="w-4 h-4" style={{ color: 'var(--blue)' }} />
              </span>
              <span>
                <span className="font-semibold" style={{ color: 'var(--navy)' }}>
                  Integrity
                </span>
                <span style={{ color: 'var(--slate)' }}> — honest advice, even when it&apos;s not the easy answer.</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'var(--blue-light)' }}
              >
                <HeartHandshake className="w-4 h-4" style={{ color: 'var(--blue)' }} />
              </span>
              <span>
                <span className="font-semibold" style={{ color: 'var(--navy)' }}>
                  Client Satisfaction
                </span>
                <span style={{ color: 'var(--slate)' }}> — work measured by the results our clients see.</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
