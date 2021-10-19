import logo from "./logo.svg";
import NavbarPrivate from "./components/NavbarPrivate";
import SignIn from "./signin";
import React, { useState } from "react";
import Dashboard from "./dashboard";
function PrivateDashboard() {
  const [passData, setPassData] = useState([]);
  const [isTransformed, setIsTransformed] = useState(false);
  return (
    <div>
      <header className="mx-4 sm:mx-auto sm:max-w-5xl">
        <NavbarPrivate isTransformed={isTransformed} setIsTransformed={setIsTransformed} setPassData={setPassData} />
      </header>
      <body>
        <Dashboard isTransformed={isTransformed} setIsTransformed={setIsTransformed} passData={passData} setPassData={setPassData} />
      </body>
    </div>
  );
}

export default PrivateDashboard;
