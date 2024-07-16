import "./SearchCitiesList.css"

export default function SearchCitiesList({cityList,fetchData}) {
    return (
        <>
            <ul className="cities-list">
                {cityList.map((item,index) => (
                    <li key={index} className="cities-list__item" onDoubleClick={() => fetchData(item.city,item.state,item.country)}>
                        {item.city}, {item.country}, {item.state}
                    </li>
                ))}
            </ul>
        </>
    )
}