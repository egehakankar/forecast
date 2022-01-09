import React from 'react'
import SearchIcon2 from '../Icons/search.png'
import axios from 'axios';

import '../CSS/Main.css';

import Forecast from './Forecast.jsx';

function Main() {

    return (
        <div className="main">
            <SearchField />
        </div>
    );
}

function SearchField() {

    const [city, setCity] = React.useState("");
    const [forecast, setForecast] = React.useState("Empty")

    const searchCity = async (e) => {
        e.preventDefault();

        setForecast("Loading")

        if(city !==  "") {
            axios.get('https://api.weatherbit.io/v2.0/forecast/daily?days=10&city=' + city + '&key=45c5f065858f4f37ad2e46acbcf335f5')
            .then(response => {
                setForecast(response.data)
            }).catch(error => {
                console.error('There was an error!', error);
            });
        }
        else {
            setForecast("Empty")
        }

        
    }
    return (
        <div>
            <div className="searchBox">
                <form className="form" onSubmit={searchCity}>
                    <input className="inpText" type="text" name="name" placeholder="Search City" onChange={(e) => {
                        setCity(e.target.value);
                    }} />
                    <input type = "image" src = {SearchIcon2} className="sIcon" alt = "searchIcon"/>
                </form>
            </div>
            <Forecast className="forecast" weathers={forecast} />
        </div>
    );
}

export default Main;
