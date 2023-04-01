import "./App.css";
import Products from "./component/Product";
import Home from "./component/Home";
import Navbar from "./component/NavBar";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      <Footer />
    </>
  );
}

export default App;
