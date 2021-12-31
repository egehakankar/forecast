import React from 'react'

import SearchOffIcon from '@mui/icons-material/SearchOff';

function NoValidCity() {
    return (
        <div className="noValidCity noAll">
            <div className="noValidCenter noAllCenter">
                <SearchOffIcon className="noSearchIcon" />
                <h1 className="noText">City Does Not Exist</h1>
                <h3 className="noText2">Search another city</h3>
            </div>
        </div>
    )
}

export default NoValidCity;