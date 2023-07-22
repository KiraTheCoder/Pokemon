import { useEffect } from "react"
import axios from "axios";
const Modal = ({ pokemonName }) => {

    useEffect(() => {
        console.log("hehehiugh")

        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    }, [pokemonName])

    return (
        <div className="modal fade" id="pokemonModal" tabindex="-1" aria-labelledby="PokemonModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h4 className="modal-title fs-5">{pokemonName}</h4>
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