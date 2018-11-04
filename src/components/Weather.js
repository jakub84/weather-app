import React from 'react'
import temperature from '../assets/SVG/Asset 36.svg'
import weatherIcon from '../assets/SVG/Asset 11.svg'
import ic01d from '../assets/SVG/01d.svg'
import ic01n from '../assets/SVG/01n.svg'
import ic02d from '../assets/SVG/02d.svg'
import ic02n from '../assets/SVG/02n.svg'
import ic03d from '../assets/SVG/03d.svg'
import ic03n from '../assets/SVG/03n.svg'
import ic04d from '../assets/SVG/04d.svg'
import ic04n from '../assets/SVG/04n.svg'
import ic09d from '../assets/SVG/09d.svg'
import ic09n from '../assets/SVG/09n.svg'
import ic10d from '../assets/SVG/10d.svg'
import ic10n from '../assets/SVG/10n.svg'
import ic11d from '../assets/SVG/11d.svg'
import ic11n from '../assets/SVG/11n.svg'
import ic13d from '../assets/SVG/13d.svg'
import ic13n from '../assets/SVG/13n.svg'
import ic50d from '../assets/SVG/50d.svg'
import ic50n from '../assets/SVG/50n.svg'

const Weather = (props) => {
    let icon;    
    console.log(props.icon)
        if (props.icon === 'ic01n') icon = ic01n
        if (props.icon === 'ic02n') icon = ic02n
        if (props.icon === 'ic03n') icon = ic03n
        if (props.icon === 'ic04n') icon = ic04n
        if (props.icon === 'ic09n') icon = ic09n
        if (props.icon === 'ic10n') icon = ic10n
        if (props.icon === 'ic11n') icon = ic11n
        if (props.icon === 'ic13n') icon = ic13n
        if (props.icon === 'ic050n') icon = ic50n
        if (props.icon === 'ic01d') icon = ic01d
        if (props.icon === 'ic02d') icon = ic02d
        if (props.icon === 'ic03d') icon = ic03d
        if (props.icon === 'ic04d') icon = ic04d
        if (props.icon === 'ic09d') icon = ic09d
        if (props.icon === 'ic10d') icon = ic10d
        if (props.icon === 'ic11d') icon = ic11d
        if (props.icon === 'ic13d') icon = ic13d
        if (props.icon === 'ic050d') icon = ic50d


        return (
            <div>
          
                {props.city && <p className = "city"> {props.city}</p>}
        

                {props.city && <div className = "weather-icon__container">
                <img src={icon} alt ="weather icon" />
                </div>}

                {props.temperature && 
                <div className = "temperature__container">
                <img className = "temperature-icon" src = {temperature} alt ="temperature" />
                    <p className="temperature">: {props.temperature} </p>
                
                </div>}
                
                
                {props.humidity && <p>Humidity: {props.humidity}</p>}
                {props.description && <p>Description:   {props.description}</p>}
                {props.icon && <p>Icon:   {props.icon}.png</p>}
                {props.error && <p>   {props.error}</p>}
            </div>
        )
    }


export default Weather