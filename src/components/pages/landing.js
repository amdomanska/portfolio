import {useRef, useEffect} from 'react';
import line from "../assets/line.svg";
import {LandingBg} from "../pages/landing-bg";

export const Landing = () => {
    const wrapperRef = useRef(null);
    const endRef = useRef(null);

    const handleScroll = () => {
        const contentRect = wrapperRef.current.getBoundingClientRect();
        const endRect = endRef.current.getBoundingClientRect();

        if (endRect.top >= contentRect.bottom || endRect.bottom <= contentRect.top) {
            console.log('End is not visible');
        }
    };

    useEffect(() => {
        const content = wrapperRef.current;
        content.addEventListener('scroll', handleScroll);
        return () => {
            content.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="section landing">
                <div className="wrapper" ref={wrapperRef}>
                    <div className="content">
                        <h1>Aga M. Domanska</h1>
                        <p className="role">
                            UI DESIGNER
                            <img src={line} className="line" alt="and"/>
                            FRONTEND DEVELOPER
                        </p>
                        <h3>I turn front-end expertise <br/> into captivating UI experiences</h3>
                        <div id="end" ref={endRef}></div>
                    </div>
                </div>
                <LandingBg/>
            </div>
        </>
    )
}