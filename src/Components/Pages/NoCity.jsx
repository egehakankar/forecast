import React from 'react'

import SearchIcon from '@mui/icons-material/Search';

function NoCity() {
    return (
        <div className="noCity noAll">
            <div className="noCenter noAllCenter">
                <SearchIcon className="searchIcon" />
                <h1 className="noTextEmpty">Search a new city</h1>
            </div>
        </div>
    )
}

export default NoCity;