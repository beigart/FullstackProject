import React from 'react'
import '../HomeView/HomeView.css'
import Axios from 'axios'
import { useState, useEffect } from 'react'

export const HomeView = () => {

    const [data, setData] = useState("") 
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        apiData();

      });

  

    const apiData = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
        setLoading(false)
        console.log(data)
    
    }

    const displayData = () => {
        if (data){
            return <div>
                <h1>Name: {data.name}</h1>
                <h3>Weight: {data.weight}</h3>
                <h3>ID-number: {data.id}</h3>
                
            </div>
        }
    }

    const showData = () => {
        return loading ? <h1>Loading</h1> : displayData()
    }



    return (
        <div className="homeViewContainer">
            
            <h1>Type in your favourite Pokemon!!</h1>
            <input onChange={(e) => setSearch(e.target.value)} />
            <h2>{showData()}</h2>
            
        </div>
    )
}
