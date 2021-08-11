import React from 'react';
import {connect} from "react-redux";

function Skills(props) {
    return (
        <div id="section2" className="Skills">
            <div className="container">
                <div className="me-name">Skills</div>
                <div className="me-name-in">I work in such programs as</div>
                <div className="figma">
                    {
                        props.umum.map((item,index)=>(
                            <div key={index}>
                                <img src={item.img} alt=""/>
                                <h6>{item.text}</h6>
                                <img src={item.star} alt=""/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return{
        umum:state.Skills.umum
    }
}
function mapDispatchToProps(dispatch) {
    return{}
}

export default connect(mapStateToProps,mapDispatchToProps)(Skills);