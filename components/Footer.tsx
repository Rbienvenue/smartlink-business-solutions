import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--navy-deep)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="relative w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: 'var(--blue)' }}
            >
              <span className="absolute w-2 h-2 rounded-full bg-white left-1.5 top-1/2 -translate-y-1/2"></span>
              <span className="absolute w-2 h-2 rounded-full bg-white right-1.5 top-1/2 -translate-y-1/2"></span>
              <span className="absolute h-[2px] w-3 bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
            </span>
            <span className="font-display font-bold text-white">SMART LINK</span>
          </div>
          <p className="text-sm mt-4" style={{ color: '#8DA6CC' }}>
            Professional business, technology, and digital solutions under one roof for organizations seeking
            growth, efficiency, and dependable support.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm">Quick Links</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm" style={{ color: '#8DA6CC' }}>
            <Link href="#home" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#why" className="hover:text-white transition-colors">
              Why Choose Us
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm">Contact</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm" style={{ color: '#8DA6CC' }}>
            <span>Kigali – Gasabo, Rwanda</span>
            <span>+250 796 687 309</span>
            <span className="break-all">smartlinkbusinesssolution@gmail.com</span>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm">Services</h4>
          <div className="mt-4 flex flex-col gap-3">
            <span className="text-sm" style={{ color: '#8DA6CC' }}>
              Technology
            </span>
            <span className="text-sm" style={{ color: '#8DA6CC' }}>
              Business
            </span>
            <span className="text-sm" style={{ color: '#8DA6CC' }}>
              Creative
            </span>
            <span className="text-sm" style={{ color: '#8DA6CC' }}>
              Virtual Assistance
            </span>
            <span className="text-sm" style={{ color: '#8DA6CC' }}>
              Accounting
            </span>
            <span className="text-sm" style={{ color: '#8DA6CC' }}>
              Digital Solutions
            </span>
          </div>
        </div>
      </div>
      <div
        className="border-t py-6 text-center text-xs"
        style={{ borderColor: '#12315F', color: '#6E88AF' }}
      >
        © {year} SMART LINK Business Solutions LTD. All Rights Reserved.
      </div>
    </footer>
  )
}
