import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Now from '@/components/Now';
import Projects from '@/components/Projects';
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
        <CuratedFeed />
        <Blog />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
