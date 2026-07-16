'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Map, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Technology Solutions',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setShowSuccess(true)
        setFormData({ name: '', email: '', phone: '', service: 'Technology Solutions', message: '' })
        setTimeout(() => setShowSuccess(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-28" style={{ background: 'var(--paper)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="eyebrow">Contact</span>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl mt-4"
            style={{ color: 'var(--navy)' }}
          >
            Let&apos;s start the conversation
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-14 mb-16">
          <div className="reveal card p-7 text-center">
            <span
              className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto"
              style={{ background: 'var(--blue-light)' }}
            >
              <MapPin className="w-5 h-5" style={{ color: 'var(--blue)' }} />
            </span>
            <h3 className="font-display font-semibold mt-4" style={{ color: 'var(--navy)' }}>
              Location
            </h3>
            <p className="text-sm mt-1" style={{ color: 'var(--slate)' }}>
              Kigali – Gasabo, Rwanda
            </p>
          </div>
          <div className="reveal card p-7 text-center">
            <span
              className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto"
              style={{ background: 'var(--blue-light)' }}
            >
              <Phone className="w-5 h-5" style={{ color: 'var(--blue)' }} />
            </span>
            <h3 className="font-display font-semibold mt-4" style={{ color: 'var(--navy)' }}>
              Phone
            </h3>
            <p className="text-sm mt-1" style={{ color: 'var(--slate)' }}>
              +250 796 687 309
            </p>
          </div>
          <div className="reveal card p-7 text-center">
            <span
              className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto"
              style={{ background: 'var(--blue-light)' }}
            >
              <Mail className="w-5 h-5" style={{ color: 'var(--blue)' }} />
            </span>
            <h3 className="font-display font-semibold mt-4" style={{ color: 'var(--navy)' }}>
              Email
            </h3>
            <p className="text-sm mt-1 break-all" style={{ color: 'var(--slate)' }}>
              smartlinkbusinesssolution@gmail.com
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="reveal card overflow-hidden min-h-[420px]">
            <div
              className="w-full h-full min-h-[420px] flex flex-col items-center justify-center gap-3"
              style={{ background: 'var(--mist)' }}
            >
              <Map className="w-8 h-8" style={{ color: 'var(--blue)' }} />
              <p className="text-sm font-medium" style={{ color: 'var(--slate)' }}>
                Map placeholder — Kigali, Gasabo
              </p>
              <p className="text-xs" style={{ color: 'var(--slate)' }}>
                Embed a live Google Map here in production
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal card p-8 space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="text-sm font-medium" style={{ color: 'var(--navy)' }}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                style={{ border: '1px solid var(--line)' }}
                placeholder="Your full name"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="text-sm font-medium" style={{ color: 'var(--navy)' }}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none"
                  style={{ border: '1px solid var(--line)' }}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium" style={{ color: 'var(--navy)' }}>
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none"
                  style={{ border: '1px solid var(--line)' }}
                  placeholder="+250 ..."
                />
              </div>
            </div>
            <div>
              <label htmlFor="service" className="text-sm font-medium" style={{ color: 'var(--navy)' }}>
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none bg-white"
                style={{ border: '1px solid var(--line)' }}
              >
                <option>Technology Solutions</option>
                <option>Creative Services</option>
                <option>Business Services</option>
                <option>Not Sure Yet</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium" style={{ color: 'var(--navy)' }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none resize-none"
                style={{ border: '1px solid var(--line)' }}
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full py-3.5 rounded-lg text-sm font-semibold inline-flex items-center justify-center gap-2"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
            {showSuccess && (
              <p className="text-xs text-center" style={{ color: 'var(--blue)' }}>
                Thanks — we&apos;ll be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
