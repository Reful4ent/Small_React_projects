
import "./AboutPage.scss"
import {ViteSVG} from "../../shared/ui/SVGComponents/UsingSvg/ViteSVG.jsx";
import {ReactSVG} from "../../shared/ui/SVGComponents/UsingSvg/ReactSVG.jsx";
import {ReactRouterSVG} from "../../shared/ui/SVGComponents/UsingSvg/ReactRouterSVG.jsx";
import {StrapiSVG} from "../../shared/ui/SVGComponents/UsingSvg/StrapiSVG.jsx";

export const AboutPage = () => {
    return (
        <>
            <div className="about-main">
                <h2 className="about-main__h">About Developer</h2>
                <p className="about-main__p">
                    Hello there! I'm Rfflgnt, the passionate developer behind this website. I set out to create a unique and user-friendly online shopping platform.
                </p>
                <h2 className="about-main__h">Frameworks and Technologies Used</h2>
                <p  className="about-main__p">
                    In the development of this website, I've harnessed the power of the following frameworks and technologies to create a modern, single-page application (SPA):
                </p>
                <div className="frameworks-icons">
                    <div className="frameworks-icons__icon">
                        <ViteSVG/>
                    </div>
                    <div className="frameworks-icons__icon">
                        <ReactSVG/>
                    </div>
                    <div className="frameworks-icons__icon">
                        <ReactRouterSVG/>
                    </div>
                </div>
                <h2 className="about-main__h"> A Glimpse into the Backend:</h2>
                <p className="about-main__p">
                    While my expertise primarily lies in frontend development, I've integrated StrapiAPI on the backend to ensure a robust and efficient server-side infrastructure. This combination allows for smooth communication between the frontend and the server, ensuring a seamless user experience.
                </p>
                <div className="backend-icons">
                    <div className="backend-icons__icon">
                        <StrapiSVG/>
                    </div>
                </div>
                <h2 className="about-main__h">Let's Connect!</h2>
                <p className="about-main__p">All contact links can be found below!</p>
            </div>
        </>
    )
}