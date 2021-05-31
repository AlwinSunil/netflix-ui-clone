import React from 'react';
import './LoadingAnimation.scss';

function LoadingAnimation() {
    return (
        <div className="loader">
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
            <p>please wait</p>
        </div>
    )
}

export default LoadingAnimation
