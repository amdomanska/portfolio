import React, {useState} from 'react';
import linkedinIcon from '../assets/linkedin.svg';
import emailIcon from '../assets/mail.svg';
import copyIcon from '../assets/copy.svg';
import phoneIcon from '../assets/phone.svg';

export const ContactSection = () => {
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
            <div className="contact-item">
                <a href="https://www.linkedin.com/in/amdomanska" target="_blank" title="LinkedIn account link"
                   className="contact-link">
                    <img src={linkedinIcon} alt="LinkedIn icon" className="contact-icon"/>
                </a>
            </div>
            <div className="contact-item">
                <img
                    src={emailIcon}
                    aria-label="click to see my email account"
                    className="contact-icon"
                    onClick={() => setEmailVisible(!emailVisible)}
                />
                {emailVisible && (
                    <div className="contact-detail">
                        <span>{emailCopied ? 'Email address copied to your clipboard' : email_coded}</span>
                        <img
                            src={copyIcon}
                            title="copy my email account"
                            className="copy-icon"
                            onClick={copyToClipboard}
                        />
                    </div>
                )}
            </div>
            <div className="contact-item">
                <img
                    src={phoneIcon}
                    title="show my phone number"
                    className="contact-icon"
                    onClick={() => setPhoneVisible(!phoneVisible)}
                />
                {phoneVisible && (
                    <div className="contact-detail">
                        <span>{phoneNumber}</span>
                    </div>
                )}
            </div>
        </div>
    );
};