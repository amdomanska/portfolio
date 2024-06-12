import {useEffect, useState} from "react";
import {projectData} from "./projects/projectpagemanager"
import {BurstDiv} from "../elements/burstDiv";

export const Projects = () => {
    const [projectShown, setProjectShown] = useState(null);
    const [projectDetails, setProjectDetails] = useState(null);
    var ShownComponent = null;
    if (projectShown) {
        ShownComponent = projectData[projectShown].component;
    }

    return (
        <div className="projects">
            <div className="projects-list">
                {Object.values(projectData).map((project, index) => (
                    <div className="row project">
                        <div className="col col-md-3">
                            <div key={index} className="hover-this" onClick={() => setProjectShown(project.id)}
                                 onMouseEnter={() => setProjectDetails(project.id)}
                                 onMouseLeave={() => setProjectDetails(null)}
                                 id={`project-${project.title}`}>
                                <BurstDiv text={project.title}/>
                            </div>
                        </div>
                        <div className="col col-md-9">
                            {projectDetails === project.id &&
                                <>
                                    <p className="project-hook">{project.hook}</p>
                                    <div className="tags">
                                        {project.areas.map((tag) => (
                                            <span key={`${project}-${tag}`} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                ))}
                {projectShown &&
                    <ShownComponent handleClose={() => setProjectShown(null)}/>
                }
            </div>
        </div>
    )
};
