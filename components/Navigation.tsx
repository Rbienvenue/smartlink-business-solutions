'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSolid, setIsSolid] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header id="nav" className={`nav-shell fixed top-0 inset-x-0 z-50 ${isSolid ? 'solid' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <span className="relative w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--navy)' }}>
              <span className="absolute w-2.5 h-2.5 rounded-full bg-white left-2 top-1/2 -translate-y-1/2"></span>
              <span className="absolute w-2.5 h-2.5 rounded-full bg-white right-2 top-1/2 -translate-y-1/2"></span>
              <span className="absolute h-[3px] w-3.5 bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
            </span>
            <span className="font-display font-bold text-lg tracking-tight" style={{ color: 'var(--navy)' }}>
              SMART LINK
              <br />
              Business Solution
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-9">
            <Link href="#home" className="text-sm font-medium hover:text-blue transition-colors" style={{ color: 'var(--ink)' }}>
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-blue transition-colors" style={{ color: 'var(--ink)' }}>
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-blue transition-colors" style={{ color: 'var(--ink)' }}>
              About
            </Link>
            <Link href="#why" className="text-sm font-medium hover:text-blue transition-colors" style={{ color: 'var(--ink)' }}>
              Why Choose Us
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue transition-colors" style={{ color: 'var(--ink)' }}>
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <Link href="#contact" className="btn-primary hidden lg:inline-flex items-center gap-2">
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg"
            style={{ color: 'var(--navy)' }}
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t" style={{ borderColor: 'var(--line)' }}>
          <div className="px-6 py-5 flex flex-col gap-4">
            <Link href="#home" onClick={() => setIsOpen(false)} className="text-sm font-medium">
              Home
            </Link>
            <Link href="#services" onClick={() => setIsOpen(false)} className="text-sm font-medium">
              Services
            </Link>
            <Link href="#about" onClick={() => setIsOpen(false)} className="text-sm font-medium">
              About
            </Link>
            <Link href="#why" onClick={() => setIsOpen(false)} className="text-sm font-medium">
              Why Choose Us
            </Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="text-sm font-medium">
              Contact
            </Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="btn-primary inline-flex items-center justify-center gap-2 mt-2">
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
