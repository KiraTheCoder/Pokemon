// import React from 'react'

const card = () => {
    return (
        <div className="container">
            <div className="row  justify-content-center align-items-center">

                {[1, 2, 3, 4, 5, 6].map((val, index) => (
                    <div key={index} className="col-12 col-md-4 col-xl-3">
                        <div className="awesomeCardConatiner ">
                            <img className="awesomeCardPokemon" src={`/assets/${val}.svg`} alt="Pokemon image" />
                            <div className="awesomeCardText">
                                <h4>Pikachu Pokemon</h4>
                                <h5>Abilities ShedSkin</h5>
                                <h5>Type Bug</h5>
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