export const ForeCastCard = ({date, data}) => {
    return(
        <div className="ForecastSlot">
            <article>
                <h3>{date}</h3>
            </article>
            <article>
                <h2>{data.condition.text}</h2>
                <img src={data.condition.icon} alt="" />
            </article>
            <article>
                <p>Max Temp: {data.maxtemp_c} C</p>
                <p>Min Temp: {data.mintemp_c} C</p>
            </article>
        </div>
    )
}