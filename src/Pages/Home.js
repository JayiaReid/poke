import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Landing from '../assets/landing.jpg';
import { AppContext } from '../App';
import PokeLogue from '../Components/PokeLogue';
import PokeCards from '../Components/PokeCards';

export default function Home() {
    const [poke_id, setPoke_id] = useState(0);
    const [species, setSpecies] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filter, setFilter] = useState(0);
    // const [selected, setSelected]=useState('')

    const { showCards, cardsShow, addFav, name, setName, Logout } = useContext(AppContext);

    const fetchSpecies = () => {
        fetch("https://pokeapi.co/api/v2/pokemon-species?limit=10&offset=0")
            .then(response => response.json())
            .then(data => {
                const { results } = data;
                setSpecies(results);
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        fetchSpecies();
    }, []);

    return (
        <div id="home_page" style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '2em' }}>
            <Navbar bg="dark" style={{padding: "1em"}} >
                <Navbar.Brand href="#" style={{ fontSize: '30px', fontWeight: '200', color: "orange" }}>PokeCards : PokeDex</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => showCards(true)} style={{ color: 'white' }}>See Cards</Nav.Link>
                        <Nav.Link as={Link} to="/review" style={{ color: 'white' }}>Submit Review</Nav.Link>
                        <Nav.Link className="nav-link" style={{ color: 'white' }} onClick={Logout} to='/'>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="poke_home_h1" style={{ textAlign: 'center', marginTop: '1em' }}>
                <h1 style={{ color: '#333333' }}> PokeCards : PokeDex </h1>
                {!cardsShow && <Button className="btn btn-primary" onClick={() => showCards(true)}>See Cards</Button>}
                {cardsShow && <Button className="btn btn-danger" onClick={() => showCards(false)}>Hide Cards</Button>}
            </div>

            {cardsShow && <PokeCards />}

            <div id='pokemons'>
                <form>
                    <input
                        type='text'
                        className="form-control"
                        placeholder={`Search Pokemon: ${name} was previously selected`}
                        onChange={(e) => setSearchInput(e.target.value)} />
                    <select className="form-control" onChange={(e) => setFilter(e.target.value)}>
                        <option value={null}>Filter by Species</option>
                        {species.map((item, index) => (
                            <option key={index} value={item.name}>{item.name}</option>
                        ))}
                    </select>
                </form>
                <div id='catalogue'>
                    <PokeLogue
                        setPoke_id={setPoke_id}
                        addFav={addFav}
                        search={searchInput}
                        name={name}
                        setName={setName}
                        poke_id={poke_id}
                         />
                </div>
            </div>

            
        </div>
    )
}
