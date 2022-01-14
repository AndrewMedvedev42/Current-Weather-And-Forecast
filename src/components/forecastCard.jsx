export const ForeCastCard = ({date, data, weatherByHours}) => {
    return(
        <article className="forecast-slot">
            <article>
                <h2 className="forecast-date">{date}</h2>
            </article>
            <section className="forecast-schedule-list">
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
        </article>
    )
}

const ForecastDetails = ({data,time}) =>{
    return(
        <div className="forecast-details">
            <img className="icon" src={data.condition.icon} alt="" />
            <p className="forecast-time">{time}</p>
        </div>
    )
}