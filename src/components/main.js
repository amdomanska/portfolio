import {Landing} from "./pages/landing"
import {Skills} from "./pages/skills"
import {Projects} from "./pages/projects"
import logo from "./assets/logo.svg";


export const Main = () => {
    console.log(window.scrollY)
    return (
        <>
            <img src={logo} className="logo" alt="AMD logo"/>
            <Landing/>
            <Skills/>
            <Projects/>
        </>
    )
}