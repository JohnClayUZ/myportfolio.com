import React from "react";

function SectionOne(props) {
  return (
    <div id="section" className="SectionOne container">
      <div>
        <div className="Denis">Denis Novik</div>
        <div className="UX">UX | UI designer 24 years old, Minsk</div>
        <div className="language">
          <button>RU</button>
          <div>|</div>
          <button>ENG</button>
        </div>
      </div>
      <img src="./images/man.png" alt="" />
    </div>
  );
}

export default SectionOne;
