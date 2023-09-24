import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
