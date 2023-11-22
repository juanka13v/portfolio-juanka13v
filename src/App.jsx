import "./App.css";
import Hero from "@components/Hero";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Contact from "@components/Contact";
import Skills from "@components/Skills";
import Services from "@components/Services";
import Projects from "@components/Projects";

function App() {
  return (
    <>
      <main className="bg-base-100 mx-auto max-w-screen-xl px-4 md:px-6 flex flex-col gap-8 ">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
