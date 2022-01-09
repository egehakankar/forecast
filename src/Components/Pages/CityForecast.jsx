import React from 'react'

import ForecastCard from './ForecastCard';

import ReactApexChart from 'react-apexcharts';

function CityForecast(props) {

    const [day, setDay] = React.useState(props.data[0])

    var minC = 100
    var maxC = -99
    for (let i = 0; i < props.data.length; i++) {
        if (props.data[i].app_max_temp > maxC) {
            maxC = props.data[i].app_max_temp;
        }
        if (props.data[i].app_min_temp < minC) {
            minC = props.data[i].app_min_temp;
        }
    }
    minC = minC - 10;
    maxC = maxC + 10;
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var dataHigh = [];
    var dataMin = [];
    var dataDays = []
    for (let a = 0; a < 10; a++) {
        dataHigh.push(props.data[a].app_max_temp);
        dataMin.push(props.data[a].app_min_temp);
        dataDays.push(props.data[a].datetime.substring(8, 10) + " " + months[parseInt(props.data[a].datetime.substring(5, 7))])
    }

    const series = [
        {
            name: "High",
            data: dataHigh
        },
        {
            name: "Low",
            data: dataMin
        }
    ]

    const options = {
        chart: {
            type: 'line',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
            toolbar: {
                show: false
            },
            events: {
                click(event, chartContext, config) {
                    var minHigh = []
                    minHigh.push(config.config.series[config.seriesIndex].name)
                    minHigh.push(config.config.series[config.seriesIndex].data[config.dataPointIndex])

                    changeDay(minHigh)
                }
            }
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'Average High & Low Temperature for ' + props.cityName,
            align: 'middle'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 1
        },
        xaxis: {
            categories: dataDays
        },
        yaxis: {
            title: {
                text: 'Temperature'
            },
            min: minC,
            max: maxC
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    }

    function changeDay(minHigh) {

        console.log(minHigh)
        if(minHigh[0] === "High"){
            for (var a = 0; a < 10; a++) {
                if (props.data[a].app_max_temp === minHigh[1]) {
                    setDay(props.data[a])
                    break
                }
            }
        }
        else {
            for (var counter = 0; counter < 10; counter++) {
                if (props.data[counter].app_min_temp === minHigh[1]) {
                    setDay(props.data[counter])
                    break
                }
            }
        }
    }


    return (
        <div>
            <div className="forecastCardGraph">
                <div className="forecastGraph">
                    <div className="forecastApexDiv"> 
                        <ReactApexChart className="forecastApex" options={options} series={series} type="line" height = '100%'/>
                    </div>
                </div>
                <ForecastCard cityName={props.cityName} day={day} />
            </div>

        </div>
    )
}

export default CityForecast;