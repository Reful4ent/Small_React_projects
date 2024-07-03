
const socialLinks = [
    {
        a_classname: "link link-github",
        a_href: "https://github.com/Reful4ent",
        img_src: "/public/Img/github.svg",
        img_classname: "link__icon-settings link__icon-settings-github",
    },
    {
        a_classname: "link link-telegram",
        a_href: "https://t.me/Rfflgnt",
        img_src: "/public/Img/telegram.svg",
        img_classname: "link__icon-settings link__icon-settings-telegram",
    },
    {
        a_classname: "link link-vk",
        a_href: "https://vk.com/discounterboy",
        img_src: "/public/Img/vk.svg",
        img_classname: "link__icon-settings link__icon-settings-vk",
    },
    {
        a_classname: "link link-gmail",
        a_href: "mailto:dima2323fr3@gmail.com",
        img_src: "/public/Img/gmail.svg",
        img_classname: "link__icon-settings link__icon-settings-gmail",
    },
];


export default function SocialLinks(){
    return (
        <>
            <ul className="footer__social_links">
                {socialLinks.map((item, index) => (
                    <li key={index} className="social_links__item">
                        <a className={item.a_classname} target="_blank" href={item.a_href}>
                            <img src={item.img_src} className={item.img_classname}/>
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}