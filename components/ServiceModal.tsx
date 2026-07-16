'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ArrowRight } from 'lucide-react'
import { Service, serviceCatalog } from '@/lib/services'
import Link from 'next/link'

export default function ServiceModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentService, setCurrentService] = useState<Service | null>(null)

  useEffect(() => {
    const handleOpenModal = (event: Event) => {
      const customEvent = event as CustomEvent
      const service = customEvent.detail
      setCurrentService(service)
      setIsOpen(true)
    }

    window.addEventListener('openServiceModal', handleOpenModal)
    return () => window.removeEventListener('openServiceModal', handleOpenModal)
  }, [])

  if (!isOpen || !currentService) return null

  return (
    <div
      className={`service-modal-backdrop ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(false)}
      aria-hidden={!isOpen}
    >
      <div
        className="service-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="serviceModalTitle"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="service-modal-close"
          type="button"
          aria-label="Close service details"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="service-modal-image relative h-72">
          <Image
            src={currentService.image}
            alt={currentService.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8 lg:p-10">
          <p className="eyebrow">Service Details</p>
          <h3
            id="serviceModalTitle"
            className="font-display font-semibold text-2xl mt-3"
            style={{ color: 'var(--navy)' }}
          >
            {currentService.title}
          </h3>
          <p className="mt-4 leading-relaxed" style={{ color: 'var(--slate)' }}>
            {currentService.longDescription}
          </p>

          <div className="mt-8 grid gap-6">
            <div>
              <h4 className="font-display font-semibold text-lg" style={{ color: 'var(--navy)' }}>
                Business Benefits
              </h4>
              <ul className="mt-4 space-y-3">
                {currentService.businessBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-white"
                      style={{ background: 'var(--navy)' }}
                    >
                      ✓
                    </span>
                    <span style={{ color: 'var(--slate)' }}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-lg" style={{ color: 'var(--navy)' }}>
                Who this is for
              </h4>
              <p className="mt-3 leading-relaxed" style={{ color: 'var(--slate)' }}>
                {currentService.audience}
              </p>
            </div>

            <div>
              <h4 className="font-display font-semibold text-lg" style={{ color: 'var(--navy)' }}>
                Included services
              </h4>
              <ul className="mt-4 space-y-3">
                {currentService.subServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ background: 'var(--blue)' }}
                    />
                    <span className="text-sm" style={{ color: 'var(--slate)' }}>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold w-fit"
            >
              Request Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
