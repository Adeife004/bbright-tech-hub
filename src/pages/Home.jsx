import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar       from '../components/Navbar.jsx'
import Hero         from '../components/Hero.jsx'
import Services     from '../components/Services.jsx'
import HowItWorks   from '../components/HowItWorks.jsx'
import Programmes   from '../components/Programmes.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CTABanner    from '../components/CTABanner.jsx'
import Footer       from '../components/Footer.jsx'
import ScrollToTop  from '../components/ScrollToTop.jsx'

function Home() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 })
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Programmes />
      <Testimonials />
      <CTABanner />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Home
