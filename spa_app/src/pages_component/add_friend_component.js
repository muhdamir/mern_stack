import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AddFriendComponent() {
    let [stateName, setName] = useState(null)
    let [stateWhistles, setWhitsles] = useState(null)
    let [stateBells, setBells] = useState(null)
    let navigate = useNavigate()

    const addFriend = e => {
        e.preventDefault()
        const friendsData = {
            "name": stateName,
            "whistles": stateWhistles,
            "bells": stateBells
        }
        console.log(friendsData)
        axios.post("/get/friends", friendsData)
            .then(res => {
                console.log(res.data);
                navigate("/friends")
            })
    }

    const updateState = e => {
        if (e.target.id === "friendName") {
            setName(e.target.value)
            console.log(stateName)
        } else if (e.target.id === "whitsles") {
            setWhitsles(e.traget.value)
            console.log(stateWhistles)
        } else {
            setBells(e.target.value)
            console.log(stateBells)
        }

    }

    return (
        <form onSubmit={addFriend}>
            <div className="form-group">
                {stateName}
                <label>Name</label>
                <input type="text" className="form-control" id="friendName" placeholder="Enter friend's name" onChange={updateState} />
            </div>
            <div className="form-group">
                <label>Whistles</label>
                <input type="number" className="form-control" id="whistles" placeholder="Number of whistles" onChange={updateState} />
            </div>
            <div className="form-group">
                <label>Bells</label>
                <input type="number" className="form-control" id="bells" placeholder="Number of bells" onChange={updateState} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    );
}

export default AddFriendComponent;