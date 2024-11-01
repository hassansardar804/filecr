import { useState } from "react";

import "./App.css";
import Home from "./Page/Home";
import Navbar from "./Componets/SoftwareList";
import Window from "./Componets/SoftwareList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />

      <Navbar />
    </>
  );
}

export default App;
