import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content flex flex-col gap-6">
      <div className="footer gap-6">
        <nav>
          <header className="footer-title">Code</header>
          <p className="text-base font-semibold mb-4">
            You can see the code of this site on github
          </p>
          <a
            href="https://github.com/juanka13v/portfolio-juanka13v"
            target="_blank"
            className="btn btn-primary btn-block"
          >
            Github
          </a>
        </nav>
        <nav>
          <header className="footer-title">Links</header>
          <a href="#skills" className="link link-hover">
            Skills
          </a>
          <a href="#projects" className="link link-hover">
            Projects
          </a>
          <a href="#services" className="link link-hover">
            Services
          </a>
          <a href="#contact" className="link link-hover">
            Contact
          </a>
        </nav>
        <nav className="mx-auto md:mx-0">
          <header className="footer-title mx-auto md:mx-0">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a className="text-4xl hover:scale-110 hover:text-primary">
              <i className="bx bxl-twitter"></i>
            </a>
            <a className="text-4xl hover:scale-110 hover:text-primary">
              <i className="bx bxl-github"></i>
            </a>
            <a className="text-4xl hover:scale-110 hover:text-primary">
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </div>
        </nav>
      </div>

      <aside className="mx-auto">
        <p>Copyright © 2023 - All right reserved by juanka13v</p>
      </aside>
    </footer>
  );
};

export default Footer;
