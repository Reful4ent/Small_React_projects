import {useRouteError} from "react-router-dom";


export default function ErrorPage(){
    const error = useRouteError();
    console.log(error);

    return (
        <>
            <div className="error-page">
                <h1>Oops!</h1>
            </div>
        </>
    )
}