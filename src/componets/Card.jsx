import Modal from "./Modal";
import typeColours from "./TypeColours";

const Card = ({ pokemonList, pokemonName, setPokemonName }) => {
    // Sort the pokemonList once outside the JSX block
    const sortedPokemonList = [...pokemonList].sort((a, b) => a.id - b.id);

    // Helper function to determine the background color
    const getBackgroundColor = (type) => {
        return type === "grass" ? typeColours.grass : "lightblue";
    };

    return (
        <div className="container">
            <Modal pokemonName={pokemonName} />
            <div className="row justify-content-center align-items-center">
                {sortedPokemonList.map((pokemon) => {
                    const pokemonType = pokemon.types[0].type.name;
                    const backgroundColor = getBackgroundColor(pokemonType);

                    return (
                        <div
                            key={pokemon.id}
                            className="col-12 col-md-4 col-xl-3"
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                        >
                            <div
                                onClick={() => setPokemonName(pokemon.name)}
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#pokemonModal"
                                className="awesomeCardConatiner"
                            >
                                <img
                                    className="awesomeCardPokemon"
                                    src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                                    alt="Pokemon"
                                />
                                <div className="awesomeCardText">
                                    <h4>{pokemon.name}</h4>
                                    <h5>Ability: {pokemon.abilities[0].ability.name}</h5>
                                    <h5
                                        style={{
                                            backgroundColor: backgroundColor,
                                            width: "25%",
                                            height: "20%",
                                        }}
                                    >
                                        Type: {pokemonType}
                                    </h5>
                                </div>
                                <img
                                    className="awesomeCardBg"
                                    src="/assets/CardSurface.png"
                                    alt="Card Background"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Card;
