import React, { useEffect, useState } from "react";
import Language from "@components/Language";
import Theme from "@components/Theme";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const checkScroll = () => {
      const height = window.scrollY;

      if (height > 200) {
        setMenuVisible(true);
      } else {
        setMenuVisible(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuVisible) {
      setMenu(false);
    }
  }, [menuVisible]);

  return (
    <header
      className={`fixed navbar  bg-base-300 z-[1000]  w-full top-0 left-0 transition-opacity ease-in-out duration-300  ${
        menuVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Juanka</a>
      </div>

      <div className="md:hidden">
        <button className="btn btn-square btn-ghost" onClick={handleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`${
          menu ? "translate-x-0" : " translate-x-full md:translate-x-0"
        } absolute ease-in duration-300  top-[100%] flex flex-col gap-4 justify-start items-center left-0 w-full h-[calc(100vh-4rem)] bg-base-300 md:static md:h-auto md:w-auto md:flex-row md:gap-0`}
      >
        <ul className="menu menu-vertical md:menu-horizontal px-1 font-semibold">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <Theme />
        <Language />
      </div>
    </header>
  );
};

export default Header;
