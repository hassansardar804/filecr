import { useState } from "react";

import "./App.css";
import Home from "./Page/Home";
// import Navbar from "./Componets/SoftwareList";
import Window from "./Componets/SoftwareList";
import Navbar from "./Componets/Navbar";
import Footer from "./Componets/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />

      {/* <Navbar /> */}
      <Navbar />
      <div className="mx-1 sm:mx-5 ">
        <Window />
      </div>
      <Footer />
    </>
  );
}

export default App;
