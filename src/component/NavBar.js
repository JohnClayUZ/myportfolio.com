import React from "react";

function NavBar(props) {
  return (
        <div>
            <div className="NavBar-2"></div>
            <div className="container">
                <div className="NavBar">
                    <div><a onMouseOver={props.BarOver} onMouseOut={props.BarOut} onClick={props.ok} href="#section">Home</a></div>
                    <div><a onMouseOver={props.BarOver} onMouseOut={props.BarOut} onClick={props.ok} href="#section1">About me</a></div>
                    <div><a onMouseOver={props.BarOver} onMouseOut={props.BarOut} onClick={props.ok} href="#section2">Skills</a></div>
                    <div><a onMouseOver={props.BarOver} onMouseOut={props.BarOut} onClick={props.ok} href="#section3">Portfolio</a></div>
                    <div><a onMouseOver={props.BarOver} onMouseOut={props.BarOut} onClick={props.ok} href="#section4">Contacts</a></div>
                </div>
            </div>
        </div>
  );
}

export default NavBar;
