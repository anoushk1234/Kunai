import logo from "./logo.svg";
import NavbarPublic from "./components/NavbarPublic";
import SignIn from "./signin";
import Dashboard from "./dashboard";
import React, { useState } from "react";
function App() {
  const [passData, setPassData] = useState([]);
  return (
    <div>
      <header className="mx-4 sm:mx-auto sm:max-w-5xl">
        <NavbarPublic setPassData={setPassData} />
      </header>
      <body>
        <Dashboard passData={passData} />
      </body>
    </div>
  );
}

export default App;
