import { Layout } from './components/layout/Layout'
import { WatercolorSpot } from './components/ui/WatercolorSpot'
import { InkTransition } from './components/ui/InkTransition'
import { InkCursor } from './components/ui/InkCursor'
import { InkClickEffect } from './components/ui/InkClickEffect'
import { Home } from './pages/Home'
import { Portfolio } from './pages/Portfolio'
import { About } from './pages/About'
import { PoemDetail } from './pages/PoemDetail'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { SmoothScroller } from './components/ui/SmoothScroller'
import { LiquidFilter } from './components/ui/LiquidFilter'

import { PoetWebGLBackground } from './components/ui/PoetWebGLBackground'

function App() {
  const location = useLocation();

  return (
    <SmoothScroller>
      <Layout>
        <InkCursor />
        <InkClickEffect />
        <LiquidFilter />
        
        {/* Dynamic Global Physics Background */}
        <PoetWebGLBackground />

        {/* Global Background Ambience */}
        <WatercolorSpot color="bg-rose" width="w-[500px]" height="h-[500px]" className="-top-40 -right-40 opacity-20" delay={0} />
        <WatercolorSpot color="bg-sage" width="w-[400px]" height="h-[400px]" className="top-40 -left-20 opacity-20" delay={3} />
        <WatercolorSpot color="bg-ink-light" width="w-[300px]" height="h-[300px]" className="bottom-20 right-10 opacity-10" delay={5} />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<InkTransition><Home /></InkTransition>} />
            <Route path="/portfolio" element={<InkTransition><Portfolio /></InkTransition>} />
            <Route path="/portfolio/:slug" element={<InkTransition><PoemDetail /></InkTransition>} />
            <Route path="/about" element={<InkTransition><About /></InkTransition>} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </SmoothScroller>
  )
}

export default App
