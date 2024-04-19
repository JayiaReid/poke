import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import GeneratePoke from './Pages/GeneratePoke';
import PokeHome from './Pages/PokeHome';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useState, createContext } from 'react';
import LoginSignup from './Pages/LoginSignUp';
// import MonthPoke from './Pages/MonthPoke';
import SubmitReview from './Pages/SubmitReview';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppContext = createContext();

function App(props){
  const [logIn, setLogIn] = useState(false);
  const [name, setName] = useState("ditto");
  const [cards, setCards]=useState([])
  const [favs, setFavs]=useState([])
  //these are declared because can be pop up anywhere 
  const [cardsShow, showCards]=useState(false);
  const [favsShow, showFavs]=useState(false);

  const Logout = () => {
    setLogIn(false);
  };

  const addCard = (card) => {
    setCards([...cards, card]);
  };

  const addFav = (fav) => {
    setFavs([...favs, fav]);
  };

  return (
    <div className="App">
      <AppContext.Provider value={{ Logout, setLogIn, setName, name, addCard, cards, addFav, favs,  cardsShow, showCards, favsShow, showFavs }}>
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/poke/:poke_id' element={<PokeHome />} />
            {/* <Route path='/month-poke/:poke_id' element={<MonthPoke/>}/> */}
            <Route path='/generate-poke/:poke_name/:poke_id' element={<GeneratePoke/>}></Route>
            <Route path='/review' element={<SubmitReview/>}></Route>
            {/* <Route path='/poke/:poke_id/:name/rooms' element={<Rooms />} />
            <Route path='/poke/:poke_id/:name/reviews' element={<Reviews />} />
            <Route path='/poke/:poke_id/:name/rooms/book' element={<Book />} /> */}
            <Route index path='/' element={<LoginSignup />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}
export {AppContext}
export default App;

