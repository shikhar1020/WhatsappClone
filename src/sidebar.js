import React, {useState, useEffect} from 'react'
import "./sidebar.css"
import IndivudialContacts from "./indivudialContacts"

import {Avatar, IconButton } from '@material-ui/core';

import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

import SearchIcon from '@material-ui/icons/Search';

import db from "./firebase";
import {useStateValue} from "./StateProvider";

function Sidebar() {

    const [rooms, setRooms] = useState([]);

    const [{user}, dispatch] = useStateValue();

    console.log("user data: ", user);

    useEffect(() => {
        const usnsubscribe = db.collection('Rooms').onSnapshot((snapshot) =>
            setRooms(snapshot.docs.map( (doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );

        return () => {
            usnsubscribe();
        }
    }, []);

    console.log("Rooms", rooms);


    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar alt="Shikhar Sangam" src={user?.photoURL} />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>                
            </div>

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchIcon/>
                    <input placeholder="Search or Start new Chat" type="text" size="35"/>
                </div>
            </div>

            <div className="contactsList">
            <IndivudialContacts addNew/>
                {/* https://stackoverflow.com/questions/62653450/how-to-fix-expected-to-return-a-value-in-arrow-function-with-reactjs */}
                {rooms.map(room => (
                    <>
                    <IndivudialContacts key={room.id} id={room.id} name={room.data.name} />
                    </>
                ))}
                {/* <IndivudialContacts />
                <IndivudialContacts />
                <IndivudialContacts />
                <IndivudialContacts />
                <IndivudialContacts />
                <IndivudialContacts /> */}
            </div>
            
        </div>
    )
}

export default Sidebar
