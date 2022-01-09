import * as React from 'react';


export default function ForecastCard(props) {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var day = props.day.valid_date.substring(8, 10) + " " + months[parseInt(props.day.valid_date.substring(5, 7))]

    console.log(props.day.weather.icon)
    return (
        <div className="forrestCard">
            <div className="forrestCard_inside">
                <div className="fTemp">
                    {props.day.temp}°C
                </div>
                <div className="fCityName">
                    {props.cityName}
                </div>
                <div className="fDate">
                    {day}
                </div>
                <div className="fDesc">
                    <img className="descIcon" src={"/icons/" + props.day.weather.icon + ".png"} alt = "descIcon"/>
                    <div className="descTitle">
                        {props.day.weather.description}
                    </div>
                </div>
            </div>
        </div>
    );
}