import React, { useEffect, useState } from 'react';
import axios from 'axios'
function FriendsComponent() {
    let [friendData, setFriendData] = useState(
        [{
            _id: '6305ae662a3901e2725576a9',
            name: 'Ama',
            bells: 44,
            whistles: 71
        }]
    )

    useEffect(() => {
        axios.get("/get/friends")
            .then(res => {
                setFriendData(res.data)
            })
    }, [])

    const allFriend = friendData.map((data) => {
        return (
            <li key={data._id} className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{data.name}</div>
                    Has {data.bells} bells and {data.whistles} whiysles
                </div>
            </li>
        )
    })


    return (
        <div>
            <ol className='list-group list-group-numbered'>
                {allFriend}
            </ol>
        </div>
    );
}

export default FriendsComponent;