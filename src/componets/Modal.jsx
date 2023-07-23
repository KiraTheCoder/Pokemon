import { useEffect } from "react"
import axios from "axios";
import "./style.css"
import { useState } from "react";
const Modal = ({ pokemonName }) => {
    const [pokemonData, setPokemonData] = useState({});

    const [pokemonFound, setPokemonFound] = useState(true)

    useEffect(() => {
        (pokemonName && axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(res => {
            setPokemonData(res.data)
            setPokemonFound(true);
        }).catch(err => {
            console.log(err)
            setPokemonFound(false);
        }))
        // console.log(pokemonData);
    }, [pokemonName])

    return (
        <div className="modal fade" id="pokemonModal" tabindex="-1" aria-labelledby="PokemonModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>


                    <div className="modal-body p-0">
                        <div class="container-fluid d-flex justify-content-center ">
                            <div class="row">


                                {pokemonFound
                                    ?
                                    <div className="col-12 position-relative">
                                        <div className="Pokédex text-center">

                                            {/* <img className="modalImage" src={pokemonData.sprites.other.dream_world.front_default} alt="Pokemon" />
                                                                                        
                                            <h1>{pokemonData.name}</h1>
                                            <span>
                                                <h2>{pokemonData.weight}</h2>
                                                <h2>WEIGHT</h2>
                                            </span>
                                            <span>
                                                <h2>{pokemonData.types[0].type.name}</h2>
                                                <h2>TYPE</h2>
                                            </span>
                                            <span>
                                                <h2>{pokemonData.height}</h2>
                                                <h2>HEIGHT</h2>
                                            </span>
                                            {console.log(pokemonData.sprites.other.dream_world.front_default)} */}

                                        </div>
                                    </div>

                                    :

                                    <h4>Pokémon Not Found</h4>
                                }

                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal


    // {
    //     <h1>{data.name}</h1>
    //     <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
    //     <div className="abilities">
    //         {
    //             data.abilities.map(poke=>{
    //                 return(
    //                     <>
    //                      <div className="group">
    //                         <h2>{poke.ability.name}</h2>
    //                     </div>
    //                     </>
    //                 )
    //             })
    //         }
    //     </div>
    //     <div className="base-stat">
    //         {
    //             data.stats.map(poke=>{
    //                 return(
    //                     <>
    //                         <h3>{poke.stat.name}:{poke.base_stat}</h3>
    //                     </>
    //                 )
    //             })
    //         }
    //     </div>
    // }

