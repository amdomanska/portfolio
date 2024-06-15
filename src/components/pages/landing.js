import line from "../assets/line.svg";
import {Link} from "react-router-dom";


export const Landing = () => {
    return (
        <>
            <div className="landing">
                <div className="main-info">
                    <h1>Aga M. Domanska</h1>
                    <p className="role">
                        UI DESIGNER
                        <img src={line} className="line" alt="and"/>
                        FRONTEND DEVELOPER
                    </p>
                    <h2>I turn front-end expertise <br/> into captivating UI experiences</h2>
                </div>
                <ul className="links">
                    <li><Link to="#skills" className="hover-this">SKILLS</Link></li>
                    <li><Link to="#projects" className="hover-this">FEATURED PROJECTS</Link></li>
                </ul>
            </div>
            {/*<LandingBg/>*/}
        </>
    )
}