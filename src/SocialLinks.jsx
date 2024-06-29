export default function SocialLinks(){
    return (
        <>
            <ul className="footer__social_links">
                <li className="social_links__item">
                    <a className="link link-github" href="https://github.com/Reful4ent">
                        <img src="/public/Img/github.svg" className="link__icon-settings link__icon-settings-github"/>
                    </a>
                </li>
                <li className="social_links__item">
                    <a className="link link-telegram" href="https://t.me/Rfflgnt">
                        <img src="/public/Img/telegram.svg" className="link__icon-settings link__icon-settings-telegram"/>
                    </a>
                </li>
                <li className="social_links__item">
                    <a className="link link-vk" href="https://vk.com/discounterboy">
                        <img src="/public/Img/vk.svg" className="link__icon-settings link__icon-settings-vk"/>
                    </a>
                </li>
                <li className="social_links__item">
                    <a className="link link-gmail" href="mailto:dima2323fr3@gmail.com">
                        <img src="/public/Img/gmail.svg" className="link__icon-settings link__icon-settings-gmail"/>
                    </a>
                </li>
            </ul>
        </>
    )
}