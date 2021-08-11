import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./global.scss";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

const figma={
    umum:[
        {
            img:"images/Group1.png",
            text:"Adobe Photoshop",
            star:"images/star.png"
        },
        {
            img:"images/Group 2.png",
            text:"Adobe Illustrator",
            star:"images/star.png"
        },
        {
            img:"images/Group3.png",
            text:"Adobe After Effects",
            star:"images/star.png"
        },
        {
            img:"images/Group4.png",
            text:"Figma",
            star:"images/star.png"
        },
    ]
};

function Skills(state=figma,action) {
    return state
}

const store = createStore(combineReducers({Skills}));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
