import React from "react";
import useLocalStorage from "use-local-storage";
import "./Theame.css"
import Sliding from "../Components/Sliding/Sliding";
import Card from "../Components/Card/Card";

function Theame() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <input
        type="checkbox"
        id="switch"
        className="checkbox"
        onClick={switchTheme}
      />
      <label for="switch" className="toggle"></label>

      <div className="container">
        <div className="upper-cards">
        <h2>Sports</h2>
        <hr />
       <Card theme={theme} />
        <div className="more-button">
          <button>See More</button>
        </div>
       </div>

        <div className="lower-card" lower-theame={theme}>
          <h1>Collection Spotlight</h1>
          <p className="head-detail">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </p>
          <Sliding theme={theme} />
        </div>
      </div>
    </div>
  );
}

export default Theame;
