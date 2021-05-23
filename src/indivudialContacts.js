import React from 'react'
import "./indivudialContacts.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import {Avatar} from '@material-ui/core';
import db from './firebase';

function IndivudialContacts({id, name, addNew}) {
    const createRoom = () => {
        const roomName = prompt("Please Enter New Chat Room");

        if (roomName) {
            db.collection("Rooms").add({
                name: roomName,
            });
            console.log("Room added with room name", roomName)
        }
    };

    return !addNew ? (
        <Link to={`/rooms/${id}`}>
        <div className="IndivudialContacts">
        <>
        <Avatar alt="Shikhar Sangam" src="https://avatars1.githubusercontent.com/u/54438024?s=460&u=6312f0e7142c4ed394a8fb9a4254cba4325c9fe7&v=4" />
            <div className="IndivudialContacts_info">
                <h4>{name}</h4>
                <p>Wooho! This is so amazing!</p>
                
            </div>
        </>
        </div>
        </Link>
    ) : (
        <div className="IndivudialContacts" onClick={createRoom}>
            <h4 >Add New Chat</h4>
        </div>
    )

        


}

// style={{textAlign:"center", border:"2px solid blue"}}

export default IndivudialContacts
