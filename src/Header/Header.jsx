import { useState } from "react";
import "./Header.css";


export default function Header() {

    return (
        <div className="header-container">
        <div className="logo-place">
            <div>
                <h1 className="header-logo">WeatherMe</h1>
                <h5 className="header-time">21:00 pm</h5>
            </div>
            <img src="src/assets/logo-weather.png" alt="" />
        </div>
        </div>
        
    );
}
