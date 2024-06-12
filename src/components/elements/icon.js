import {useState} from 'react';
import {colors} from "./colors";
import {CopyIcon, EmailIcon, PhoneIcon, LinkedInIcon} from "./iconsSvgs";


const iconComponents = {
    "copy": CopyIcon,
    "email": EmailIcon,
    "phone": PhoneIcon,
    "linkedIn": LinkedInIcon
};

export const Icon = ({type, currentSection, handleClick = null}) => {
    const [hovered, setHovered] = useState(false);

    const determineColor = () => {
        let defaultColor;
        switch (currentSection) {
            case 'skills':
                defaultColor = colors.white;
                break;
            default:
                defaultColor = colors.black;
                break;
        }

        if (hovered) {
            return defaultColor === colors.black ? colors.white : colors.black;
        }
        return defaultColor;
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };


    const IconComponent = iconComponents[type];
    return IconComponent ? (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="icon-container">
            <IconComponent stroke={determineColor()} handleClick={handleClick}/>
        </div>
    ) : null;
}