import React from 'react'
import './Pedal.css'


export default props=>{

    return (

        <div>

            <img className = "pedal m-2 img-fluid" src={props.src} alt="" onClick = {props.onClick}/>


        </div>
    )
}