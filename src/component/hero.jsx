import {
  FaCodepen,
  FaInstagramSquare,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
const Hero = () => {
  return (
    <div className="col-md-4 themed-grid-col hero" bis_skin_checked="1">
      <div className="pb-3" bis_skin_checked="1">
        <h1>Kritish Sainju</h1>
        <p>Front End Intern</p>I build react based websites.
      </div>
      <div className="row nav" bis_skin_checked="1 " id="hero" role="tablist">
        <li>
          <a href="#about" className="nav-item">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-item">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-item">
            Project
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-item">
            Contact
          </a>
        </li>
      </div>
      <div className="row social-links" bis_skin_checked="1">
        <div className="col-md-12 themed-grid-col " bis_skin_checked="1">
          <a href="https://github.com/govergu" className="icon" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kritish-sainju-894118329/"
            className="icon"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://codepen.io/govergu" className="icon" target="_blank">
            <FaCodepen />
          </a>
          <a
            href="https://www.instagram.com/sainzo.pp/"
            className="icon"
            target="_blank"
          >
            <FaInstagramSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
