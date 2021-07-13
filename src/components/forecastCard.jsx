import styled from "styled-components"

export const ForeCastCard = ({date, data, weatherByHours}) => {
    return(
        <ForecastSlot className="ForecastSlot">
            <div>
                <article>
                    <h3>{date}</h3>
                </article>
                {/* <article>
                    <h2>{data.condition.text}</h2>
                    <img id="icon" src={data.condition.icon} alt="" />
                </article>
                <article>
                    <p>Max Temp: {data.maxtemp_c} C</p>
                    <p>Min Temp: {data.mintemp_c} C</p>
                </article> */}
            </div>
            <section className="DetailedForecast">
                {weatherByHours.map((item)=>{
                    const timeInHours = item.time.slice(11)

                    if(timeInHours === "09:00"){
                        return <ForecastDetails data={item} time={timeInHours}/>
                    }else if(timeInHours === "12:00"){
                        return <ForecastDetails data={item} time={timeInHours}/>
                    }else if(timeInHours === "15:00"){
                        return <ForecastDetails data={item} time={timeInHours}/>
                    }else if(timeInHours === "18:00"){
                        return <ForecastDetails data={item} time={timeInHours}/>
                    }else if(timeInHours === "21:00"){
                        return <ForecastDetails data={item} time={timeInHours}/>
                    }else if(timeInHours === "23:00"){
                        return <ForecastDetails data={item} time={timeInHours}/>
                    }else if(timeInHours === "00:00"){
                        return <ForecastDetails data={item} time={timeInHours}/>
                    }else if(timeInHours === "03:00"){
                        return <ForecastDetails data={item} time={timeInHours}/>
                    }else if(timeInHours === "06:00"){
                        return <ForecastDetails data={item} time={timeInHours}/>
                    }
                })}
            </section>
        </ForecastSlot>
    )
}

const ForecastDetails = ({data,time}) =>{
    return(
        <div className="detailContainer">
            <img className="forecastIcon" src={data.condition.icon} alt="" />
            <p className="forecastDetail">{time}</p>
            {/* <p className="forecastDetail">{data.condition.text}</p> */}
        </div>
    )
}

const ForecastSlot = styled.div`
    margin: 1rem;
    padding: 1rem;
`