import dot from "../assets/dot.svg";
import { useEffect, useState } from "react";

export const Projects = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursor = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateCursor);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
        };
    }, []);

    const cursorStyle = {
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
    };

    return (
        <div className="projects">
            <div className="projects-list">
                <div className="project hover-this">
                    <h3 className="project-title"><span>DOAJ</span></h3>
                    <div className="tags">
                        <p className="tag">bootstrap</p>
                        <p className="tag">jquery</p>
                        <p className="tag">figma</p>
                        <p className="tag">python</p>
                    </div>
                </div>
                <div className="project hover-this">
                    <h3 className="project-title"><span>TASE</span></h3>
                    <div className="tags">
                        <p className="tag">React.js</p>
                        <p className="tag">d3.js</p>
                        <p className="tag">figma</p>
                    </div>
                </div>
                <div className="project hover-this">
                    <h3 className="project-title"><span>Cottage Labs</span></h3>
                    <div className="tags">
                        <p className="tag">figma</p>
                        <p className="tag">ssg</p>
                        <p className="tag">sass</p>
                    </div>
                </div>
                <div className="project hover-this">
                    <h3 className="project-title"><span>Materiom Commons</span></h3>
                    <div className="tags">
                        <p className="tag">figma</p>
                        <p className="tag">javascript</p>
                        <p className="tag">sass</p>
                    </div>
                </div>
                <div className="project hover-this">
                    <h3 className="project-title"><span>MDR Closed</span></h3>
                    <div className="tags">
                        <p className="tag">figma</p>
                    </div>
                </div>
                <div className="cursor" style={cursorStyle}></div>
            </div>
        </div>
    );
};
