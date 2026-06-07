import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Header from './components/Header'
import { pageContent } from '@/app/lib/content'

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <Header data={pageContent.header} />
        <Hero data={pageContent.hero} />
        <About data={pageContent.about} />
        <Portfolio data={pageContent.portfolio} items={pageContent.portfolioItems} />
        <Contact data={pageContent.contact} socialLinks={pageContent.socialLinks} />
        <CTA data={pageContent.cta} />
        <Footer data={pageContent.footer} socialLinks={pageContent.socialLinks} />
      </main>
    </>
  )
}
