import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Now from '@/components/Now';
import Projects from '@/components/Projects';
import Interests from '@/components/Interests';
import CuratedFeed from '@/components/CuratedFeed';
import Blog from '@/components/Blog';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Now />
        <Projects />
        <Interests />
        <CuratedFeed />
        <Blog />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
