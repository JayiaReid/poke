import { createContext, useState } from "react";

export const PokeContext=createContext(null)

export const PokeContextProvider=(props)=>{
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

    const contextValue = { Logout, setLogIn, setName, name, addCard, cards, addFav, favs,  cardsShow, showCards, favsShow, showFavs}

    return(
        <PokeContext.Provider value={contextValue}>
            {props.children}
        </PokeContext.Provider>
    )
}