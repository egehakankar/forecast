import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <CloudIcon style = {{paddingRight: "8px"}}/>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Forecast
                    </Typography>
                    <PersonOutlineIcon />
                </Toolbar>
            </AppBar>
        </Box>
    );
}