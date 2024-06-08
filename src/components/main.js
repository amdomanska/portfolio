import {Landing} from "./pages/landing"
import {Skills} from "./pages/skills"
import {Projects} from "./pages/projects"
import {LandingBg} from "./elements/landing-bg";
import skillsBg from './assets/skills-bg.svg'; // Ensure the correct path to the background image
import {useEffect, useRef, useState} from "react";
import dot from "./assets/dot.svg";
import {colors} from "./elements/colors"
import {Logo} from "./elements/logo";
import {ContactSection} from "./elements/contactSection";
import {Cursor} from "./elements/cursor";

export const Main = () => {
    const [currentSection, setCurrentSection] = useState(null);
    const wrapperRef = useRef(null);
    const landingEndRef = useRef(null);
    const skillsEndRef = useRef(null);

    const determineSection = () => {
        const wrapper = wrapperRef.current;
        const landingEnd = landingEndRef.current;
        const skillsEnd = skillsEndRef.current;

        if (!wrapper) return;

        const wrapperRect = wrapper.getBoundingClientRect();
        const landingEndTop = landingEnd.getBoundingClientRect().top - wrapperRect.top + wrapper.scrollTop;
        const skillsEndTop = skillsEnd.getBoundingClientRect().top - wrapperRect.top + wrapper.scrollTop;

        const scrollPosition = wrapper.scrollTop;

        if (scrollPosition < landingEndTop) {
            setCurrentSection('landing');
        } else if (scrollPosition >= landingEndTop && scrollPosition < skillsEndTop) {
            setCurrentSection('skills');
        } else if (scrollPosition >= skillsEndTop) {
            setCurrentSection('projects');
        }
    };

    useEffect(() => {
        determineSection();
        const content = wrapperRef.current;
        content.addEventListener('scroll', determineSection);
        return () => {
            content.removeEventListener('scroll', determineSection);
        };
    }, []);

const getHeader = () => {
    let text = "";
    switch (currentSection) {
        case 'skills':
            text = "Things I do well";
            break;
        case 'projects':
            text = "Interesting projects I worked on";
            break;
        default:
            return "";
    }
    return (
        <span className={`header header-${currentSection}`}>
            <img src={dot} className="dot" alt=""/>
            <h4>{text}</h4>
        </span>
    );
};


    const getSectionStyles = () => {
        switch (currentSection) {
            case 'landing':
                return {
                    backgroundColor: colors.white,
                    position: 'relative',
                };
            case 'skills':
                return {
                    backgroundColor: colors.darkBlue,
                    backgroundImage: `url(${skillsBg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                };
            case 'projects':
                return {
                    backgroundColor: colors.white,
                };
            default:
                return {};
        }
    };

    return (
        <div className="section" style={getSectionStyles()}>
            <ContactSection currentSection={currentSection}/>
            <Logo currentSection={currentSection}/>
            { getHeader() }
            <div className="wrapper" ref={wrapperRef}>
                <div className="content">
                    <Landing/>
                    <div className="content-end" ref={landingEndRef}></div>
                    <Skills/>
                    <div className="content-end" ref={skillsEndRef}></div>
                    <Projects/>
                </div>
                <Cursor/>
            </div>
            {currentSection === 'landing' && <LandingBg/>}
        </div>
    )
}