import { useState } from "react";

import "./App.css";
import Home from "./Page/Home";
// import Navbar from "./Componets/SoftwareList";
import Window from "./Componets/SoftwareList";
import Navbar from "./Componets/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />

      {/* <Navbar /> */}
      <Navbar />
      <div className="ms-7">
        <Window />
      </div>
    </>
  );
}

export default App;
