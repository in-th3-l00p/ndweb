import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Header from './components/Header'
import { client } from '@/sanity/lib/client'
import { PAGE_DATA_QUERY } from '@/sanity/lib/queries'

export default async function Home() {
  const data = await client.fetch(PAGE_DATA_QUERY)

  return (
    <>
      <main className="min-h-screen bg-white px-6 lg:px-8">
        <Header data={data.header} />
        <Hero data={data.hero} />
        <About data={data.about} />
        <Portfolio data={data.portfolio} items={data.portfolioItems} />
        <Contact data={data.contact} socialLinks={data.socialLinks} />
        <CTA data={data.cta} />
        <Footer data={data.footer} socialLinks={data.socialLinks} />
      </main>
    </>
  )
}
