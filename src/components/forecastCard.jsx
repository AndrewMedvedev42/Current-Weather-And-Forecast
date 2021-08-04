import styled from "styled-components"

export const ForeCastCard = ({date, data, weatherByHours}) => {
    return(
        <ForecastSlot className="DailyForecastSlot">
            <div>
                <article>
                    <h2 className="ForecastDate">{date}</h2>
                </article>
            </div>
            <section className="ForecastDetails">
                {weatherByHours.map((item)=>{
                    const timeInHours = item.time.slice(11)

                    if(timeInHours === "09:00"){
                        return <ForecastDetails key={timeInHours} data={item} time={timeInHours}/>
                    }else if(timeInHours === "12:00"){
                        return <ForecastDetails key={timeInHours} data={item} time={timeInHours}/>
                    }else if(timeInHours === "15:00"){
                        return <ForecastDetails key={timeInHours} data={item} time={timeInHours}/>
                    }else if(timeInHours === "18:00"){
                        return <ForecastDetails key={timeInHours} data={item} time={timeInHours}/>
                    }else if(timeInHours === "21:00"){
                        return <ForecastDetails key={timeInHours} data={item} time={timeInHours}/>
                    }else if(timeInHours === "23:00"){
                        return <ForecastDetails key={timeInHours} data={item} time={timeInHours}/>
                    }else if(timeInHours === "00:00"){
                        return <ForecastDetails key={timeInHours} data={item} time={timeInHours}/>
                    }else if(timeInHours === "03:00"){
                        return <ForecastDetails key={timeInHours} data={item} time={timeInHours}/>
                    }else if(timeInHours === "06:00"){
                        return <ForecastDetails key={timeInHours} data={item} time={timeInHours}/>
                    }
                })}
            </section>
        </ForecastSlot>
    )
}

const ForecastDetails = ({data,time}) =>{
    return(
        <div className="Details">
            <img className="Icon" src={data.condition.icon} alt="" />
            <p className="Detail">{time}</p>
            {/* <p className="forecastDetail">{data.condition.text}</p> */}
        </div>
    )
}

const ForecastSlot = styled.div`
    margin: 1rem;
    padding: 1rem;
`