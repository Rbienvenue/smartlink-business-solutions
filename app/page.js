'use client';

import { useEffect, useState } from 'react';

const serviceCatalog = [
  {
    id: 'website-development',
    title: 'Website Development',
    category: 'technology',
    categoryLabel: 'Technology',
    image: '/images/web development.jpg',
    shortDescription: 'Professional websites for corporate brands, schools, NGOs, hotels, and growing businesses that need a strong digital presence.',
    longDescription: 'We design and develop modern websites that reflect your brand clearly, communicate your value, and support business growth. Our approach combines responsive design, SEO-ready structure, secure hosting support, and user-friendly content organization for a polished digital experience.',
    businessBenefits: ['Strengthens credibility and online visibility', 'Improves lead generation and customer engagement', 'Supports your brand with a professional digital presence'],
    audience: 'Startups, SMEs, schools, NGOs, hotels, and organizations that need a modern and reliable website.',
    cta: 'Book a website consultation',
    subServices: ['Corporate website design', 'Business website development', 'Portfolio websites', 'School websites', 'NGO websites', 'Hotel websites', 'E-commerce websites', 'Landing pages', 'Website maintenance', 'Website redesign', 'Speed optimization', 'Responsive design', 'SEO optimization', 'Domain and hosting support', 'CMS development', 'Admin dashboards', 'Payment integration', 'Booking systems', 'Contact forms', 'Google Maps integration', 'SSL installation', 'Website security', 'Analytics setup']
  },
  {
    id: 'software-development',
    title: 'Software Development',
    category: 'technology',
    categoryLabel: 'Technology',
    image: '/images/software development.jpg',
    shortDescription: 'Custom software solutions built to simplify operations, automate processes, and improve team productivity.',
    longDescription: 'We create custom software systems that match your real workflow rather than forcing your team to adapt to a generic platform. From planning to deployment, our solutions are designed to improve efficiency, reduce manual work, and support long-term business growth.',
    businessBenefits: ['Automates routine tasks and reduces errors', 'Improves visibility across daily operations', 'Creates a reliable solution tailored to your business'],
    audience: 'Organizations that need tailored systems for operations, reporting, administration, or service delivery.',
    cta: 'Discuss your software needs',
    subServices: ['Custom software development', 'ERP systems', 'POS systems', 'HR systems', 'Payroll systems', 'Hospital systems', 'School systems', 'Hotel management systems', 'Inventory systems', 'CRM systems', 'Financial systems', 'Desktop applications', 'Web applications', 'Cloud applications', 'API development', 'Software maintenance', 'Bug fixes', 'Automation', 'Reports', 'Analytics']
  },
  {
    id: 'system-development',
    title: 'System Development',
    category: 'technology',
    categoryLabel: 'Technology',
    image: '/images/system development.jpg',
    shortDescription: 'Reliable business systems designed to centralize data, support decision-making, and streamline operations.',
    longDescription: 'Our system development services focus on building practical digital infrastructure that connects processes, improves accountability, and supports daily decision-making. We build platforms that are structured, scalable, and easy for teams to use with confidence.',
    businessBenefits: ['Connects workflows across departments', 'Improves data accuracy and visibility', 'Creates a strong foundation for growth and control'],
    audience: 'Schools, hospitals, cooperatives, hotels, logistics teams, and enterprises with multiple operational needs.',
    cta: 'Plan your system solution',
    subServices: ['Enterprise systems', 'Management systems', 'Business systems', 'School management systems', 'Hospital systems', 'Inventory systems', 'Hotel systems', 'Restaurant systems', 'Cooperative systems', 'SACCO systems', 'Attendance systems', 'Student systems', 'Employee systems', 'Customer systems', 'Asset management', 'Role management', 'Permissions', 'Notifications', 'Reports', 'Dashboards']
  },
  {
    id: 'system-management',
    title: 'System Management',
    category: 'technology',
    categoryLabel: 'Technology',
    image: '/images/system management.jpg',
    shortDescription: 'Ongoing system maintenance and support to keep your technology reliable, secure, and efficient.',
    longDescription: 'We provide proactive system management services that keep your environment stable and dependable. From updates and backups to performance monitoring and technical support, we help businesses protect uptime and avoid unnecessary disruptions.',
    businessBenefits: ['Reduces downtime and operational risk', 'Keeps systems secure and current', 'Improves user confidence and continuity'],
    audience: 'Businesses and institutions that depend on stable systems and need dependable technical support.',
    cta: 'Request managed system support',
    subServices: ['System maintenance', 'Updates', 'Monitoring', 'Technical support', 'Database management', 'Security', 'Backup', 'Recovery', 'Performance optimization', 'Server management', 'User support', 'Documentation', 'Training', 'Troubleshooting', 'Access control', 'Patch management', 'System audits', 'Issue resolution']
  },
  {
    id: 'internet-of-things',
    title: 'Internet of Things (IoT)',
    category: 'technology',
    categoryLabel: 'Technology',
    image: '/images/internet of things.jpg',
    shortDescription: 'Smart connected solutions for agriculture, offices, security, monitoring, and remote operations.',
    longDescription: 'Our IoT services help organizations connect devices, monitor environments, and automate decision-making using real-time data. Whether for smart agriculture, offices, attendance, or security, these solutions support efficiency, visibility, and smarter control.',
    businessBenefits: ['Improves operational visibility in real time', 'Supports automation and faster response', 'Reduces manual monitoring and effort'],
    audience: 'Agribusinesses, offices, schools, security teams, and organizations exploring smart automation and monitoring.',
    cta: 'Explore IoT solutions',
    subServices: ['Smart agriculture', 'Smart home systems', 'Smart offices', 'Attendance devices', 'Monitoring systems', 'Smart security', 'Smart sensors', 'Temperature monitoring', 'Water monitoring', 'Gas monitoring', 'Automation', 'Arduino solutions', 'ESP32 development', 'ESP8266 development', 'Raspberry Pi solutions', 'IoT dashboards', 'Remote monitoring', 'Cloud integration', 'Device networking']
  },
  {
    id: 'it-services',
    title: 'IT Services',
    category: 'technology',
    categoryLabel: 'Technology',
    image: '/images/IT services.jpg',
    shortDescription: 'Reliable IT support and infrastructure services for day-to-day operations, installations, and technical guidance.',
    longDescription: 'We provide practical IT support that helps organizations stay productive and secure. From computer maintenance and networking to cybersecurity, cloud support, and consulting, we ensure your technology environment remains dependable and aligned with your goals.',
    businessBenefits: ['Keeps operations running smoothly', 'Reduces technical delays and downtime', 'Provides expert guidance for better IT decisions'],
    audience: 'Small and medium businesses, offices, schools, and institutions needing dependable day-to-day IT assistance.',
    cta: 'Request IT support',
    subServices: ['Computer maintenance', 'Networking', 'CCTV solutions', 'Biometric systems', 'Servers', 'Cloud computing', 'Technical support', 'Software installation', 'Windows support', 'Linux support', 'Cybersecurity', 'Printer setup', 'Data recovery', 'Email setup', 'IT consulting', 'System troubleshooting', 'Hardware upgrades']
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    category: 'creative',
    categoryLabel: 'Creative',
    image: '/images/graphic design.jpg',
    shortDescription: 'Professional visual design for brands, campaigns, events, and communications that need a stronger impression.',
    longDescription: 'We create visual materials that reflect your brand identity with clarity and consistency. Our design work supports recognition, trust, and engagement across both print and digital channels.',
    businessBenefits: ['Improves brand recognition and consistency', 'Makes marketing materials more persuasive', 'Helps your business communicate with confidence'],
    audience: 'Businesses, startups, schools, NGOs, and organizations preparing marketing or brand materials.',
    cta: 'Request design support',
    subServices: ['Logo design', 'Brand identity', 'Flyers', 'Posters', 'Brochures', 'Business cards', 'Certificates', 'Books', 'Packaging', 'Banners', 'Roll-up banners', 'Social media posts', 'Presentation design', 'Infographics', 'UI layout support']
  },
  {
    id: 'videography',
    title: 'Videography',
    category: 'creative',
    categoryLabel: 'Creative',
    image: '/images/videograph.jpg',
    shortDescription: 'High-quality video production for corporate stories, events, interviews, promotions, and special moments.',
    longDescription: 'We produce visually compelling videos that communicate your message with clarity and professionalism. From corporate coverage to events and promotional content, our work helps organizations present themselves in a memorable and impactful way.',
    businessBenefits: ['Creates stronger storytelling and brand connection', 'Supports promotion and audience engagement', 'Delivers polished visual content for multiple channels'],
    audience: 'Organizations launching campaigns, hosting events, or needing professional video content.',
    cta: 'Book a video production session',
    subServices: ['Corporate videos', 'Events coverage', 'Wedding films', 'Drone videos', 'Interviews', 'Training videos', 'Promotional videos', 'Commercials', 'Documentaries', 'Photography', 'Editing', 'Color grading', 'Storyboarding', 'Script support']
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    category: 'creative',
    categoryLabel: 'Creative',
    image: '/images/video editing.jpg',
    shortDescription: 'Polished video editing for YouTube, TikTok, Instagram, corporate content, and promotional campaigns.',
    longDescription: 'We transform raw footage into professional, audience-ready content with attention to pacing, audio quality, motion, and storytelling. Our editing service helps your message stand out with clarity, consistency, and impact.',
    businessBenefits: ['Improves viewer engagement and retention', 'Creates professional content quickly and efficiently', 'Strengthens your presence across digital platforms'],
    audience: 'Content creators, brands, businesses, and organizations sharing stories online.',
    cta: 'Request video editing support',
    subServices: ['YouTube editing', 'TikTok content editing', 'Instagram Reels editing', 'Facebook video editing', 'Corporate video editing', 'Motion graphics', 'Color correction', 'Audio cleanup', 'Subtitles', 'Animations', 'Transitions', 'Commercial editing', 'Social media cuts', 'Short-form edits']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'creative',
    categoryLabel: 'Creative',
    image: '/images/Digital Marketing.jpg',
    shortDescription: 'Strategic digital marketing services designed to increase visibility, influence, and qualified leads.',
    longDescription: 'We create digital marketing strategies that combine content, audience targeting, campaign planning, and measurable execution. Our services help businesses build awareness, attract the right audience, and generate meaningful results through consistent online presence.',
    businessBenefits: ['Builds brand awareness and audience trust', 'Supports lead generation and campaign growth', 'Improves performance through strategic planning'],
    audience: 'Businesses, startups, NGOs, and brands aiming to grow visibility and engagement online.',
    cta: 'Start a digital marketing plan',
    subServices: ['Facebook marketing', 'Instagram marketing', 'TikTok marketing', 'LinkedIn marketing', 'Google Ads', 'SEO', 'Email marketing', 'Content marketing', 'Social media management', 'Analytics', 'Lead generation', 'Brand awareness', 'Campaign management', 'Audience targeting', 'Performance reporting']
  },
  {
    id: 'virtual-assistance',
    title: 'Virtual Assistance',
    category: 'creative',
    categoryLabel: 'Creative',
    image: '/images/virtual assistant.jpg',
    shortDescription: 'Professional virtual assistant support delivered by an ALX Certified Virtual Assistant with an Information Technology background.',
    longDescription: 'SMART LINK provides dependable virtual assistance for executives, founders, teams, and growing businesses. Our support helps reduce administrative pressure, improve organization, and keep day-to-day operations moving smoothly through professional remote assistance.',
    businessBenefits: ['Saves time and reduces administrative overload', 'Improves organization and responsiveness', 'Provides flexible support for daily business operations'],
    audience: 'Founders, executives, small teams, busy professionals, and businesses needing dependable remote support.',
    cta: 'Hire a virtual assistant',
    subServices: ['Executive assistance', 'Administrative support', 'Email management', 'Calendar management', 'Appointment scheduling', 'Travel booking', 'Meeting coordination', 'Customer support', 'CRM management', 'Lead generation', 'Research', 'Data entry', 'Spreadsheet management', 'Google Workspace support', 'Microsoft Office support', 'Canva design support', 'Presentation creation', 'Document formatting', 'Reports', 'Proposal writing', 'Internet research', 'Social media assistance', 'Community management', 'Inbox zero support', 'AI productivity support', 'ChatGPT assistance', 'Workflow automation', 'Project coordination', 'Trello management', 'Notion management', 'Asana support', 'ClickUp support', 'Slack coordination', 'Zoom support', 'Microsoft Teams support', 'WordPress updates', 'Website content updates', 'Basic HTML support', 'Basic CSS support', 'Technical documentation', 'CRM updates', 'Database entry', 'Appointment reminders', 'Customer follow-up', 'File organization', 'Cloud storage management', 'Dropbox support', 'Google Drive support', 'OneDrive support', 'Confidential document management', 'Professional communication', 'Time management', 'Business support', 'Remote office support', 'Virtual receptionist', 'Technical virtual assistant', 'Long-term business support']
  },
  {
    id: 'project-management',
    title: 'Project Management',
    category: 'business',
    categoryLabel: 'Business',
    image: '/images/project management.jpg',
    shortDescription: 'Professional project coordination, planning, and delivery support for initiatives that need structure and accountability.',
    longDescription: 'We help organizations lead projects from planning through execution with clear schedules, risk management, and stakeholder communication. Our process supports better delivery outcomes and keeps teams aligned from kickoff to completion.',
    businessBenefits: ['Improves project accountability and visibility', 'Reduces delays and scope confusion', 'Keeps stakeholders aligned and informed'],
    audience: 'Businesses, NGOs, institutions, and teams running projects that require careful planning and oversight.',
    cta: 'Plan your project with us',
    subServices: ['Planning', 'Scheduling', 'Risk management', 'Budget management', 'Monitoring', 'Reporting', 'Team coordination', 'Agile delivery', 'Scrum support', 'Waterfall planning', 'Documentation', 'Stakeholder management', 'Project tracking', 'Milestone reviews', 'Workflow alignment']
  },
  {
    id: 'auditing-assurance',
    title: 'Auditing & Assurance',
    category: 'business',
    categoryLabel: 'Business',
    image: '/images/Auditing and Assurance.jpg',
    shortDescription: 'Independent audit and assurance services that improve transparency, compliance, and stakeholder confidence.',
    longDescription: 'Our auditing and assurance services provide careful review and professional insight into financial and operational processes. We support organizations in strengthening controls, reducing risk, and building confidence with stakeholders through credible reporting and analysis.',
    businessBenefits: ['Improves internal control and accountability', 'Strengthens compliance and trust', 'Uncovers risks and opportunities for improvement'],
    audience: 'Organizations seeking independent review of financial records, controls, and operational processes.',
    cta: 'Request an assurance review',
    subServices: ['Internal audit', 'External audit', 'Risk assessment', 'Compliance review', 'Financial audit', 'Operational audit', 'Internal controls', 'Fraud detection', 'Recommendations', 'Audit reports', 'Control testing', 'Process review', 'Policy evaluation', 'Documentation review']
  },
  {
    id: 'accounting',
    title: 'Accounting',
    category: 'business',
    categoryLabel: 'Business',
    image: '/images/accounting.jpg',
    shortDescription: 'Professional bookkeeping, reporting, and financial support for better business decisions and smoother operations.',
    longDescription: 'We offer reliable accounting support that helps organizations stay organized and financially informed. From bookkeeping and financial statements to payroll and budget tracking, our services support accuracy, accountability, and confident decision-making.',
    businessBenefits: ['Improves financial visibility and control', 'Supports compliance and timely reporting', 'Makes budgeting and planning easier'],
    audience: 'SMEs, startups, NGOs, educational institutions, and growing businesses needing dependable accounting support.',
    cta: 'Discuss your accounting needs',
    subServices: ['Bookkeeping', 'Financial statements', 'Payroll', 'Cash flow management', 'Budgeting', 'Bank reconciliation', 'Inventory accounting', 'Tax preparation', 'Financial analysis', 'QuickBooks support', 'Excel-based reporting', 'Accounting software setup', 'Invoice management', 'Expense tracking']
  },
  {
    id: 'tax-advisory',
    title: 'Tax Advisory',
    category: 'business',
    categoryLabel: 'Business',
    image: '/images/Tax Advisory.jpg',
    shortDescription: 'Practical tax planning and advisory support to improve compliance, reduce risk, and strengthen financial efficiency.',
    longDescription: 'We provide tailored tax advisory services that help organizations stay compliant while making informed decisions about tax obligations and planning. Our guidance supports better preparedness for filing, reporting, and long-term tax efficiency.',
    businessBenefits: ['Improves compliance and reduces tax-related risks', 'Supports smarter planning and decision-making', 'Helps organizations stay prepared and organized'],
    audience: 'Businesses, professionals, and organizations needing clarity and support around tax compliance and planning.',
    cta: 'Book a tax advisory session',
    subServices: ['Tax registration', 'VAT support', 'PAYE support', 'Corporate tax advisory', 'Tax planning', 'Compliance review', 'Tax returns', 'Consulting', 'Audits', 'Tax reports', 'Planning strategies', 'Filing support', 'Tax documentation', 'Review of obligations']
  }
];

