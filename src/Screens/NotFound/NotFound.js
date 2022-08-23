import React from 'react'
import './NotFound.css'

export default function NotFound() {
    return (
        <div className="error_Page" style={{ backgroundImage: `url(Icon/ErrorBackground.png)` }}>
            <div className="error_Page__Detail">
                <p className="error_Page__Number">404</p>
                <p className="error_Page__Info">Oops, you still haven't
                    found what you looking for?</p>
                <p className="error_Page__Title">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            </div>
            <div className="error_Page__Btn">
                <button type="button"><img src="/Icon/IconBack.png" alt="..." /></button>
                <p>Back to Home Page</p>
            </div>
        </div>
    )
}
