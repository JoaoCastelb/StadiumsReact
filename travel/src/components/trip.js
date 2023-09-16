import React from "react"

export default function Trip(props){
    return(
        <div className="trip">
            <img src={props.imageUrl} className="trip--img"/>
            
            <div className="trip-stats">
                <p>{props.location} 📍 </p>
                <h2>{props.title}</h2>
                <p className="bold">{props.Date}</p>
                <p className="bold">Capacity of {props.Capacity} people</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}