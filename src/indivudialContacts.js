import React, {useState, useEffect} from 'react'
import "./indivudialContacts.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { useParams } from "react-router-dom";
import {Avatar} from '@material-ui/core';
import db from './firebase';

function IndivudialContacts({id, name, addNew}) {

    const [lastmessage, setLastMessage] = useState("");
    const createRoom = () => {
        const roomName = prompt("Please Enter New Chat Room");

        if (roomName) {
            db.collection("Rooms").add({
                name: roomName,
            });
            console.log("Room added with room name", roomName)
        }
    };

    const [seed, setSeed] = useState("");
    const {roomId} = useParams();
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    useEffect(() => {
        if(id) {
            db.collection("Rooms")
            .doc(id)
            .collection("messages")
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => 
                setLastMessage(snapshot.docs.map((doc) => 
                doc.data()))
            );
        }
    }, [])

    return !addNew ? (
        <Link to={`/rooms/${id}`}>
        <div className="IndivudialContacts">
        <>
        <Avatar alt={name} src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
            <div className="IndivudialContacts_info">
                <h4>{name}</h4>
                <p>{lastmessage[0]?.message}</p>
                
            </div>
        </>
        </div>
        </Link>
    ) : (
        <div onClick={createRoom}>
            {/* <h4 >Add New Chat</h4> */}
            <button className="addNew" >Add New Chat +</button>
        </div>
    )

        


}

// style={{textAlign:"center", border:"2px solid blue"}}

export default IndivudialContacts
