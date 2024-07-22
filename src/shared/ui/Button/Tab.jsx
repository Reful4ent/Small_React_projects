import "./Tab.css"
import "/src/app/styles.css"

export default function Tab({id, text, onClick}) {
    return (
        <>
            <div id={id} className="tab" onClick={onClick}>{text}</div>
        </>
    )
}