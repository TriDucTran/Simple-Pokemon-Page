import React, { useState, useEffect } from "react";

const EditPokemonForm = (props) => {
    const [pokemon, setPokemon] = useState(props.currentPokemon)

    useEffect(() => {
        setPokemon(props.currentPokemon)
    }, [props]
    )

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setPokemon({ ...pokemon, [name]: value })
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                props.updatePokemon(pokemon._id, pokemon)
            }}
        >
            <h3>Edit Pokemon</h3>
            <hr height="3" />
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={pokemon.name}
                onChange={handleInputChange}
            />
            <label>Japanese Name</label>
            <input
                type="text"
                name="japanese_name"
                value={pokemon.japanese_name}
                onChange={handleInputChange}
            ></input>
            <label>Height</label>
            <input
                type="number"
                name="height"
                value={pokemon.height}
                onChange={handleInputChange}
            />
            <label>Type 1</label>
            <input
                type="text"
                name="type1"
                value={pokemon.type1}
                onChange={handleInputChange}
            />
            <label>Type 2</label>
            <input
                type="text"
                name="type2"
                value={pokemon.type2}
                onChange={handleInputChange}
            />
            <label>Description</label>
            <textarea
                id="textarea"
                name="description"
                value={pokemon.description}
                onChange={handleInputChange}
            ></textarea>
            <label>URL</label>
            <input
                type="text"
                name="url"
                value={pokemon.url}
                onChange={handleInputChange}
            />
            <p> </p>
            <button>Update Pokemon</button> &nbsp;
            <button
                onClick={() => props.setEditing(false)}
                className="button muted-button"
            >
                Cancel
            </button>
        </form>
    )
}

export default EditPokemonForm;