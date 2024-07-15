import "./CitiesList.css"

export default function CitiesList({cityList,fetchData}) {
    return (
        <>
            <ul className="cities-list">
                {cityList.map((item,index) => (
                    <li key={index} className="cities-list__item" onDoubleClick={() => fetchData(item.city,item.country,item.state)}>
                        {item.city}, {item.country}, {item.state}
                    </li>
                ))}
            </ul>
        </>
    )
}