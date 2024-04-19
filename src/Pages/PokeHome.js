import React, { useEffect, useState, useRef, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Draggable from "react-draggable";
import { AppContext } from "../App";
import PokeCards from "../Components/PokeCards";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PokeHome() {
    const { poke_id } = useParams();
    const [abilities, setAbilities] = useState([]);
    const [gameIndices, setGameIndices] = useState([]);
    const [heldItems, setHeldItems] = useState([]);
    const [height, setHeight] = useState(0);
    const [baseExperience, setBaseExperience] = useState(0);
    const [sprite, setSprite] = useState('');
    const [pokeName, setPokeName] = useState('');
    const nodeRef = useRef(null);

    const { showCards, cardsShow, addFav, Logout } = useContext(AppContext)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${poke_id}/`)
            .then(response => response.json())
            .then(data => {
                setAbilities(data.abilities.map(({ ability }) => ability.name));
                setGameIndices(data.game_indices.map(({ version }) => version.name));
                setHeldItems(data.held_items.map(({ item }) => item.name));
                setHeight(data.height);
                setBaseExperience(data.base_experience);
                const pokemonSprites = data.sprites.front_default;
                setSprite(pokemonSprites)
                const pokemonName = data.name;
                setPokeName(pokemonName);
            })
            .catch(error => {
                console.error(error);
            });
    }, [poke_id]);

    return (
        <div id="pokeHome" className="container mt-3" style={{background: "white"}}>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home" style={{ color: "orange" }}>PokeCards</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to='/home'>Home</Link>
                        {/* <Link className="nav-link" to={`/month-poke/${poke_id}/`}>See Month Poke</Link> */}
                        <Link className="nav-link" to={`/generate-poke/${pokeName}/${poke_id}`}>Generate PokeCard</Link>
                        {!cardsShow && <Nav.Link onClick={() => { showCards(true) }}>See Cards</Nav.Link>}
                        {cardsShow && <Nav.Link onClick={() => { showCards(false) }}>Hide Cards</Nav.Link>}
                        <Link className="nav-link" onClick={Logout} to='/'>Logout</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h1 style={{textAlign: "center", color: "orange"}}>{pokeName}: picture is draggable</h1>

            {cardsShow && <PokeCards />}

            <Draggable
                axis="both"
                handle=".sprite"
                nodeRef={nodeRef}
            >
                <img className="sprite" src={sprite} ref={nodeRef} alt={pokeName} style={{ height: "200px", width: "auto" }} />
            </Draggable>

            <div className="row">
                <div className="col-md-6">
                    
                    <h2>Held Items:</h2>
                    <ul>
                        {heldItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    <h2>Game Indices:</h2>
                    <ul>
                        {gameIndices.map((gameIndex, index) => (
                            <li key={index}>{gameIndex}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                <h2>Abilities:</h2>
                    <ul>
                        {abilities.map((ability, index) => (
                            <li key={index}>{ability}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    <h2>Height: {height}</h2>
                    <h2>Base Experience: {baseExperience}</h2>
                </div>
            </div>
        </div>
    );
}
