import React, { useState, useEffect } from "react";

const EditBerryForm = (props) => {
    const [berry, setBerry] = useState(props.currentBerry)

    useEffect(() => {
        setBerry(props.currentBerry)
    }, [props]
    )

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setBerry({ ...berry, [name]: value })
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                props.updateBerry(berry._id, berry)
            }}
        >
            <h3>Edit Pokemon</h3>
            <hr height="3" />
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={berry.name}
                onChange={handleInputChange}
            />
            <label>Firmness</label>
            <input
                type="text"
                name="firmness"
                value={berry.firmness}
                onChange={handleInputChange}
            ></input>
            <label>Type</label>
            <input
                type="text"
                name="type1"
                value={berry.type}
                onChange={handleInputChange}
            />
            <label>Description</label>
            <textarea
                id="textarea"
                name="description"
                value={berry.description}
                onChange={handleInputChange}
            ></textarea>
            <label>URL</label>
            <input
                type="text"
                name="url"
                value={berry.url}
                onChange={handleInputChange}
            />
            <p> </p>
            <button>Update Berry</button> &nbsp;
            <button
                onClick={() => props.setEditing(false)}
                className="button muted-button"
            >
                Cancel
            </button>
        </form>
    )
}

export default EditBerryForm;