import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Now from '@/components/Now';
import Projects from '@/components/Projects';
import CuratedFeed from '@/components/CuratedFeed';
import Blog from '@/components/Blog';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Scene } from '@/components/canvas/Scene';

export default function Home() {
  return (
    <>
      <Scene />
      <Navigation />
      <main id="main-content">
        <Hero />
        <Projects />
        <Now />
        <CuratedFeed />
        <Blog />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
