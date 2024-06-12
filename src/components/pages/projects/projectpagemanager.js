import {Doaj} from "./doaj";
import {Cl} from "./cl";
import {Tase} from "./tase";
import {Materiom} from "./materiom";
import {MDR} from "./mdr";

export const projectData = {
    "doaj": {
        id: "doaj",
        title: "Directory of Open Access Journal",
        tags: ["bootstrap", "jquery", "figma", "python"],
        areas: ["frontend development", "backend development", "ui/ux design"],
        component: Doaj,
        hook: "Enhancing global access to open-access journals with a sleek, intuitive interface."
    },
    "tase": {
        id: "tase",
        title: "TASE",
        tags: ["React.js", "d3.js", "figma"],
        areas: ["frontend development", "ui/ux design", "data visualisations"],
        component: Tase,
        hook: "Transforming internal data management with dynamic visualisation and real-time insights."
    },
    "cl": {
        id: "cl",
        title: "Cottage Labs",
        tags: ["figma", "ssg", "sass"],
        areas: ["visual identity", "web design", "web development"],
        component: Cl,
        hook: "Creating a professional, engaging website with modern design and seamless accessibility."
    },
    "materiom": {
        id: "materiom",
        title: "Materiom Commons",
        tags: ["figma", "javascript", "sass"],
        areas: ["frontend development", "ui/ux design", "accessibility"],
        component: Materiom,
        hook: "Revolutionising materials science research with an innovative, user-friendly interface."
    },
    "mdr": {
        id: "mdr",
        title: "MDR Closed",
        tags: ["figma"],
        areas: ["user experience"],
        component: MDR,
        hook: "Streamlining materials science data management with a powerful, user-centric platform."
    }
};