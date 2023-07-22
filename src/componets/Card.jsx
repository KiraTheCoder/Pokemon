const card = ({ pokemonList }) => {
    console.log(pokemonList);
    const pokemonSortedList = pokemonList.sort((a, b) => (a.id > b.id ? 1 : -1))
    return (
        <div className="container">
            <div className="row  justify-content-center align-items-center">

                {pokemonSortedList.map((pokemon, index) => (
                    <div key={index} className="col-12 col-md-4 col-xl-3">
                        <div className="awesomeCardConatiner ">
                            <img className="awesomeCardPokemon" src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="Pokemon" />
                            <div className="awesomeCardText">
                                <h4>{pokemon.name}</h4>
                                <h5>Ability {pokemon.abilities[0].ability.name}</h5>
                                <h5>Type {pokemon.types[0].type.name}</h5>
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