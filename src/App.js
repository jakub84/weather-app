import React from 'react'
import Titles from './components/titles'
import Form from './components/form'
import Weather from './components/Weather'
import './App.css'

const API_KEY = "55f74c568eff9e48b463fcfbbef33225"
class App extends React.Component {

state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined, 
    error: undefined,
    formValue: undefined,
    country: undefined,
    description: undefined,
    icon: undefined


}


    getWeather = async (e) => {
        e.preventDefault();
        this.setState({
            temperature: undefined,
            city: undefined,
            humidity: undefined, 
            error: undefined,
            country: undefined,
            description: undefined,
            icon: undefined
        })
        

        let city = e.target.elements.city.value;
        e.target.elements.city.value =""
        if (city === '') {
           this.setState({
               error: 'Form is empty'
           })
        
            return
        } 
                

       


        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${API_KEY}`);
        const data = await api_call.json();

        if ( data.count === 0) {
            this.setState({
                error: 'wrong name of city'
            })
         
             return
         }

        // const country = e.target.elements.country.value;
        console.log(data);
        console.log(city);
        this.setState({
            temperature: data.list[0].main.temp,
            city: data.list[0].name, 
            humidity: data.list[0].main.humidity, 
            error: this.state.error,
            country: data.list[0].sys.country,
            description: data.list[0].weather[0].description,
            icon: `ic${data.list[0].weather[0].icon}`
        })
    }
    render() {
        return (
            <div className = "container">
                <Titles/>
                <Form getWeather = {this.getWeather} />
                <Weather 
                city = {this.state.city}
                temperature = {this.state.temperature}
                humidity = {this.state.humidity}
                error = {this.state.error}
                country = {this.state.country}
                description = {this.state.description}
                icon = {this.state.icon}
                />
            </div>
        )
    }
}

export default App;