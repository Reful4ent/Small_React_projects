import {GithubSVG} from "../../shared/ui/SVGComponents/SocialSvg/GithubSVG.jsx";
import {TelegramSVG} from "../../shared/ui/SVGComponents/SocialSvg/TelegramSVG.jsx";
import {VkSVG} from "../../shared/ui/SVGComponents/SocialSvg/VkSVG.jsx";
import {MailSVG} from "../../shared/ui/SVGComponents/SocialSvg/MailSVG.jsx";
import "./SocialLinks.scss"

export const SocialLinks = () => {
    //Порядок ссылко должен совпадать с порядком свг
    const socialLinks = [
        "https://github.com/Reful4ent",
        "https://t.me/Rfflgnt",
        "https://vk.com/discounterboy",
        "mailto:dima2323fr3@gmail.com",
    ]
    const svgSocialLinks = [
        <GithubSVG/>,
        <TelegramSVG/>,
        <VkSVG/>,
        <MailSVG/>,
    ]


    return(
        <>
            <ul className="social-links-list">
                {socialLinks.map((socialLink, index) => (
                    <li key={index} className="social-link__item">
                        <a className="social-link__link" href={socialLink} target="_blank" rel="noopener noreferrer">
                            {svgSocialLinks[index]}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}