import {Doaj} from "./doaj";
import {Cl} from "./cl";
import {Tase} from "./tase";
import {Materiom} from "./materiom";
import {MDR} from "./mdr";

export const projectData = {
    "doaj": {id: "doaj", title: "DOAJ", tags: ["bootstrap", "jquery", "figma", "python"], component: Doaj},
    "tase": {id: "tase", title: "TASE", tags: ["React.js", "d3.js", "figma"], component: Tase},
    "cl": {id: "cl", title: "Cottage Labs", tags: ["figma", "ssg", "sass"], component: Cl},
    "materiom": {id: "materiom", title: "Materiom Commons", tags: ["figma", "javascript", "sass"], component: Materiom},
    "mdr": {id: "mdr", title: "MDR Closed", tags: ["figma"], component: MDR}
};