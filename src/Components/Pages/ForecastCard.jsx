import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ForecastCard(props) {
    return (
        <Card variant="outlined" className="forrestCard" sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography className="fDesc" variant="h6" color="#1976d2" gutterBottom>
                    {props.day.weather.description}
                </Typography>
                <Typography className="fCityName" variant="h5" component="div">
                    {props.cityName}
                </Typography>
                <Typography className="fTemp" sx={{ mb: 1 }} color="text.secondary">
                    {props.day.temp}°C
                </Typography>
                <Typography className="fDate" variant="body2">
                    {props.day.valid_date}
                </Typography>
            </CardContent>
        </Card>
    );
}