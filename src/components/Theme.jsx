import React, { useEffect } from "react";

const Theme = () => {
  const handleThemeChange = (event) => {
    document.documentElement.setAttribute("data-theme", event.target.value);
    localStorage.setItem("theme", event.target.value);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === null) {
      const defaultTheme =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      document.documentElement.setAttribute("data-theme", defaultTheme);
      localStorage.setItem("theme", defaultTheme);
    }

    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost capitalize">
        Theme
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
      >
        <li className="mb-2">
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Dark"
            value="dark"
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Light"
            value="light"
            onChange={handleThemeChange}
          />
        </li>
      </ul>
    </div>
  );
};

export default Theme;
