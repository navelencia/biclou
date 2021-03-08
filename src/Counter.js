import React from 'react';
import './Counter.scss';

import { IconContext } from "react-icons";
import { MdDirectionsBike } from "react-icons/md";
import { BsArrowUpRight, BsArrowDownRight, BsStopwatch } from "react-icons/bs";

function secondsToHHMM(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let strHours = hours < 10 ? `0${hours}` :  `${hours}`
    let strMinutes = minutes < 10 ? `0${minutes}` :  `${minutes}`

    return (
        <React.Fragment>
            <span className="number">{ strHours }</span>
            <span className="unit">h</span>
            <span className="number">{ strMinutes }</span>
            <span className="unit">m</span>
        </React.Fragment>
    )
}

function Counter ({ icon, number, unit, color }) {
    let Number;

    switch (unit) {
        case 'time': {
            Number = secondsToHHMM(number);
            break;
        }
        case 'km': {
            Number = (
                <React.Fragment>
                    <span className="number">{ number }</span>
                    <span className="unit"> km</span>
                </React.Fragment>
            );
            break;
        }
        case 'm': {
            Number = (
                <React.Fragment>
                    <span className={`number ${color}`}>{ number }</span>
                    <span className="unit"> m</span>
                </React.Fragment>
            );            
            break;
        }
        default: {
            Number = null;
            break;
        }
    }

    let Icon;

    switch (icon) {
        case 'bike': {
            Icon = (
                <MdDirectionsBike/>
            );
            break;
        }
        case 'up': {
            Icon = (
                <BsArrowUpRight/>
            );            
            break;
        }
        case 'down': {
            Icon = (
                <BsArrowDownRight/>
            ); 
            break;
        }
        case 'time': {
            Icon = (
                <BsStopwatch/>
            ); 
            break;
        }
        default: {
            Icon = null;
            break;
        }
    }

    return (
        <div className="counter">
            <IconContext.Provider value={{ className: "icon" }}>
                { Icon }
            </IconContext.Provider>
            { Number }
        </div>
    )
}

export default Counter;