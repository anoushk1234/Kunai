import logo from "./logo.svg";
import NavbarPublic from "./components/NavbarPublic";
import SignIn from "./signin";
import Dashboard from "./dashboard";
function App() {
  return (
    <div>
      <header className="mx-4 sm:mx-auto sm:max-w-5xl">
        <NavbarPublic />
      </header>
      <body>
        <Dashboard />
      </body>
    </div>
  );
}

export default App;
