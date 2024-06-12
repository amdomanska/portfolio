import React, {useState, useEffect} from "react";

const BubbleSet = ({bubbleCount}) => (
    <div className="bubbles">
        {Array.from({length: bubbleCount}).map((_, index) => {
            const angle = index * (Math.PI / (bubbleCount / 2));
            const distance = 60; // Radius of the central div in pixels
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            const finalDistance = 150; // Final distance for bubbles

            return (
                <div
                    key={index}
                    className="bubble"
                    style={{'--x-initial': `${x}px`, '--y-initial': `${y}px`, '--x-final': `${Math.cos(angle) * finalDistance}px`, '--y-final': `${Math.sin(angle) * finalDistance}px`}}
                ></div>
            );
        })}
    </div>
);



export const BurstDiv = ({text}) => {
    const [bubbleSets, setBubbleSets] = useState([]);

    const handleHover = () => {
        setBubbleSets(prev => [...prev, Date.now()]);
    };

    useEffect(() => {
        if (bubbleSets.length > 0) {
            const interval = setInterval(() => {
                setBubbleSets(prev => [...prev, Date.now()]);
            }, 1500); // Adjust this interval to control overlapping frequency
            return () => clearInterval(interval);
        }
    }, [bubbleSets.length]);

    useEffect(() => {
        if (bubbleSets.length > 0) {
            const timeout = setTimeout(() => {
                setBubbleSets([]);
            }, 7000); // Duration of the bubble animation + some buffer
            return () => clearTimeout(timeout);
        }
    }, [bubbleSets]);

    return (
        <div
            className="animated-container"
            onMouseEnter={handleHover}
            onMouseLeave={() => {
                setBubbleSets([]);
            }}
        >
            {bubbleSets.map(timestamp => (
                <BubbleSet key={timestamp} bubbleCount={12}/>
            ))}
            <div className="central-div--wrapper--dotted">
                <div className="central-div--wrapper">
                    <div className="central-div">{text}</div>
                </div>
            </div>
        </div>
    );
};
