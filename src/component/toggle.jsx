import { useEffect, useState } from "react";
import { CiBrightnessUp } from "react-icons/ci";
import { FaMoon } from "react-icons/fa6";
const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Load the saved theme from localStorage
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    // Add or remove the dark-mode class on the body element
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    // Save the user's theme preference to localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)}
      className="toggle-button"
    >
      {isDarkMode ? <FaMoon /> : <CiBrightnessUp />}
    </button>
  );
};

export default Toggle;
