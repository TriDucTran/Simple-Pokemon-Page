import React from 'react'

const PokemonsTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Japanese Name</th>
        <th>Height</th>
        <th>Type</th>
        <th>Description</th>
        <th>Link</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {props.pokemons.length > 0 ? (
        props.pokemons.map((pokemon) => (
          <tr key={pokemon._id}>
            <td>{pokemon.name}</td>
            <td>{pokemon.japanese_name}</td>
            <td>{pokemon.height}</td>
            <td>{pokemon.type1}{pokemon.type2 !== "" ? "/" + pokemon.type2 : pokemon.type2}</td>
            <td>{pokemon.description}</td>
            <td><a href={pokemon.url} target="_blank" rel="noopener noreferrer">More details</a></td>
            <td>
              <button onClick={() => { props.editRow(pokemon) }}
                className="button muted-button">Edit</button>
            </td>
            <td>
              <button onClick={() => { props.deletePokemon(pokemon._id) }}
                className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={8}>No Pokemon</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default PokemonsTable;