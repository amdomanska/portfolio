import line from "../assets/line.svg";

export const Landing = () => {
    return (
        <>
            <div className="landing">
                <h1>Aga M. Domanska</h1>
                <p className="role">
                    UI DESIGNER
                    <img src={line} className="line" alt="and"/>
                    FRONTEND DEVELOPER
                </p>
                <h3>I turn front-end expertise <br/> into captivating UI experiences</h3>
            </div>
            {/*<LandingBg/>*/}
        </>
    )
}