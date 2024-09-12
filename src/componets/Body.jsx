import { useEffect, useState } from "react";
import axios from "axios";
import SearchSection from "./SearchSection";
import Card from "./Card";

const Body = () => {
    const [loading, setLoading] = useState(false);
    const [pokemonList, setPokemonList] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState(
        "https://pokeapi.co/api/v2/pokemon/?limit=21"
    );
    const [prevPage, setPrevPage] = useState();
    const [nextPage, setNextPage] = useState();
    const [pokemonName, setPokemonName] = useState("");

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                setLoading(true);
                const res = await axios.get(currentPageUrl);

                // Reset the list before setting the new Pokémon data
                setPokemonList([]);

                const pokemonDetails = await Promise.all(
                    res.data.results.map((obj) => axios.get(obj.url))
                );

                setPokemonList(pokemonDetails.map((detail) => detail.data));
                setPrevPage(res.data.previous);
                setNextPage(res.data.next);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, [currentPageUrl]);

    const gotoPrevPage = () => prevPage && setCurrentPageUrl(prevPage);
    const gotoNextPage = () => nextPage && setCurrentPageUrl(nextPage);

    return (
        <>

      
            <SearchSection pokemonName={pokemonName} setPokemonName={setPokemonName} />
            {loading && (
                <div className="d-flex justify-content-center align-items-center">
                    <h1 style={{ fontSize: "3rem" }}>Loading...</h1>
                </div>
            )}
            <Card
                pokemonList={pokemonList}
                pokemonName={pokemonName}
                setPokemonName={setPokemonName}
            />
            <div className="container">
                <div className="row text-center">
                    <div className="col-6">
                        {prevPage && (
                            <button
                                className="btn btn-primary rounded-lg"
                                onClick={gotoPrevPage}
                            >
                                Previous
                            </button>
                        )}
                    </div>
                    <div className="col-6">
                        {nextPage && (
                            <button
                                className="btn btn-primary rounded-lg"
                                onClick={gotoNextPage}
                            >
                                Next {" >"}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Body;
