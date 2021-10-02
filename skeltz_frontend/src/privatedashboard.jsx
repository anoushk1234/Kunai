import logo from "./logo.svg";
import NavbarPrivate from "./components/NavbarPrivate";
import SignIn from "./signin";
import React, { useState } from "react";
import Dashboard from "./dashboard";
function PrivateDashboard() {
  const [passData, setPassData] = useState([]);
  return (
    <div>
      <header className="mx-4 sm:mx-auto sm:max-w-5xl">
        <NavbarPrivate setPassData={setPassData} />
      </header>
      <body>
        <Dashboard passData={passData} />
      </body>
    </div>
  );
}

export default PrivateDashboard;
