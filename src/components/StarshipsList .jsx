import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const URL = "https://www.swapi.tech/api/starships"

function StarshipList(){
    const [starship, setStarship] = useState([])

    useEffect(() => {
        fetch(URL)
        .then((res) => res.json())
        .then((ships) => setStarship(ships.results))
        .catch((err) => {console.log(err)})
    }, []);

    const ArrShip = starship.map((ship)=>{
        return (<Link to={`/ships/${ship.uid}`} key={ship.uid}>
            <div>
                <h3>{ship.name}</h3>
            </div>
        </Link>)
    })

    return(
        <div>
            {ArrShip}
        </div>
    )
}

export default StarshipList