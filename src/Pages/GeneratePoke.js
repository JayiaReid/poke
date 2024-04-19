import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../App";
import PokeCards from "../Components/PokeCards";
import { Button, Card, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function GeneratePoke() {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [color, setColor] = useState('');
    const [habitat, setHabitat] = useState('');
    const { poke_id, poke_name } = useParams();
    const [card, setCard] = useState({});
    const [generated, setGenerated] = useState(false);

    const { addCard, cardsShow, Logout, showCards } = useContext(AppContext);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${poke_id}`)
            .then(response => response.json())
            .then(data => {
                const pokeHeight = data.height;
                setHeight(pokeHeight)
                const pokeWeight = data.weight;
                setWeight(pokeWeight)
            })

        fetch(`https://pokeapi.co/api/v2/pokemon-habitat/${poke_id}/`)
            .then(response => response.json())
            .then(data => {
                const pokeHab = data.name;
                setHabitat(pokeHab)
            })

        fetch(`https://pokeapi.co/api/v2/pokemon-color/${poke_id}`)
            .then(response => response.json())
            .then(data => {
                const pokeColor = data.name;
                setColor(pokeColor)
            })

    }, [])

    const handleGenerate = () => {
        const newCard1 = {
            name: poke_name,
            height: height,
            weight: weight,
            color: color,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke_id}.png`,
        };

        setCard(newCard1);

        addCard(newCard1);

        setGenerated(true);
    };

    return (
        <div id="generate">
            <Navbar bg="light" style={{padding: "1em"}}>
                <Navbar.Brand href="#home" style={{color: "orange"}}>PokeCards</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link className="nav-link" to='/home'>Home</Link>
                        {/* <Link className="nav-link" to={`/month-poke/${poke_id}/`}>See Month Poke</Link> */}
                        {!cardsShow && <Nav.Link onClick={() => { showCards(true) }}>See Cards</Nav.Link>}
                        {cardsShow && <Nav.Link onClick={() => { showCards(false) }}>Hide Cards</Nav.Link>}
                    </Nav>
                {/* </Navbar.Collapse> */}
            </Navbar>
            <div className="poke_home_h1">
                <h1>Generate a Card {poke_id}</h1>
            </div>

            {!cardsShow && <Button onClick={() => { showCards(true) }}>See Cards</Button>}
            {cardsShow && <Button onClick={() => { showCards(false) }}>Hide Cards</Button>}

            <br />
            <Button style={{background: "orange", borderColor: "orange"}} onClick={handleGenerate}>Generate Card</Button>

            {generated && <div className="generated-card">
                <Card style={{height: "500px", width: "500px", background: "black", color: {color}}}>
                    <Card.Body>
                        <Card.Title style={{color: "orange"}}>{card.name}</Card.Title>
                        <Card.Img variant="top" src={card.image} alt={card.name} style={{objectFit: "cover", position: "absolute",zIndex: "0"}}/>
                        <Card.Text style={{zIndex: "1", color: "white"}}>
                            Height: {card.height}<br />
                            Weight: {card.weight}<br />
                            Color: {card.color}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>}
            {cardsShow && <PokeCards />}
        </div>
    );
}
