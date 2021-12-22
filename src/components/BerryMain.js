import React from 'react';

const BerryMain = (props) => {
    return (
        props.map((berry) => (
            <div key={berry._id} className="reactNativePokemon">
                <div>
                    <h2>Name: {berry.name}</h2>
                </div>
                <div className="flex-container">
                    <div className="flex-child">
                        <p>Firmness: {berry.firmness}</p>
                    </div>
                    <div className="flex-child">
                        <p>Type: {berry.type}</p>
                    </div>
                </div>
                <div className="test">
                    <p>{berry.description}</p>
                </div>
                <div>
                    <a href={berry.url} target="_blank" rel="noopener noreferrer">More details</a>
                </div>
            </div>
        ))
    )
}

export default BerryMain;