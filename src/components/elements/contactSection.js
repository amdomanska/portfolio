import React, {useState} from 'react';
import {colors} from "./colors";
import {Icon} from "./icon";

export const ContactSection = ({currentSection}) => {
    const [emailVisible, setEmailVisible] = useState(false);
    const [phoneVisible, setPhoneVisible] = useState(false);
    const [emailCopied, setEmailCopied] = useState(false);

    // The repo is private, I don't want my data to leak, hopefully that will help.
    const email_name = "amdomanska";
    const email_domain = "yahoo.com";
    const email_coded = email_name + "[at]" + email_domain;
    const email = email_name + "@" + email_domain;
    const countryCode = "+44";
    const phoneNumber_sec1 = "7541";
    const phoneNumber_sec2 = "751181"
    const phoneNumber = [countryCode, phoneNumber_sec1, phoneNumber_sec2].join(" ");

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            setEmailCopied(true);
            setTimeout(() => {
                setEmailCopied(false);
            }, 5000);
        });
    };

    return (
        <div className="contact-section">
            <div className="contact-item hover-this">
                <a href="https://www.linkedin.com/in/amdomanska" target="_blank" title="LinkedIn account link"
                   className="contact-link">
                    <Icon type={"linkedIn"} currentSection={currentSection}/>
                </a>
            </div>
            <div className="contact-item hover-this">
                <Icon type={"email"} handleClick = {() => setEmailVisible(!emailVisible)} currentSection={currentSection}/>
                {emailVisible && (
                    <div className="contact-detail hover-this">
                        <span>{emailCopied ? 'Email address copied to your clipboard' : email_coded}</span>
                        <Icon type={"copy"} handleClick={copyToClipboard} currentSection={currentSection}/>
                    </div>
                )}
            </div>
            <div className="contact-item hover-this">
               <Icon type={"phone"} handleClick={() => setPhoneVisible(!phoneVisible)} currentSection={currentSection}/>
                {phoneVisible && (
                    <div className="contact-detail">
                        <span>{phoneNumber}</span>
                    </div>
                )}
            </div>
        </div>
    );
};