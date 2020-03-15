import React, { useState, useEffect } from "react";
import DragContainer from "./components/DragContainer";

import "./sass/app.scss";

const App = () => {
  const [savedValue, getSavedValue] = useState()

  const onSubmit = () => {
    getDataFromLocalStorage()
  };

  const getDataFromLocalStorage = () => {
    let el = document.querySelector(".drop-container");
    let elHTML = el.innerHTML;
    localStorage.setItem("itemsaved", elHTML);
  }

  useEffect(() => {
    let getLocalStorage = localStorage.getItem("itemsaved")
    getSavedValue(getLocalStorage)
    let el = document.querySelector(".drop-container");
    el.innerHTML = getLocalStorage
  }, [savedValue])

  return (
    <main class="builder">
      <section>
        <form>
          <DragContainer />
        </form>
      </section>
      <section>
        <button onClick={onSubmit} type="submit" className="submit">
          Save
        </button>
      </section>
    </main>
  );
};

export default App;
