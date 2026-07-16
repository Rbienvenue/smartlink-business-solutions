import { Users, Sparkles, LifeBuoy, Wallet, Gem, Target } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: 'Professional Experts',
      description:
        'Our team brings specialist knowledge across technology, finance, creative execution, and business operations.',
    },
    {
      icon: Sparkles,
      title: 'Certified Specialists',
      description:
        'We combine practical expertise with modern tools to deliver dependable, professional results.',
    },
    {
      icon: LifeBuoy,
      title: 'Affordable Pricing',
      description:
        'We tailor solutions to fit real budgets without compromising on quality or professionalism.',
    },
    {
      icon: Wallet,
      title: 'Reliable Support',
      description:
        'We remain responsive and engaged long after project launch, offering ongoing support when needed.',
    },
    {
      icon: Gem,
      title: 'Quality Assurance',
      description:
        'Every engagement is guided by accuracy, consistency, and a strong commitment to excellence.',
    },
    {
      icon: Target,
      title: 'Fast Delivery',
      description:
        'We focus on prompt execution, clear communication, and practical outcomes that keep clients moving forward.',
    },
  ]

  return (
    <section id="why" className="py-28" style={{ background: 'var(--paper)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="eyebrow">Why Choose Us</span>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl mt-4"
            style={{ color: 'var(--navy)' }}
          >
            Reasons clients stay with us
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {reasons.map((reason, idx) => {
            const IconComponent = reason.icon
            return (
              <div
                key={idx}
                className="reveal flex items-start gap-4 p-6 rounded-2xl"
                style={{ background: 'var(--mist)' }}
              >
                <span
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'var(--navy)' }}
                >
                  <IconComponent className="w-5 h-5 text-white" />
                </span>
                <div>
                  <h3 className="font-display font-semibold" style={{ color: 'var(--navy)' }}>
                    {reason.title}
                  </h3>
                  <p className="text-sm mt-1.5" style={{ color: 'var(--slate)' }}>
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
