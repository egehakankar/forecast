import React from 'react'

function NoValidCity() {
    return (
        <div className="noValidCity noAll">
            <div className="noValidCenter noAllCenter">
                <div className="noTitle noValidTitle">City doesn’t exist!</div>
                <div className="noParagraph">Type a valid city name to get weekly forecast data</div>
            </div>
        </div>
    )
}

export default NoValidCity;