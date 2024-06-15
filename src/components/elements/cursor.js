import {useEffect, useState} from "react";

export const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const updateCursor = (e) => {
            setCursorPosition({x: e.clientX, y: e.clientY});
        };

        const handleMouseEnter = (e) => {
            console.log(e.target);
            if (e.target.classList.contains('hover-this')) {
                setIsHovered(true);
            }
        };

        const handleMouseLeave = (e) => {
            if (e.target.classList.contains('hover-this')) {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', updateCursor);
        document.addEventListener('mouseenter', handleMouseEnter, true);
        document.addEventListener('mouseleave', handleMouseLeave, true);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            document.removeEventListener('mouseenter', handleMouseEnter, true);
            document.removeEventListener('mouseleave', handleMouseLeave, true);
        };
    }, []);

    const cursorStyle = {
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        transform: isHovered ? 'translate(-50%, -50%) scale(8)' : 'translate(-50%, -50%) scale(1)',
    };

    return <div className="cursor" style={cursorStyle}></div>
}