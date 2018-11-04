import React from 'react'

const Form = (props) => {
    
        return (
            <form 
            onSubmit = {props.getWeather}
            >
                <input
                autoFocus = "true"
                autoComplete = "off"
                type="text" name = "city"
                placeholder = "Please enter name of city"
             
                />
              
                <button>Get Weather</button>
            </form>
            
        )
    }


export default Form;