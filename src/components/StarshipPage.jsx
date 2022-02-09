import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'


// const URL = "https://www.swapi.tech/api/starships"

function StarshipPage(){
    const [ship, setShip] = useState({})
    const {uid} = useParams()

    useEffect(() => {
        fetch("https://www.swapi.tech/api/starships/" + uid)
        .then((res) => res.json())
        .then((ships) => setShip(ships.result.properties))
        .catch((err) => {console.log(err)})
    }, []);
    console.log(ship)
    

    return (
        <div>
            <Link to={'/'}>
                <h2>Return to StarShip List</h2>
            </Link>
            <h3>{ship.name}</h3>
            <h4>Model: {ship.model}</h4>
            <h4>Manufacturer: {ship.manufacturer}</h4>
            <h4>Cost: {ship.cost_in_credits}</h4>
            <h4>Speed: {ship.max_atmosphering_speed}</h4>
        </div>
    )
}

export default StarshipPage