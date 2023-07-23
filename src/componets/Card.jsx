import Modal from "./Modal"
import typeColours from "./TypeColours"
const card = ({ pokemonList, pokemonName, setPokemonName }) => {
    pokemonList.sort((a, b) => (a.id - b.id))
    return (
        <div className="container">
            <Modal pokemonName={pokemonName} />
            <div className="row  justify-content-center align-items-center">

                {pokemonList.map((pokemon, index) => (
                    <div key={index} className="col-12 col-md-4 col-xl-3">
                        <div onClick={() => { setPokemonName(pokemon.name) }} type="button" data-bs-toggle="modal" data-bs-target="#pokemonModal" className="awesomeCardConatiner ">
                            <img className="awesomeCardPokemon" src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="Pokemon" />
                            <div className="awesomeCardText">
                                <h4>{pokemon.name}</h4>
                                <h5>Ability {pokemon.abilities[0].ability.name}</h5>
                                <h5 > Type {pokemon.types[0].type.name}</h5>

                                {/* style={{ backgroundColor: typeColours.pokemon.types[0].type.name, width: "25%" }} */}

                            </div>
                            <img className="awesomeCardBg" src="/assets/CardSurface.png" alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default card