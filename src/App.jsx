
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaborations from "./components/Collaborations";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
            <Header/>
              <Hero />
              <Benefits />
              <Collaborations />
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
