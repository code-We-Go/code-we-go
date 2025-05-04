import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import LatestProjects from './components/LatestProjects';
import WhyChooseUs from './components/WhyChooseUs';
import TrustedClients from './components/TrustedClients';
import Contact from './components/Contact';
    
export default function Home() {
  return (
    <>
      <main className='overflow-x-hidden'>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <LatestProjects />
        </section>
        <section id="clients">
          <TrustedClients />
        </section>
        <section id="why-choose-us">
          <WhyChooseUs />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
