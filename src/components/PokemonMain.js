import React from 'react';

const PokemonMain = (props) => {
    return (
        props.map((pokemon) => (
            <div key={pokemon._id} className="reactNativePokemon">
                <div className="flex-container">
                    <div className="flex-child">
                        <h4>Name: {pokemon.name}</h4>
                        <p>Japanese Name: {pokemon.japanese_name}</p>
                    </div>
                    <div className="flex-child">
                        <p>Height: {pokemon.height}m</p>
                        <p>Type: {pokemon.type1}{pokemon.type2 !== "" ? "/" + pokemon.type2 : pokemon.type2}</p>
                    </div>
                </div>
                <div className="test">
                    <p>{pokemon.description}</p>
                </div>
                <div>
                    <a href={pokemon.url} target="_blank" rel="noopener noreferrer">More details</a>
                </div>
            </div>
        ))
    )
}

export default PokemonMain;