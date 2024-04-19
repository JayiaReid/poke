import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Poke from "./Poke";

export default function PokeLogue(props){
    const [list, setList]=useState([]);

    const fetchPokes=()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
        .then(response => response.json()) 
        .then(data => {
            console.log(data);
            const { results } = data; 
            setList(results);
        })
        .catch(error => {
            console.error(error);
        });
    }

    useEffect(()=>{
        fetchPokes();
    }, [])

    return(
        <div id="pokelogue">
            <ul>
              {list?.map((item, index)=>(
                item.name.toLowerCase().includes(props.search.toLowerCase())? 
                     <Poke 
                     key={index} 
                    //  setSelected={props.setSelected} 
                     addFav={props.addFav} 
                     setName={props.setName}
                     name={item.name}
                     url={item.url}
                     poke_id={props.poke_id}
                     setPoke_id={props.setPoke_id} />
                : null
            ))}  
            </ul>
        </div>
    )
}