import "./style.css"
import Modal from "./Modal"
import { useState } from "react"
const Header = () => {
    const [pokeName,setPokeName] = useState("")

    return (
        <div className="cantainer">
            <Modal pokemonName={pokeName} />
            <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light ">

                <div className="container-fluid" data-aos="zoom-in-down">
                    <a className="navbar-brand" href="#">
                        <img src="/assets/pokeball.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" data-aos="rotate" data-aos-anchor-placement="top-top" />
                        Pokémon World
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mt-2 ms-md-2 mt-md-0 hover-pointer"><img src="/assets/CHARIZARD.svg" alt="pokemon" onClick={()=>{setPokeName("charizard")}}   data-bs-toggle="modal" data-bs-target="#pokemonModal" /></li>
                            <li className="nav-item mt-2 ms-md-2 mt-md-0 hover-pointer"><img src="/assets/SQUIRTLE.svg" alt="pokemon" onClick={()=>{setPokeName("squirtle")}}  data-bs-toggle="modal" data-bs-target="#pokemonModal"  /></li>
                            <li className="nav-item mt-2 ms-md-2 mt-md-0 hover-pointer"><img src="/assets/PIKACHU.svg" alt="pokemon" onClick={()=>{setPokeName("pikachu")}}  data-bs-toggle="modal" data-bs-target="#pokemonModal"  /></li>
                            <li className="nav-item mt-2 ms-md-2 mt-md-0 hover-pointer"><img src="/assets/BULBASAUR.svg" alt="pokemon" onClick={()=>{setPokeName("bulbasaur")}}  data-bs-toggle="modal" data-bs-target="#pokemonModal"  /></li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div>
    )

}

export default Header;