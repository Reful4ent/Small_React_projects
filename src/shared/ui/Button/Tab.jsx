
import "./Tab.css"


export default function Tab({text,onClick}){
    return (
        <>
            <div className="tab" onClick={onClick}>{text}</div>
        </>
    )
}