import React, { useState } from "react";

const AddPokemonForm = (props) => {
    const initialFormState = {
        id: null,
        name: '',
        japanese_name: '',
        height: 0,
        type1: '',
        type2: '',
        description: '',
        url: ''
    }

    const [pokemon, setPokemon] = useState(initialFormState)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setPokemon({ ...pokemon, [name]: value })
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                if (!pokemon.name || !pokemon.japanese_name || !pokemon.height || !pokemon.type1 || !pokemon.description || !pokemon.url)
                    return

                props.addPokemon(pokemon)
                setPokemon(initialFormState)
            }}
        >
            <h3>Add New Pokemon</h3>
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
            <br />
            <button>Add Pokemon</button>

        </form>
    )
}

export default AddPokemonForm;