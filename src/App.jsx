import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CallToAction from "./Components/CallToAction";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="font-primary">
      <header>
        {" "}
        <Navbar />
      </header>
      <main>
        <Hero />
        <CallToAction />
      </main>
      <footer>
        {" "}
        <Footer />
      </footer>
    </div>
  );
};

export default App;
