import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Header from './components/Header'

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white px-6 lg:px-8 space-y-48 lg:space-y-64 sm:pt-64 lg:pt-0">
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Footer />
      </main>
    </>
  )
}