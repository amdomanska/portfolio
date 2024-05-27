import { useEffect } from "react";
import dot from "../assets/dot.svg"

export const Skills = () => {

    return (
        <div className="section skills">
            <div className="content">
                <span className="header"><img src={dot} className="dot" alt=""/><h4>What I do well</h4></span>
                <div className="table">
                    <div className="ui_design">
                        <h2>ui design</h2>
                        <div className="skills">
                            <h3>figma</h3>
                            <h3>wireframing <br/>and prototyping</h3>
                            <h3>wcag standards</h3>
                            <h3>ui patterns</h3>
                            <h3>colour theory</h3>
                        </div>
                    </div>
                    <div className="frontend_development">
                        <h2>frontend <br /> development</h2>
                        <div className="skills">
                            <h3>react.js</h3>
                            <h3>d3.js</h3>
                            <h3>jquery</h3>
                            <h3>css/sass</h3>
                            <h3>material UI</h3>
                            <h3>bootstrap</h3>
                            <h3>html</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}