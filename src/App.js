import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const classAdd = darkMode ? "dark-theme" : "light-theme";
    const classRemove = darkMode ? "light-theme" : "dark-theme";

    if (document.documentElement.classList) {
      document.documentElement.classList.remove(classRemove);
    }
    document.documentElement.classList.add(classAdd);
  }, [darkMode]);

  return (
    <nav>
      <div className="nav-center">
        <h1>overreacted</h1>
        <button
          className="btn"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          toggle
        </button>
      </div>
      <section className="articles">
        {data.map((post) => {
          return <Article key={post.id} {...post} />;
        })}
      </section>
    </nav>
  );
}

export default App;
