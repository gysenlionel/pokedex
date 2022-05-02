import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CartDetails from "./pages/CartDetails";
import { AnimatePresence } from "framer-motion";
import { EvolContextProvider } from "./context/EvolContext";
function App() {
  const location = useLocation();
  return (
    <>
      <EvolContextProvider>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/:pokemon" element={<CartDetails />} />
          </Routes>
        </AnimatePresence>
      </EvolContextProvider>
    </>
  );
}

export default App;
