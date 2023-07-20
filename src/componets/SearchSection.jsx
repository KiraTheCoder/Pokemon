import "./style.css"

const SearchSection = () => {
    return (
        <>
            <div className="cantainer">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 text-center">
                        <h3 className="callToSerach">Discover Your Favorite Pokémon Now!</h3>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <div className="inputGroup">
                            <input className="searchInput" type="text" placeholder="Type Your Pokemon...." />

                            <button className="searchBtn"><img className="searchIcon" src="/assets/SearchIcon.png" alt="Searcch iocn" /></button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchSection