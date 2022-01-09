import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Header() {
    return (
        <div className="header">
            <div className="header_title">
                Weather Forecaster
            </div>
        </div>
    );
}