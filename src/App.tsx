import { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Technologies from "./components/technologies";
import Experience from "./components/experience";
import Projects from "./components/projects";
import CONTACT from "./components/contact";
import StarsCanvas from "./components/starBackground";
import { Analytics } from "@vercel/analytics/react"
import bhole from "./assets/blackhole.webm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#030014]"></div>     
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#030014 ] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_35%_35%_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <StarsCanvas/>
      </div>
        
      <div className="container mx-auto px-8 ">  
      <video
        src={bhole}
        type="video/webm"
        className="absolute rotate-180 top-[-340px] left-0 w-[700px] h-[670px] lg:w-full lg:h-[700px] -z-10 object-cover overflow-hidden opacity-70"
        autoPlay  
        loop
        muted
      />
        <Analytics />     
        <NavBar />
        <Hero />
        <About />
        <Technologies/>
        <Experience/>
        <Projects/>
        <CONTACT/>
      </div>
    </div>
  );
}

export default App;
