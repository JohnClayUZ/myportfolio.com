import React from 'react';

function Contact(props) {
    return (
        <div id="section4" className="container">
            <div className="Contact">
                <div className="me-name">Contacts</div>
                <div className="me-name-in">
                    Want to know more or just chat?
                    You are welcome!
                </div>
                <button>Send message</button>
                <div className="img-con">
                    <a href="#"><img src="images/Group11.png" alt=""/></a>
                    <a href="#"><img src="images/Group22.png" alt=""/></a>
                    <a href="#"><img src="images/Group33.png" alt=""/></a>
                    <a href="#"><img src="images/Group44.png" alt=""/></a>
                </div>
                <div className="Like">
                    Like me on
                    LinkedIn, Instagram, Behance, Dribble
                </div>
            </div>
        </div>
    );
}

export default Contact;