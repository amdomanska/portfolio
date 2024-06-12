import React, {useState} from 'react';
import {Icon} from "./icon";
import {email, email_coded, phoneNumber} from "./contactDetails";

export const ContactSection = ({currentSection}) => {
    const [emailVisible, setEmailVisible] = useState(false);
    const [phoneVisible, setPhoneVisible] = useState(false);
    const [emailCopied, setEmailCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            setEmailCopied(true);
            setTimeout(() => {
                setEmailCopied(false);
            }, 5000);
        });
    };

    const switchContactView = (visibleSection) => {
        switch (visibleSection) {
            case 'phone':
                setPhoneVisible(prevState => !phoneVisible);
                setEmailVisible(false);
                break;
            case 'email':
                setPhoneVisible(false);
                setEmailVisible(prevState => !emailVisible);
                break;
            default:
                setPhoneVisible(false);
                setEmailVisible(false);
        }
    }

    return (
        <div className="contact-section">
            <div className="contact-item hover-this">
                <a href="https://www.linkedin.com/in/amdomanska" target="_blank" rel="noreferrer" title="LinkedIn account link"
                   className="contact-link">
                    <Icon type={"linkedIn"} currentSection={currentSection}/>
                </a>
            </div>
            <div className="contact-item hover-this">
                <Icon type={"email"} handleClick = {() => switchContactView("email")} currentSection={currentSection}/>
                {emailVisible && (
                    <div className="contact-detail hover-this">
                        <span>{emailCopied ? 'Email address copied to your clipboard' : email_coded}</span>
                        <Icon type={"copy"} handleClick={copyToClipboard} currentSection={currentSection}/>
                    </div>
                )}
            </div>
            <div className="contact-item hover-this">
               <Icon type={"phone"} handleClick={() => switchContactView("phone")} currentSection={currentSection}/>
                {phoneVisible && (
                    <div className="contact-detail">
                        <span>{phoneNumber}</span>
                    </div>
                )}
            </div>
        </div>
    );
};