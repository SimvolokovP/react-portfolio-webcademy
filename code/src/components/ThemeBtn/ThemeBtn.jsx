import sunIcon from "../../assets/img/icons/sun.svg";
import moonIcon from "../../assets/img/icons/moon.svg";
import { useEffect } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import { detectTheme } from "../../utils/detectTheme";
import "./ThemeBtn.css";

export default function ThemeBtn() {
  const [theme, setTheme] = useLocalStorage("theme", detectTheme());

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);


  useEffect(() => {
    window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        setTheme(newColorScheme);
    });
  }, [])


  function toggleTheme() {
    console.log("click!");
    setTheme((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  }

  return (
    <button
      className={
        theme === "light"
          ? "dark-mode-btn"
          : "dark-mode-btn dark-mode-btn--active"
      }
      onClick={toggleTheme}
    >
      <img src={sunIcon} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moonIcon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}
