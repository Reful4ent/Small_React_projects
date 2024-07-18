import {useRouteError} from "react-router-dom";
import "./ErrorPage.css"

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <>
            <div className="error-page">
                <h1 className="error-text-head">Oops!</h1>
                <p className="error-text-main">Sorry, an unexpected error has occurred.</p>
                <p className="error-text-error">
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </>
    )
}