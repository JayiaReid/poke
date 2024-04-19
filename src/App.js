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
import { PokeContextProvider } from './Components/Context';



function App(props){
  

  return (
    <div className="App">
      <PokeContextProvider >
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
      </PokeContextProvider>
    </div>
  );
}

export default App;

