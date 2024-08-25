import "./Footer.scss"
import {MailSVG} from "../../shared/ui/SVGComponents/SocialSvg/MailSVG.jsx";
import {VkSVG} from "../../shared/ui/SVGComponents/SocialSvg/VkSVG.jsx";
import {TelegramSVG} from "../../shared/ui/SVGComponents/SocialSvg/TelegramSVG.jsx";
import {GithubSVG} from "../../shared/ui/SVGComponents/SocialSvg/GithubSVG.jsx";
import {SocialLinks} from "../../entities/SocialLinks/SocialLinks.jsx";

export const Footer = () => {
    return(
        <>
            <footer className="footer">
                <div className="footer-info-container">
                    <a className="footer-link">Terms</a>
                    <a className="footer-link">Privacy Policy</a>
                    <a className="footer-link">Security</a>
                    <a className="footer-link">Status</a>
                    <a className="footer-link">Docs</a>
                    <a className="footer-link">Contacts</a>
                </div>
                <div className="footer-socials">
                    <p className="footer-socials__text">&copy; 2024 RShop Inc.<br/> Made by Reful4ent</p>
                    <SocialLinks/>
                </div>
            </footer>
        </>
    )
}