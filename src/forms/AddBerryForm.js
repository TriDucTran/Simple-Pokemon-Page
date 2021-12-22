import React, { useState } from 'react'

const AddBerryForm = (props) => {
    const initialFormState = {
        id: null,
        name: '',
        firmness: '',
        type: '',
        description: '',
        url: ''
    }

    const [berry, setBerry] = useState(initialFormState)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setBerry({ ...berry, [name]: value })
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                if (!berry.name || !berry.firmness || !berry.type || !berry.description || !berry.url)
                    return

                props.addBerry(berry)
                setBerry(initialFormState)
            }}
        >
            <h3>Add New Berry</h3>
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
            />
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
            <br />
            <button>Add Berry</button>

        </form>
    )
}

export default AddBerryForm
