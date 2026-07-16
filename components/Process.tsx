export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Understand client needs.',
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Develop the right strategy.',
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Execute professionally.',
    },
    {
      number: '04',
      title: 'Support',
      description: 'Provide continuous assistance.',
    },
  ]

  return (
    <section className="py-28" style={{ background: 'var(--mist)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="eyebrow">Our Process</span>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl mt-4"
            style={{ color: 'var(--navy)' }}
          >
            How an engagement runs, step by step
          </h2>
        </div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px" style={{ background: 'var(--line)' }} />
          <div className="grid lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="reveal text-center lg:text-left">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 font-display font-bold text-lg relative z-10"
                  style={{ background: 'var(--navy)', color: '#fff' }}
                >
                  {step.number}
                </div>
                <h3 className="font-display font-semibold mt-5" style={{ color: 'var(--navy)' }}>
                  {step.title}
                </h3>
                <p className="text-sm mt-2" style={{ color: 'var(--slate)' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
