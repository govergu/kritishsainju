import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import Projects from "./projects";
import Skills from "./skills";

const Main = () => {
  return (
    <div
      className="col-md-8 themed-grid-col main"
      bis_skin_checked="1"
      data-bs-spy="scroll"
      data-bs-target="#hero"
      tabIndex="0"
    >
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
