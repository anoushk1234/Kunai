import logo from "./logo.svg";
import NavbarPrivate from "./components/NavbarPrivate";
import SignIn from "./signin";
import Dashboard from "./dashboard";
function PrivateDashboard() {
  return (
    <div>
      <header className="mx-4 sm:mx-auto sm:max-w-5xl">
        <NavbarPrivate />
      </header>
      <body>
        <Dashboard />
      </body>
    </div>
  );
}

export default PrivateDashboard;
