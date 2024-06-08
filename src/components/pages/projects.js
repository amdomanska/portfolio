import {useState} from "react";
import {projectData} from "./projects/projectpagemanager"

export const Projects = () => {
    const [projectShown, setProjectShown] = useState(null);
    var ShownComponent = null;
    if (projectShown) {
        ShownComponent = projectData[projectShown].component;
        console.log(projectData[projectShown]);
    }

    return (
        <div className="projects">
            <div className="projects-list">
                {Object.values(projectData).map((project, index) => (
                    <div key={index} className="project hover-this" onClick={() => setProjectShown(project.id)}>
                        <h3 className="project-title"><span>{project.title}</span></h3>
                        <div className="tags">
                            {project.tags.map((tag, index) => (
                                <p key={index} className="tag">{tag}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {projectShown && <ShownComponent/>}
        </div>
    );
};
