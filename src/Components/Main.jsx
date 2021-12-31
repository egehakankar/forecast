import React from 'react'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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
    const [forecast, setForecast] = React.useState()

    const dropdownChange = (event) => {
        setCity(event.target.value);
    };

    const searchCity = async (e) => {
        e.preventDefault();

        setForecast("Loading")

        axios.get('https://api.weatherbit.io/v2.0/forecast/daily?days=7&city=' + city + '&key=45c5f065858f4f37ad2e46acbcf335f5')
            .then(response => {
                setForecast(response.data)
            }).catch(error => {
                console.error('There was an error!', error);
            });
    }
    return (
        <div>
            <div className="searchBox">
                <form className="form" onSubmit={searchCity}>
                    <TextField className="inpText" id="filled-basic" label="City" variant="filled" value={city} onChange={(e) => {
                        setCity(e.target.value);
                    }} />
                    <SearchIcon className="sIcon" />

                    <FormControl variant="standard" sx={{ m: 1, width: 150, maxWidth: "25vw" }}>
                        <InputLabel id="demo-simple-select-label">Popular Cities</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={city}
                            label="City"
                            onChange={dropdownChange}
                        >
                            <MenuItem value={"Istanbul"}>Istanbul</MenuItem>
                            <MenuItem value={"Ankara"}>Ankara</MenuItem>
                            <MenuItem value={"İzmir"}>İzmir</MenuItem>
                            <MenuItem value={"Berlin"}>Berlin</MenuItem>
                            <MenuItem value={"New York"}>New York</MenuItem>
                            <MenuItem value={"London"}>London</MenuItem>
                            <MenuItem value={"Madrid"}>Madrid</MenuItem>
                            <MenuItem style = {{display: "none"}} value={city}>{city}</MenuItem>
                        </Select>
                    </FormControl>
                    <Button className="searchButton" type="submit" variant="contained">
                        Search
                    </Button>
                </form>
            </div>
            <Forecast className="forecast" weathers={forecast} />
        </div>
    );
}

export default Main;
