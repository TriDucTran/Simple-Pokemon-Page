import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import EditBerryForm from '../forms/EditBerryForm';
import AddBerryForm from '../forms/AddBerryForm';
import BerriesTable from '../tables/BerriesTable';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles.css';

const axiosClient = axios.create({
	baseURL: 'http://localhost:5000/'
});

const BerryPageAdmin = () => {
    const initialFormState = {
        id: null,
        name: '',
        firmness: '',
        type: '',
        description: '',
        url: ''
    }

    const [berries, setBerries] = useState([])

    useEffect(() => {
        async function getBerries() {
            const response = await axiosClient.get("/berries");
            setBerries(response.data);
        }
        getBerries();
    }, []);

    const [currentBerry, setCurrentBerry] = useState(initialFormState)
    const [editing, setEditing] = useState(false)

    async function addBerry(berry) {
        try {
            const response = await axiosClient.post("/berries", berry);
            setBerries(response.data);
            window.location.reload();
        }
        catch (err) {
            console.log(err)
        }
    }

    const deleteBerry = async (berryId) => {
        setEditing(false)
        await axiosClient.delete(`/berries/${berryId}`);
        alert("Berry deleted!");
        window.location.reload();
    }

    const updateBerry = async (berryId, updatedBerry) => {
        setEditing(false)
        await axiosClient.patch(`/berries/${berryId}`, updatedBerry);
        window.location.reload();
    }

    const editRow = berry => {
        setEditing(true)
        setCurrentBerry({
            _id: berry._id,
            name: berry.name,
            firmness: berry.firmness,
            type: berry.type,
            description: berry.description,
            url: berry.url
        })
    }

    return (
        <div className="App">
            <br /> <br />
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <Fragment>
                            <h2>Edit Berry</h2>
                            <EditBerryForm
                                editing={editing}
                                setEditing={setEditing}
                                currentBerry={currentBerry}
                                updateBerry={updateBerry}
                            />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <AddBerryForm addBerry={addBerry} />
                        </Fragment>
                    )}
                </div>
                <div className="flex-large">
                    <BerriesTable berries={berries} editRow={editRow} deleteBerry={deleteBerry} />
                </div>
            </div>
        </div>
    );
}

export default BerryPageAdmin;