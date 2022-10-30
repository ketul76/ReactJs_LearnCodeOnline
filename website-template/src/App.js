import React from "react";

import Navbar from "./Navbar";
import AppSection from "./AppSection";
import CardSection from "./CardSection";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";



const App = () => {
  return(
    <div>
      <Navbar />
      <HeroSection />
      <AppSection />
      <CardSection />
      <FooterSection />
    
    </div>
)
}

export default App;