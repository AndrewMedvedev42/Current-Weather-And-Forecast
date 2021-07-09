export const ForeCastCard = ({date, data}) => {
    return(
        <div>
            <article>
                <h1>{date}</h1>
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