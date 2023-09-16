import React from "react";
import Header from "./components/header";
import Trip from "./components/trip";
import data from "./data"

export default function App(){
  const trips = data.map(destiny =>{
    return(
      <Trip
        key = {destiny.id}
        {...destiny}
      />
    )
  })

  return (
    <div>
      <Header />
      {trips}
    </div>
  )
}