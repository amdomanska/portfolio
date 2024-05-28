import logo from "../assets/logo.svg"
import line from "../assets/line.svg"
import {LandingBg} from "../pages/landing-bg";

export const Landing = () => {
    return (
        <div className="section landing">
            <div className="content">
                <img src={logo} className="logo" alt="AMD logo"/>
                <h1>Aga M. Domanska</h1>
                <p className="role">
                    UI DESIGNER
                    <img src={line} className="line" alt="and"/>
                    FRONTEND DEVELOPER
                </p>
                <h3>I turn front-end expertise <br/> into captivating UI experiences</h3>
            </div>
            <LandingBg />
        </div>
    )
}