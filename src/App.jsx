import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaborations from "./components/Collaborations";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
const App = () => {
  return (
    // <>
    //   <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
    //     <Header />
    //     <Hero/>
    //     <Benefits/>
    //     <Collaborations/>
    //     <Footer/>
    //   </div>
    //   <ButtonGradient />
    // </>
    <>
      <Routes>
        {/* Landing page */}
        <Route
          path="/"
          element={
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
              <Header />
              <Hero />
              <Benefits />
              <Collaborations />
              <Footer />
              <ButtonGradient />
            </div>
          }
        />

        {/* Signup page */}
        <Route path="/SignUp" element={<SignUp />} />
         <Route path="/Dashboard" element={<Dashboard />} />

      </Routes>
    </>
  );
};

export default App;
