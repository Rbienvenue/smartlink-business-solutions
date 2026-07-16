'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { serviceCatalog } from '@/lib/services'

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredServices, setFilteredServices] = useState(serviceCatalog)

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredServices(serviceCatalog)
    } else {
      setFilteredServices(
        serviceCatalog.filter(service => service.category === activeCategory)
      )
    }
  }, [activeCategory])

  const handleServiceClick = (serviceId: string) => {
    const service = serviceCatalog.find(s => s.id === serviceId)
    if (service) {
      const event = new CustomEvent('openServiceModal', { detail: service })
      window.dispatchEvent(event)
    }
  }

  return (
    <section id="services" className="py-28" style={{ background: 'var(--mist)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="eyebrow">What We Do</span>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl mt-4"
            style={{ color: 'var(--navy)' }}
          >
            Services across three divisions
          </h2>
          <p className="mt-4" style={{ color: 'var(--slate)' }}>
            One partner for the technology, creative, and business expertise your organization needs to grow.
          </p>
        </div>

        <div className="reveal flex justify-center mt-10">
          <div
            className="inline-flex flex-wrap p-1.5 rounded-full gap-1"
            style={{ background: '#fff', border: '1px solid var(--line)' }}
          >
            <button
              onClick={() => setActiveCategory('all')}
              className={`tab-btn px-5 py-2.5 rounded-full text-sm font-semibold ${
                activeCategory === 'all' ? 'active' : ''
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory('technology')}
              className={`tab-btn px-5 py-2.5 rounded-full text-sm font-semibold ${
                activeCategory === 'technology' ? 'active' : ''
              }`}
            >
              Technology
            </button>
            <button
              onClick={() => setActiveCategory('business')}
              className={`tab-btn px-5 py-2.5 rounded-full text-sm font-semibold ${
                activeCategory === 'business' ? 'active' : ''
              }`}
            >
              Business
            </button>
            <button
              onClick={() => setActiveCategory('creative')}
              className={`tab-btn px-5 py-2.5 rounded-full text-sm font-semibold ${
                activeCategory === 'creative' ? 'active' : ''
              }`}
            >
              Creative
            </button>
          </div>
        </div>

        <div className="mt-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map(service => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className="card p-0 overflow-hidden text-left hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="service-card-image relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="service-card-body p-5">
                  <p className="eyebrow">{service.categoryLabel}</p>
                  <h3 className="font-display font-semibold text-lg mt-2" style={{ color: 'var(--navy)' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm mt-2" style={{ color: 'var(--slate)' }}>
                    {service.shortDescription}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
