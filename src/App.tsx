import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'      // CSS Modules version
import { HeroV2 } from './components/HeroV2'  // Tailwind inline styles version
import { HeroV3 } from './components/HeroV3'  // 21st.dev animated version
import { About } from './components/About'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Areas } from './components/Areas'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { DemoToggleV2 } from './components/DemoToggleV2'

type HeroVersion = 'css-modules' | 'tailwind' | 'animated'

function App() {
  const [heroVersion, setHeroVersion] = useState<HeroVersion>('animated')

  const renderHero = () => {
    switch (heroVersion) {
      case 'css-modules':
        return <Hero />
      case 'tailwind':
        return <HeroV2 />
      case 'animated':
        return <HeroV3 />
    }
  }

  return (
    <>
      <Header />
      <main>
        {renderHero()}
        <About />
        <Services />
        <Team />
        <Areas />
        <Contact />
      </main>
      <Footer />
      <DemoToggleV2
        heroVersion={heroVersion}
        onVersionChange={setHeroVersion}
      />
    </>
  )
}

export default App
