import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
// import Loader from "./components/Loader";
import CartDetails from "./pages/CartDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:pokemon" element={<CartDetails />} />
          <Route
            path="load"
            // element={<Loader fullScreen="w-screen h-screen" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
