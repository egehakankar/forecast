import React from 'react'

function Loading() {
    return (
        <div className="loading">
            <div className="load-container">
                <div className="lds-hourglass"></div>
                <div className="loading-text">Searching...</div>
            </div>
        </div>
    )
}

export default Loading;