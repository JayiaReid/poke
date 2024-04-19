import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { AppContext } from "../App";

export default function PokeCards() {
    const { cards, favs } = useContext(AppContext);

    return (
        <div id="cards">
            <h2>Pokemon Cards</h2>
            <div className="row">
                {cards.map((card, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <Card style={{height: "500px", width: "500px", background: "black", color: "white"}}>
                            <Card.Img style={{objectFit: "cover", position: "absolute",zIndex: "0", height: "500px", width: "auto"}} variant="top" src={card.image} alt={card.name} />
                            <Card.Body>
                                <Card.Title>{card.name}</Card.Title>
                                <Card.Text style={{zIndex: "1"}}>
                                    Height: {card.height} <br />
                                    Weight: {card.weight} <br />
                                    Stat: {card.stat} <br />
                                    Color: {card.color}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            <h2>Favorite Pokemon</h2>
            <div id="favs" className="row">
                {favs.map((fav, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{fav.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}
