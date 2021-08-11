import React from "react";
import About from "./component/About";
import NavBar from "./component/NavBar";
import SectionOne from "./component/SectionOne";
import Skills from "./component/Skills";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";

function App() {
    document.addEventListener('mousemove', (e) => {
        document.getElementById("myBtn").style.top = `${e.pageY-10}px`;
        document.getElementById("myBtn").style.left = `${e.pageX-10}px`;
    });
    function BarOver() {
        document.getElementById("myBtn").classList.add('cursor-1')
    }
    function BarOut() {
        document.getElementById("myBtn").classList.remove('cursor-1')
    }
    function ok() {
        document.getElementById("piano").play();
    }
    return (
        <div>
            <div id="myBtn" className="cursor"></div>
            <audio id="piano" src="iphone.mp3"></audio>
            <NavBar BarOver={BarOver} BarOut={BarOut} ok={ok} />
            <SectionOne/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contact/>
        </div>
    );
}

export default App;
