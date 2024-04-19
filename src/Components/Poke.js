import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Poke(props) {
    // const [poke_id, setPoke_id] = useState(0);
    const nav = useNavigate();

    const fetchPokeData = () => {
        fetch(props.url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const { id } = data;
                console.log(id);
                props.setPoke_id(id);
                nav(`/poke/${id}`);
            })
            .catch(error => {
                console.error(error);
            });
    }

    
    const fav = () => {
        const favItem = {
            name: `${props.name}`
        }

        props.setName(props.name); 
        
        props.addFav(favItem)
    }

    const handleClick = () => {
        fetchPokeData();
        props.setName(props.name); 
    }

    return (
        <div id="poke_data" style={{marginTop: "10px"}}>
            <p>{props.name}</p>
            <button onClick={handleClick}>See Pokemon Page</button>
            <button onClick={fav}>Add Pokemon to favourites</button>
        </div>
    )
}
