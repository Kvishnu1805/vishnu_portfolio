import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Education from "../components/education/Education";
import Certifications from "../components/certifications/Certifications";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[72px]">
        {/* Hero keeps its existing page-load animation */}
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Home;