const services = {
  all: serviceCatalog,
  technology: serviceCatalog.filter((service) => service.category === 'technology'),
  creative: serviceCatalog.filter((service) => service.category === 'creative'),
  business: serviceCatalog.filter((service) => service.category === 'business')
};

function cardHTML(service) {
  return `<div class="service-card card p-0 reveal in">
    <img src="${service.image}" alt="${service.title}" class="service-card-image" />
    <div class="p-7 service-card-body">
      <span class="inline-flex items-center w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]" style="background:var(--blue-light); color:var(--blue);">${service.categoryLabel}</span>
      <h3 class="font-display font-semibold" style="color:var(--navy);">${service.title}</h3>
      <p class="text-sm leading-relaxed" style="color:var(--slate);">${service.shortDescription}</p>
      <button type="button" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold w-fit transition-colors" style="background:var(--navy); color:#fff;" data-service-id="${service.id}">
        Learn More <i data-lucide="arrow-right" class="w-4 h-4"></i>
      </button>
    </div>
  </div>`;
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('all');
  const [serviceGridHtml, setServiceGridHtml] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formNote, setFormNote] = useState('');
  const [formError, setFormError] = useState(false);

  useEffect(() => {
    const nav = document.getElementById('nav');
    const handleScroll = () => {
      nav?.classList.toggle('solid', window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('in');
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/lucide@latest/dist/umd/lucide.js';
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      if (window.lucide) window.lucide.createIcons();
    };

    return () => {
      window.removeEventListener('scroll', handleScroll);
      io.disconnect();
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    setServiceGridHtml(services[activeTab].map(cardHTML).join(''));
  }, [activeTab]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.lucide) {
      window.lucide.createIcons();
    }
  }, [serviceGridHtml, selectedService]);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setFormNote('Sending your message...');
    setFormError(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (result.success) {
        setFormNote("Thanks — we'll be in touch shortly.");
        form.reset();
      } else {
        setFormNote(result.message || 'Unable to send message right now.');
        setFormError(true);
      }
    } catch (error) {
      setFormNote('Unable to send message right now. Please try again later.');
      setFormError(true);
    }
  }

  return (
    <main>
      <header id="nav" className="nav-shell fixed top-0 inset-x-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="h-20 flex items-center justify-between">
            <a
              href="#home"
              className="flex items-center gap-3 transition-all duration-300 hover:opacity-90"
            >
              {/* Logo */}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#014492] p-2 shadow-md">
                <img
                  src="/logo-trans.png"
                  alt="SMARTLINK Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Brand Name */}
              <div className="leading-tight">
                <h1 className="text-lg font-bold tracking-wide text-slate-900">
                  SMARTLINK
                </h1>

                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Business Solutions Ltd.
                </p>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-9">
              <a href="#home" className="text-sm font-medium hover:text-[--blue] transition-colors" style={{ color: 'var(--ink)' }}>Home</a>
              <a href="#services" className="text-sm font-medium hover:text-[--blue] transition-colors" style={{ color: 'var(--ink)' }}>Services</a>
              <a href="#about" className="text-sm font-medium hover:text-[--blue] transition-colors" style={{ color: 'var(--ink)' }}>About</a>
              <a href="#why" className="text-sm font-medium hover:text-[--blue] transition-colors" style={{ color: 'var(--ink)' }}>Why Choose Us</a>
              <a href="#contact" className="text-sm font-medium hover:text-[--blue] transition-colors" style={{ color: 'var(--ink)' }}>Contact</a>
            </nav>

            <a href="#contact" className="btn-primary hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold">
              Get in Touch <i data-lucide="arrow-up-right" className="w-4 h-4" />
            </a>

            <button id="menuBtn" className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg" style={{ color: 'var(--navy)' }} aria-label="Open menu" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <i data-lucide={isMenuOpen ? 'x' : 'menu'} className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className={`lg:hidden ${isMenuOpen ? '' : 'hidden'} bg-white border-t`} style={{ borderColor: 'var(--line)' }}>
          <div className="px-6 py-5 flex flex-col gap-4">
            <a href="#home" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#services" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#about" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#why" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Why Choose Us</a>
            <a href="#contact" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold mt-2">Get in Touch</a>
          </div>
        </div>
      </header>

      <section id="home" className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="/images/bgn.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(8,31,66,.60) 0%, rgba(8,31,66,.50) 45%, rgba(8,31,66,.64) 100%)' }} />
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-10 relative text-center reveal">
          <span className="eyebrow" style={{ color: '#9DC0F0' }}>Professional Business, Technology & Digital Solutions</span>
          <h1 className="font-display font-bold leading-[1.08] mt-5 text-4xl sm:text-5xl lg:text-6xl text-white">Transforming Businesses Through Technology, Innovation & Professional Services</h1>
          <p className="mt-6 text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#C7D7EF' }}>
            SMART LINK Business Solutions LTD helps startups, SMEs, NGOs, schools, government institutions and large organizations improve efficiency through technology, accounting, virtual assistance, business consulting, digital marketing and creative services.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold">Request Consultation <i data-lucide="arrow-right" className="w-4 h-4" /></a>
            <a href="#services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-colors" style={{ border: '1.5px solid rgba(255,255,255,.4)' }}>Explore Services</a>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2 text-white"><i data-lucide="badge-check" className="w-4 h-4" /><span className="text-sm" style={{ color: '#C7D7EF' }}>Professional Team</span></div>
            <div className="flex items-center gap-2 text-white"><i data-lucide="wallet" className="w-4 h-4" /><span className="text-sm" style={{ color: '#C7D7EF' }}>Affordable Solutions</span></div>
            <div className="flex items-center gap-2 text-white"><i data-lucide="heart-handshake" className="w-4 h-4" /><span className="text-sm" style={{ color: '#C7D7EF' }}>Client Satisfaction</span></div>
            <div className="flex items-center gap-2 text-white"><i data-lucide="zap" className="w-4 h-4" /><span className="text-sm" style={{ color: '#C7D7EF' }}>Fast Support</span></div>
          </div>
        </div>
      </section>

      <section id="intro" className="relative pt-40 pb-28 overflow-hidden" style={{ background: 'linear-gradient(180deg,var(--mist) 0%, #ffffff 70%)' }}>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full float-shape" style={{ background: 'radial-gradient(circle,var(--blue-light) 0%, transparent 70%)' }} />
        <div className="absolute top-40 -left-32 w-80 h-80 rounded-full float-shape-delay" style={{ background: 'radial-gradient(circle,var(--blue-light) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="eyebrow">Business & Technology Solutions</span>
            <h2 className="font-display font-bold leading-[1.08] mt-4 text-4xl sm:text-5xl lg:text-[3.4rem]" style={{ color: 'var(--navy)' }}>One company, multiple solutions for lasting business growth</h2>
            <p className="mt-6 text-lg leading-relaxed max-w-xl" style={{ color: 'var(--slate)' }}>SMART LINK offers integrated business services spanning technology, accounting, finance, business support, creative services, digital solutions, and virtual assistance. By combining these capabilities under one team, clients receive practical support, consistent communication, and dependable delivery across every need.</p>
            <div className="mt-8 grid sm:grid-cols-3 gap-3 text-sm">
              <div className="rounded-2xl border px-4 py-3" style={{ borderColor: 'var(--line)', background: 'rgba(255,255,255,.7)' }}>
                <p className="font-semibold" style={{ color: 'var(--navy)' }}>Integrated support</p>
                <p className="mt-1" style={{ color: 'var(--slate)' }}>Technology, finance, and operations aligned in one place.</p>
              </div>
              <div className="rounded-2xl border px-4 py-3" style={{ borderColor: 'var(--line)', background: 'rgba(255,255,255,.7)' }}>
                <p className="font-semibold" style={{ color: 'var(--navy)' }}>Flexible delivery</p>
                <p className="mt-1" style={{ color: 'var(--slate)' }}>Scalable services for startups, SMEs, and institutions.</p>
              </div>
              <div className="rounded-2xl border px-4 py-3" style={{ borderColor: 'var(--line)', background: 'rgba(255,255,255,.7)' }}>
                <p className="font-semibold" style={{ color: 'var(--navy)' }}>Reliable partnership</p>
                <p className="mt-1" style={{ color: 'var(--slate)' }}>A trusted team that stays engaged beyond delivery.</p>
              </div>
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold">Contact Us <i data-lucide="arrow-right" className="w-4 h-4" /></a>
              <a href="#services" className="btn-secondary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold">Our Services</a>
            </div>
            <div className="mt-14 flex items-center gap-10">
              <div><p className="font-display font-bold text-2xl" style={{ color: 'var(--navy)' }}>24/7</p><p className="text-xs mt-1" style={{ color: 'var(--slate)' }}>Responsive Support</p></div>
              <div className="w-px h-10" style={{ background: 'var(--line)' }} />
              <div><p className="font-display font-bold text-2xl" style={{ color: 'var(--navy)' }}>100%</p><p className="text-xs mt-1" style={{ color: 'var(--slate)' }}>Tailored Solutions</p></div>
              <div className="w-px h-10" style={{ background: 'var(--line)' }} />
              <div><p className="font-display font-bold text-2xl" style={{ color: 'var(--navy)' }}>Kigali</p><p className="text-xs mt-1" style={{ color: 'var(--slate)' }}>Based & Growing</p></div>
            </div>
          </div>

          <div className="reveal relative h-[420px] flex items-center justify-center">
            <svg viewBox="0 0 480 420" className="w-full h-full max-w-lg" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Abstract network of connected nodes representing linked business solutions">
              <line x1="120" y1="120" x2="240" y2="210" stroke="#CBDBF3" strokeWidth="2" className="pulse-line" />
              <line x1="240" y1="210" x2="380" y2="130" stroke="#CBDBF3" strokeWidth="2" className="pulse-line" />
              <line x1="240" y1="210" x2="180" y2="330" stroke="#CBDBF3" strokeWidth="2" className="pulse-line" />
              <line x1="240" y1="210" x2="360" y2="320" stroke="#CBDBF3" strokeWidth="2" className="pulse-line" />
              <line x1="120" y1="120" x2="80" y2="260" stroke="#CBDBF3" strokeWidth="2" className="pulse-line" />
              <circle cx="240" cy="210" r="30" fill="var(--navy)" className="node-glow" />
              <circle cx="240" cy="210" r="30" fill="none" stroke="var(--navy)" strokeWidth="1" opacity=".25" />
              <text x="240" y="215" textAnchor="middle" fontFamily="Sora" fontWeight="700" fontSize="13" fill="#fff">SL</text>
              <circle cx="120" cy="120" r="20" fill="var(--blue)" />
              <circle cx="380" cy="130" r="22" fill="#fff" stroke="var(--blue)" strokeWidth="2" />
              <circle cx="180" cy="330" r="24" fill="#fff" stroke="var(--blue)" strokeWidth="2" />
              <circle cx="360" cy="320" r="18" fill="var(--navy)" opacity=".85" />
              <circle cx="80" cy="260" r="14" fill="var(--blue)" opacity=".7" />
            </svg>
          </div>
        </div>
      </section>

      <section id="about" className="py-28" style={{ background: 'var(--paper)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal order-2 lg:order-1 relative">
            <div className="card p-10 lg:p-12" style={{ background: 'var(--navy)' }}>
              <p className="font-display text-2xl font-semibold text-white leading-snug">"One roof for technology, finance, and professional business services — built on innovation, integrity, and real client outcomes."</p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div><p className="eyebrow" style={{ color: '#9DC0F0' }}>Focus</p><p className="text-white text-sm mt-1">Technology & Systems</p></div>
                <div><p className="eyebrow" style={{ color: '#9DC0F0' }}>Focus</p><p className="text-white text-sm mt-1">Creative & Marketing</p></div>
                <div><p className="eyebrow" style={{ color: '#9DC0F0' }}>Focus</p><p className="text-white text-sm mt-1">Finance & Advisory</p></div>
                <div><p className="eyebrow" style={{ color: '#9DC0F0' }}>Location</p><p className="text-white text-sm mt-1">Kigali, Rwanda</p></div>
              </div>
            </div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <span className="eyebrow">About Us</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4" style={{ color: 'var(--navy)' }}>Built to bring every business need under one roof</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--slate)' }}>SMART LINK Business Solutions LTD combines technology, finance, and professional business services into a single, dependable partner. Instead of juggling separate vendors, our clients work with one team that understands the full picture — from the systems that run their operations to the numbers that guide their decisions.</p>
            <p className="mt-4 leading-relaxed" style={{ color: 'var(--slate)' }}>We're guided by four commitments in every engagement:</p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3"><span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--blue-light)' }}><i data-lucide="lightbulb" className="w-4 h-4" style={{ color: 'var(--blue)' }} /></span><span><span className="font-semibold" style={{ color: 'var(--navy)' }}>Innovation</span> — <span style={{ color: 'var(--slate)' }}>practical solutions that keep clients ahead.</span></span></li>
              <li className="flex items-start gap-3"><span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--blue-light)' }}><i data-lucide="badge-check" className="w-4 h-4" style={{ color: 'var(--blue)' }} /></span><span><span className="font-semibold" style={{ color: 'var(--navy)' }}>Professionalism</span> — <span style={{ color: 'var(--slate)' }}>clear communication, every step of the way.</span></span></li>
              <li className="flex items-start gap-3"><span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--blue-light)' }}><i data-lucide="shield-check" className="w-4 h-4" style={{ color: 'var(--blue)' }} /></span><span><span className="font-semibold" style={{ color: 'var(--navy)' }}>Integrity</span> — <span style={{ color: 'var(--slate)' }}>honest advice, even when it's not the easy answer.</span></span></li>
              <li className="flex items-start gap-3"><span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--blue-light)' }}><i data-lucide="heart-handshake" className="w-4 h-4" style={{ color: 'var(--blue)' }} /></span><span><span className="font-semibold" style={{ color: 'var(--navy)' }}>Client Satisfaction</span> — <span style={{ color: 'var(--slate)' }}>work measured by the results our clients see.</span></span></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="py-28" style={{ background: 'var(--mist)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal text-center max-w-2xl mx-auto">
            <span className="eyebrow">What We Do</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4" style={{ color: 'var(--navy)' }}>Services across three divisions</h2>
            <p className="mt-4" style={{ color: 'var(--slate)' }}>One partner for the technology, creative, and business expertise your organization needs to grow.</p>
          </div>

          <div className="reveal flex justify-center mt-10">
            <div className="inline-flex flex-wrap p-1.5 rounded-full gap-1" style={{ background: '#fff', border: '1px solid var(--line)' }}>
              <button className={`tab-btn px-5 py-2.5 rounded-full text-sm font-semibold ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>All</button>
              <button className={`tab-btn px-5 py-2.5 rounded-full text-sm font-semibold ${activeTab === 'technology' ? 'active' : ''}`} onClick={() => setActiveTab('technology')}>Technology</button>
              <button className={`tab-btn px-5 py-2.5 rounded-full text-sm font-semibold ${activeTab === 'business' ? 'active' : ''}`} onClick={() => setActiveTab('business')}>Business</button>
              <button className={`tab-btn px-5 py-2.5 rounded-full text-sm font-semibold ${activeTab === 'creative' ? 'active' : ''}`} onClick={() => setActiveTab('creative')}>Creative</button>
            </div>
          </div>

          <div className="mt-12">
            <div id="serviceGrid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" dangerouslySetInnerHTML={{ __html: serviceGridHtml }} />
          </div>
        </div>
      </section>

      <section id="why" className="py-28" style={{ background: 'var(--paper)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal text-center max-w-2xl mx-auto">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4" style={{ color: 'var(--navy)' }}>Reasons clients stay with us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            <div className="reveal flex items-start gap-4 p-6 rounded-2xl" style={{ background: 'var(--mist)' }}><span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--navy)' }}><i data-lucide="users" className="w-5 h-5 text-white" /></span><div><h3 className="font-display font-semibold" style={{ color: 'var(--navy)' }}>Professional Experts</h3><p className="text-sm mt-1.5" style={{ color: 'var(--slate)' }}>Our team brings specialist knowledge across technology, finance, creative execution, and business operations.</p></div></div>
            <div className="reveal flex items-start gap-4 p-6 rounded-2xl" style={{ background: 'var(--mist)' }}><span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--navy)' }}><i data-lucide="sparkles" className="w-5 h-5 text-white" /></span><div><h3 className="font-display font-semibold" style={{ color: 'var(--navy)' }}>Certified Specialists</h3><p className="text-sm mt-1.5" style={{ color: 'var(--slate)' }}>We combine practical expertise with modern tools to deliver dependable, professional results.</p></div></div>
            <div className="reveal flex items-start gap-4 p-6 rounded-2xl" style={{ background: 'var(--mist)' }}><span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--navy)' }}><i data-lucide="life-buoy" className="w-5 h-5 text-white" /></span><div><h3 className="font-display font-semibold" style={{ color: 'var(--navy)' }}>Affordable Pricing</h3><p className="text-sm mt-1.5" style={{ color: 'var(--slate)' }}>We tailor solutions to fit real budgets without compromising on quality or professionalism.</p></div></div>
            <div className="reveal flex items-start gap-4 p-6 rounded-2xl" style={{ background: 'var(--mist)' }}><span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--navy)' }}><i data-lucide="wallet" className="w-5 h-5 text-white" /></span><div><h3 className="font-display font-semibold" style={{ color: 'var(--navy)' }}>Reliable Support</h3><p className="text-sm mt-1.5" style={{ color: 'var(--slate)' }}>We remain responsive and engaged long after project launch, offering ongoing support when needed.</p></div></div>
            <div className="reveal flex items-start gap-4 p-6 rounded-2xl" style={{ background: 'var(--mist)' }}><span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--navy)' }}><i data-lucide="gem" className="w-5 h-5 text-white" /></span><div><h3 className="font-display font-semibold" style={{ color: 'var(--navy)' }}>Quality Assurance</h3><p className="text-sm mt-1.5" style={{ color: 'var(--slate)' }}>Every engagement is guided by accuracy, consistency, and a strong commitment to excellence.</p></div></div>
            <div className="reveal flex items-start gap-4 p-6 rounded-2xl" style={{ background: 'var(--mist)' }}><span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--navy)' }}><i data-lucide="target" className="w-5 h-5 text-white" /></span><div><h3 className="font-display font-semibold" style={{ color: 'var(--navy)' }}>Fast Delivery</h3><p className="text-sm mt-1.5" style={{ color: 'var(--slate)' }}>We focus on prompt execution, clear communication, and practical outcomes that keep clients moving forward.</p></div></div>
          </div>
        </div>
      </section>

      <section className="py-28" style={{ background: 'var(--mist)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal text-center max-w-2xl mx-auto">
            <span className="eyebrow">Our Process</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4" style={{ color: 'var(--navy)' }}>How an engagement runs, step by step</h2>
          </div>
          <div className="mt-16 relative">
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px" style={{ background: 'var(--line)' }} />
            <div className="grid lg:grid-cols-4 gap-10 lg:gap-6">
              {[{ step: '01', title: 'Consultation', text: 'Understand client needs.' }, { step: '02', title: 'Planning', text: 'Develop the right strategy.' }, { step: '03', title: 'Implementation', text: 'Execute professionally.' }, { step: '04', title: 'Support', text: 'Provide continuous assistance.' }].map((item) => (
                <div key={item.step} className="reveal text-center lg:text-left">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 font-display font-bold text-lg relative z-10" style={{ background: 'var(--navy)', color: '#fff' }}>{item.step}</div>
                  <h3 className="font-display font-semibold mt-5" style={{ color: 'var(--navy)' }}>{item.title}</h3>
                  <p className="text-sm mt-2" style={{ color: 'var(--slate)' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: 'var(--navy)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">Ready to Transform Your Business?</h2>
          <p className="mt-5 text-lg" style={{ color: '#B8CCEA' }}>Let's talk about where your organization wants to go — and how SMART LINK can help you get there.</p>
          <a href="#contact" className="mt-9 inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold bg-white transition-transform hover:-translate-y-0.5" style={{ color: 'var(--navy)' }}>Contact Us Today <i data-lucide="arrow-right" className="w-4 h-4" /></a>
        </div>
      </section>

      <section id="contact" className="py-28" style={{ background: 'var(--paper)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="reveal text-center max-w-2xl mx-auto">
            <span className="eyebrow">Contact</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4" style={{ color: 'var(--navy)' }}>Let’s start the conversation</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-14 mb-16">
            <div className="reveal card p-7 text-center"><span className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto" style={{ background: 'var(--blue-light)' }}><i data-lucide="map-pin" className="w-5 h-5" style={{ color: 'var(--blue)' }} /></span><h3 className="font-display font-semibold mt-4" style={{ color: 'var(--navy)' }}>Location</h3><p className="text-sm mt-1" style={{ color: 'var(--slate)' }}>Kigali – Gasabo, Rwanda</p></div>
            <div className="reveal card p-7 text-center"><span className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto" style={{ background: 'var(--blue-light)' }}><i data-lucide="phone" className="w-5 h-5" style={{ color: 'var(--blue)' }} /></span><h3 className="font-display font-semibold mt-4" style={{ color: 'var(--navy)' }}>Phone</h3><p className="text-sm mt-1" style={{ color: 'var(--slate)' }}>+250 796 687 309</p></div>
            <div className="reveal card p-7 text-center"><span className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto" style={{ background: 'var(--blue-light)' }}><i data-lucide="mail" className="w-5 h-5" style={{ color: 'var(--blue)' }} /></span><h3 className="font-display font-semibold mt-4" style={{ color: 'var(--navy)' }}>Email</h3><p className="text-sm mt-1 break-all" style={{ color: 'var(--slate)' }}>smartlinkbusinesssolution@gmail.com</p></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="reveal card overflow-hidden min-h-[420px]"><div className="w-full h-full min-h-[420px] flex flex-col items-center justify-center gap-3" style={{ background: 'var(--mist)' }}><i data-lucide="map" className="w-8 h-8" style={{ color: 'var(--blue)' }} /><p className="text-sm font-medium" style={{ color: 'var(--slate)' }}>Map placeholder — Kigali, Gasabo</p><p className="text-xs" style={{ color: 'var(--slate)' }}>Embed a live Google Map here in production</p></div></div>
            <form className="reveal card p-8 space-y-5" noValidate onSubmit={handleSubmit}>
              <div><label htmlFor="name" className="text-sm font-medium" style={{ color: 'var(--navy)' }}>Name</label><input id="name" name="name" type="text" required className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors" style={{ border: '1px solid var(--line)' }} placeholder="Your full name" /></div>
              <div className="grid sm:grid-cols-2 gap-5"><div><label htmlFor="email" className="text-sm font-medium" style={{ color: 'var(--navy)' }}>Email</label><input id="email" name="email" type="email" required className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none" style={{ border: '1px solid var(--line)' }} placeholder="you@company.com" /></div><div><label htmlFor="phone" className="text-sm font-medium" style={{ color: 'var(--navy)' }}>Phone</label><input id="phone" name="phone" type="tel" className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none" style={{ border: '1px solid var(--line)' }} placeholder="+250 ..." /></div></div>
              <div><label htmlFor="service" className="text-sm font-medium" style={{ color: 'var(--navy)' }}>Service Needed</label><select id="service" name="service" className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none bg-white" style={{ border: '1px solid var(--line)' }}><option>Technology Solutions</option><option>Creative Services</option><option>Business Services</option><option>Not Sure Yet</option></select></div>
              <div><label htmlFor="message" className="text-sm font-medium" style={{ color: 'var(--navy)' }}>Message</label><textarea id="message" name="message" rows="4" required className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none resize-none" style={{ border: '1px solid var(--line)' }} placeholder="Tell us about your project..." /></div>
              <button type="submit" className="btn-primary w-full py-3.5 rounded-lg text-sm font-semibold inline-flex items-center justify-center gap-2">Send Message <i data-lucide="send" className="w-4 h-4" /></button>
              {formNote ? <p className={`text-xs text-center ${formError ? '' : ''}`} style={{ color: formError ? '#b91c1c' : 'var(--blue)' }}>{formNote}</p> : null}
            </form>
          </div>
        </div>
      </section>

      <footer style={{ background: 'var(--navy-deep)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <a
            href="#home"
            className="flex items-center gap-3 transition-all duration-300 hover:opacity-90"
          >
            {/* Logo */}
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#014492] p-2 shadow-md">
              <img
                src="/logo-trans.png"
                alt="SMARTLINK Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>

            {/* Brand Name */}
            <div className="leading-tight text-white">
              <h1 className="text-lg font-bold tracking-wide">
                SMARTLINK
              </h1>

              <p className="text-[11px] uppercase tracking-[0.18em] ">
                Business Solutions Ltd.
              </p>
            </div>
          </a>
          <div>
            <h4 className="text-white font-semibold text-sm">Quick Links</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm" style={{ color: '#8DA6CC' }}><a href="#home" className="hover:text-white transition-colors">Home</a><a href="#services" className="hover:text-white transition-colors">Services</a><a href="#about" className="hover:text-white transition-colors">About</a><a href="#why" className="hover:text-white transition-colors">Why Choose Us</a></div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm">Contact</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm" style={{ color: '#8DA6CC' }}><span>Kigali – Gasabo, Rwanda</span><span>+250 796 687 309</span><span className="break-all">smartlinkbusinesssolution@gmail.com</span></div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm">Services</h4>
            <div className="mt-4 flex flex-col gap-3"><span className="text-sm" style={{ color: '#8DA6CC' }}>Technology</span><span className="text-sm" style={{ color: '#8DA6CC' }}>Business</span><span className="text-sm" style={{ color: '#8DA6CC' }}>Creative</span><span className="text-sm" style={{ color: '#8DA6CC' }}>Virtual Assistance</span><span className="text-sm" style={{ color: '#8DA6CC' }}>Accounting</span><span className="text-sm" style={{ color: '#8DA6CC' }}>Digital Solutions</span></div>
          </div>
        </div>
        <div className="border-t py-6 text-center text-xs" style={{ borderColor: '#12315F', color: '#6E88AF' }}>© 2026 SMART LINK Business Solutions LTD. All Rights Reserved.</div>
      </footer>

      {selectedService ? (
        <div className={`service-modal-backdrop ${selectedService ? 'open' : ''}`} aria-hidden={selectedService ? 'false' : 'true'} onClick={(event) => { if (event.target === event.currentTarget) setSelectedService(null); }}>
          <div className="service-modal" role="dialog" aria-modal="true" aria-labelledby="serviceModalTitle">
            <button className="service-modal-close" type="button" aria-label="Close service details" onClick={() => setSelectedService(null)}><i data-lucide="x" className="w-4 h-4" /></button>
            <img src={selectedService.image} alt={selectedService.title} className="service-modal-image" />
            <div className="p-8 lg:p-10">
              <p className="eyebrow">Service Details</p>
              <h3 id="serviceModalTitle" className="font-display font-semibold text-2xl mt-3" style={{ color: 'var(--navy)' }}>{selectedService.title}</h3>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--slate)' }}>{selectedService.longDescription}</p>
              <div className="mt-8 grid gap-6">
                <div><h4 className="font-display font-semibold text-lg" style={{ color: 'var(--navy)' }}>Business Benefits</h4><ul className="mt-4 space-y-3">{selectedService.businessBenefits.map((item) => <li key={item} className="flex items-start gap-3 rounded-2xl border px-4 py-3" style={{ borderColor: 'var(--line)' }}><span className="w-2.5 h-2.5 mt-2 rounded-full shrink-0" style={{ background: 'var(--blue)' }} /><span style={{ color: 'var(--slate)' }}>{item}</span></li>)}</ul></div>
                <div><h4 className="font-display font-semibold text-lg" style={{ color: 'var(--navy)' }}>Who this is for</h4><p className="mt-3 leading-relaxed" style={{ color: 'var(--slate)' }}>{selectedService.audience}</p></div>
                <div><h4 className="font-display font-semibold text-lg" style={{ color: 'var(--navy)' }}>Included services</h4><ul className="mt-4 space-y-3">{selectedService.subServices.map((item) => <li key={item} className="flex items-start gap-3 rounded-2xl border px-4 py-3" style={{ borderColor: 'var(--line)' }}><span className="w-2.5 h-2.5 mt-2 rounded-full shrink-0" style={{ background: 'var(--blue)' }} /><span style={{ color: 'var(--slate)' }}>{item}</span></li>)}</ul></div>
                <a href="#contact" className="btn-primary inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold w-fit">{selectedService.cta} <i data-lucide="arrow-right" className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
