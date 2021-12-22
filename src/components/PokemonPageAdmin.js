import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import EditPokemonForm from '../forms/EditPokemonForm';
import AddPokemonForm from '../forms/AddPokemonForm';
import PokemonsTable from '../tables/PokemonsTable';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles.css';


const axiosClient = axios.create({
	baseURL: 'http://localhost:5000/'
});

const PokemonPageAdmin = () => {
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

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        async function getPokemons() {
            const response = await axiosClient.get("/pokemons");
            setPokemons(response.data);
        }
        getPokemons();
    }, []);

    const [currentPokemon, setCurrentPokemon] = useState(initialFormState)
    const [editing, setEditing] = useState(false)

    async function addPokemon(pokemon) {
        try {
            const response = await axiosClient.post("/pokemons", pokemon);
            setPokemons(response.data);
            window.location.reload();
        }
        catch (err) {
            console.log(err)
        }
    }

    const deletePokemon = async (pokemonId) => {
        setEditing(false)
        await axiosClient.delete(`/pokemons/${pokemonId}`);
        console.log("Pokemon deleted!");
        window.location.reload();
    }

    const updatePokemon = async (pokemonId, updatedPokemon) => {
        setEditing(false)
        await axiosClient.patch(`/pokemons/${pokemonId}`, updatedPokemon);
        window.location.reload();
    }

    const editRow = pokemon => {
        setEditing(true)
        setCurrentPokemon({
            _id: pokemon._id,
            name: pokemon.name,
            japanese_name: pokemon.japanese_name,
            height: pokemon.height,
            type1: pokemon.type1,
            type2: pokemon.type2,
            description: pokemon.description,
            url: pokemon.url
        })
    }

    return (
        <div className="App">
            <br /> <br />
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <Fragment>
                            <h2>Edit Pokemon</h2>
                            <EditPokemonForm
                                editing={editing}
                                setEditing={setEditing}
                                currentPokemon={currentPokemon}
                                updatePokemon={updatePokemon}
                            />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <AddPokemonForm addPokemon={addPokemon} />
                        </Fragment>
                    )}
                </div>
                <div className="flex-large">
                    <PokemonsTable pokemons={pokemons} editRow={editRow} deletePokemon={deletePokemon} />
                </div>
            </div>
        </div>
    );
}

export default PokemonPageAdmin;