import React from 'react'

import ForecastCard from './ForecastCard';

import { ResponsiveLine } from '@nivo/line'

function CityForecast(props) {

    const [day, setDay] = React.useState(props.data[0])

    var minC = 100
    var maxC = -99
    for (let i = 0; i < props.data.length; i++) {
        if(props.data[i].app_max_temp > maxC) {
            maxC = props.data[i].app_max_temp;
        }
        if(props.data[i].app_min_temp < minC) {
            minC = props.data[i].app_min_temp;
        }
    }
    minC = minC - 10;
    maxC = maxC + 10;


    const data = [
        {
            "id": "Highest Temp",
            "color": "red",
            "data": [
                {
                    "x": props.data[0].datetime,
                    "y": props.data[0].app_max_temp
                },
                {
                    "x": props.data[1].datetime,
                    "y": props.data[1].app_max_temp
                },
                {
                    "x": props.data[2].datetime,
                    "y": props.data[2].app_max_temp
                },
                {
                    "x": props.data[3].datetime,
                    "y": props.data[3].app_max_temp
                },
                {
                    "x": props.data[4].datetime,
                    "y": props.data[4].app_max_temp
                },
                {
                    "x": props.data[5].datetime,
                    "y": props.data[5].app_max_temp
                },
                {
                    "x": props.data[6].datetime,
                    "y": props.data[6].app_max_temp
                }
            ]
        },
        {
            "id": "Lowest Temp",
            "color": "blue",
            "data": [
                {
                    "x": props.data[0].datetime,
                    "y": props.data[0].app_min_temp
                },
                {
                    "x": props.data[1].datetime,
                    "y": props.data[1].app_min_temp
                },
                {
                    "x": props.data[2].datetime,
                    "y": props.data[2].app_min_temp
                },
                {
                    "x": props.data[3].datetime,
                    "y": props.data[3].app_min_temp
                },
                {
                    "x": props.data[4].datetime,
                    "y": props.data[4].app_min_temp
                },
                {
                    "x": props.data[5].datetime,
                    "y": props.data[5].app_min_temp
                },
                {
                    "x": props.data[6].datetime,
                    "y": props.data[6].app_min_temp
                }
            ]
        }
    ];

    const MyResponsiveLine = () => {
        return (
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 40, bottom: 80, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: minC, max: maxC, stacked: false, reverse: false }}
                curve="cardinal"
                colors={{ scheme: 'set1' }}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Date',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Temperature',
                    legendOffset: -40,
                    legendPosition: 'middle',
                    stacked: false
                }}
                pointSize={12}
                enableGridX={false}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={3}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                lineWidth={3}
                onClick={(data) => {
                    changeDay(data.data);
                }}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 1,
                        translateY: 70,
                        itemsSpacing: 50,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1 
                                }
                            }
                        ]
                    }
                ]}
            />
        )
    }

    function changeDay(day) {
        for(var a = 0; a < 7; a++) {
            if(props.data[a].datetime === day.x) {
                setDay(props.data[a])
            }
        }
    }


    return (
        <div>
            <div className="forecastCardGraph">
                <ForecastCard cityName = {props.cityName} day = {day}/>
                <div className="forecastGraph">
                    <MyResponsiveLine className="graph" />
                </div>
            </div>

        </div>
    )
}

export default CityForecast;