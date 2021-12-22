import React from 'react'

const BerriesTable = (props) => (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Firmness</th>
          <th>Type</th>
          <th>Description</th>
          <th>Link</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.berries.length > 0 ? (
          props.berries.map((berry) => (
            <tr key={berry._id}>
              <td>{berry.name}</td>
              <td>{berry.firmness}</td>
              <td>{berry.type}</td>
              <td>{berry.description}</td>
              <td><a href={berry.url} target="_blank" rel="noopener noreferrer">More details</a></td>
              <td>
                <button onClick={() => { props.editRow(berry) }}
                  className="button muted-button">Edit</button>
              </td>
              <td>
                <button onClick={() => { props.deleteBerry(berry._id) }}
                  className="button muted-button">Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={7}>No Berry</td>
          </tr>
        )}
      </tbody>
    </table>
  )

export default BerriesTable;
