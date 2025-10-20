import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Productviewer from './components/Productviewer';
import Showcase from './components/Showcase';
import gsap from 'gsap';
import Performance from './components/Performance';
import Features from './components/Features';
import Highlights from './components/Highlights';
import Footer from './components/footer';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Productviewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  )
}

export default App