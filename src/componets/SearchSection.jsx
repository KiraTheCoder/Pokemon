import { useState } from "react"
import "./style.css"
import Modal from "./Modal"
const SearchSection = ({ pokemonName, setPokemonName }) => {

    const [searchValue, setSearchValue] = useState("")
    return (
        <>
            <div className="cantainer">
                <Modal pokemonName={pokemonName} />
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 text-center">
                        <h3 className="callToSerach">Discover Your Favorite Pokémon Now!</h3>
                    </div>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        setPokemonName(searchValue)
                    }} className="col-12 col-md-6 text-center">
                        <div className="inputGroup">
                            <input value={searchValue}
                                onChange={(e) => { setSearchValue(e.target.value.toLowerCase()) }}
                                className="searchInput" type="text" placeholder="Type Your Pokemon...." />

                            <button
                                type="submit" data-bs-toggle="modal" data-bs-target="#pokemonModal"
                                className="searchBtn"><img className="searchIcon" src="/assets/SearchIcon.png" alt="Searcch iocn" /></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SearchSection