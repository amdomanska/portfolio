import {useEffect, useState} from "react";
import {projectData} from "./projects/projectpagemanager"
import {BurstDiv} from "../elements/burstDiv";

export const Projects = ({onModalStatusChange}) => {
    const [projectShown, setProjectShown] = useState(null);
    const [projectDetails, setProjectDetails] = useState(null);
    var ShownComponent = null;
    if (projectShown) {
        ShownComponent = projectData[projectShown].component;
    }

    const changeProjectStatus = (status, project_id) => {
        onModalStatusChange(status);
        status ? setProjectShown(project_id) : setProjectShown(null);
    }

    return (
        <div className="susection projects" id="projects">
            <div className="projects-list">
                {Object.values(projectData).map((project, index) => (
                    <div className="row project" key={`project-link--${project.id}`}>
                        <div className="col col-md-3">
                            <div key={index} className="hover-this" onClick={() => changeProjectStatus(true, project.id)}
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
                    <ShownComponent handleClose={() => changeProjectStatus(false, projectShown)}/>
                }
            </div>
        </div>
    )
};
