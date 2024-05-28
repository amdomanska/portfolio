import dot from "../assets/dot.svg";

export const Projects = () => {
    return (
        <div className="section projects">
            <div className="content">
                <span className="header"><img src={dot} className="dot" alt=""/><h4>Interesting projects I've worked on</h4></span>
                <div className="projects-list">
                    <div className="project">
                        <h3 className="project-title">DOAJ</h3>
                        <div className="tags">
                            <p className="tag">bootstrap</p>
                            <p className="tag">jquery</p>
                            <p className="tag">figma</p>
                            <p className="tag">python</p>
                        </div>
                    </div>
                    <div className="project">
                        <h3 className="project-title">TASE</h3>
                        <div className="tags">
                            <p className="tag">React.js</p>
                            <p className="tag">d3.js</p>
                            <p className="tag">figma</p>
                        </div>
                    </div>
                    <div className="project">
                        <h3 className="project-title">Cottage Labs</h3>
                        <div className="tags">
                            <p className="tag">figma</p>
                            <p className="tag">ssg</p>
                            <p className="tag">sass</p>
                        </div>
                    </div>
                    <div className="project">
                        <h3 className="project-title">Materiom Commons</h3>
                        <div className="tags">
                            <p className="tag">figma</p>
                            <p className="tag">javascript</p>
                            <p className="tag">sass</p>
                        </div>
                    </div>
                    <div className="project">
                        <h3 className="project-title">MDR Closed</h3>
                        <div className="tags">
                            <p className="tag">figma</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}