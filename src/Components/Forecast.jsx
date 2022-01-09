import React from 'react'

import CityForecast from './Pages/CityForecast';
import NoCity from './Pages/NoCity';
import Loading from './Pages/Loading';
import NoValidCity from './Pages/NoValidCity';

import '../CSS/Pages.css'

function Forecast(props) {
    if (props.weathers === "Loading") {
        return (
            <Loading />
        )
    }
    else if (props.weathers !== undefined) {
        if (props.weathers.data !== undefined) {
            return (
                <CityForecast data={props.weathers.data} cityName = {props.weathers.city_name}/>
            )
        }
        else if (props.weathers === "Empty") {
            return (
                <NoCity />
            )
        }
        else {
            return (
                <NoValidCity />
            )
        }
    }
}

export default Forecast;