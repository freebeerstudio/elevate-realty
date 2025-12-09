import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'  // CSS Modules version (495 lines)
import { HeroV2 } from './components/HeroV2'  // Tailwind version (196 lines)
import { About } from './components/About'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Areas } from './components/Areas'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { DemoToggle } from './components/DemoToggle'

function App() {
  const [useTailwind, setUseTailwind] = useState(true)

  return (
    <>
      <Header />
      <main>
        {useTailwind ? <HeroV2 /> : <Hero />}
        <About />
        <Services />
        <Team />
        <Areas />
        <Contact />
      </main>
      <Footer />
      <DemoToggle
        useTailwind={useTailwind}
        onToggle={() => setUseTailwind(!useTailwind)}
      />
    </>
  )
}

export default App
