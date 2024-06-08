import {Cursor} from "../elements/cursor";

const projectData = [
    {title: "DOAJ", tags: ["bootstrap", "jquery", "figma", "python"]},
    {title: "TASE", tags: ["React.js", "d3.js", "figma"]},
    {title: "Cottage Labs", tags: ["figma", "ssg", "sass"]},
    {title: "Materiom Commons", tags: ["figma", "javascript", "sass"]},
    {title: "MDR Closed", tags: ["figma"]}
];

export const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-list">
                {projectData.map((project, index) => (
                    <div key={index} className="project hover-this">
                        <h3 className="project-title"><span>{project.title}</span></h3>
                        <div className="tags">
                            {project.tags.map((tag, index) => (
                                <p key={index} className="tag">{tag}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
