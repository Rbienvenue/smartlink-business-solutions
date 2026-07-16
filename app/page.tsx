'use client'

import React, { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import About from '@/components/About'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Process from '@/components/Process'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ServiceModal from '@/components/ServiceModal'

export default function Home() {
  useEffect(() => {
    // Reveal on scroll
    const revealEls = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
        }
      })
    }, { threshold: 0.12 })
    revealEls.forEach(el => io.observe(el))

    return () => {
      revealEls.forEach(el => io.unobserve(el))
    }
  }, [])

  return (
    <>
      <Navigation />
      <Hero />
      <Intro />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <CTA />
      <Contact />
      <ServiceModal />
      <Footer />
    </>
  )
}
