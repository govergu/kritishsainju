import {
  FaCodepen,
  FaInstagramSquare,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top footer">
      <div className="col-md-4 d-flex align-items-center" bis_skin_checked="1">
        <a href="/" className="mb-3 me-2 mb-md-0  text-decoration-none lh-1">
          <img src="my_logo.png" alt="" height={64} />
        </a>
        <span className="mb-3 mb-md-0 ">© kritishsainju</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="https://github.com/govergu" href="#" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li className="ms-3">
          <a
            className="https://www.instagram.com/sainzo.pp/"
            href="#"
            target="_blank"
          >
            <FaInstagramSquare />
          </a>
        </li>
        <li className="ms-3">
          <a
            className="https://www.linkedin.com/in/kritish-sainju-894118329/"
            href="#"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
