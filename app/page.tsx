import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'

export default function Home() {
  return (
    <main className="min-h-screen bg-white space-y-48 lg:space-y-64">
      <Hero />
      <About />
      <Portfolio />
    </main>
  )
}