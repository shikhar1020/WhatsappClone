import React, {useState, useEffect} from 'react'
import axios from "./axios";
import { useParams } from "react-router-dom";
import "./chats.css"
import db from "./firebase";
import firebase from "firebase";

import {Avatar, IconButton} from '@material-ui/core';

import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import MicIcon from '@material-ui/icons/Mic';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SendIcon from '@material-ui/icons/Send';

import {useStateValue} from "./StateProvider";



function Chats() {

    const [{user}, dispatch] = useStateValue();
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");
    const[messages, setMessages] = useState([]);
    const [sentMessgae, setSentMessage] = useState(true)
    const [seed, setSeed] = useState("");

    useEffect(() => {
        if(roomId){
            db.collection('Rooms')
            .doc(roomId)
            .onSnapshot((snapshot) => setRoomName
            (snapshot.data().name));

            db.collection("Rooms").doc(roomId)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot(snapshot => setMessages(snapshot.docs.map(doc => doc.data())))
        }

        console.log("Message is", messages);

    }, [roomId])

    const [input, setInput] = useState("");
    var current = new Date();
    const currentTime = current.toLocaleTimeString();

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId])

    const sendMessage = () => {

        db.collection("Rooms").doc(roomId).collection("messages").add({
            message: input,
            name: user.displayName,
            timestamp:  firebase.firestore.FieldValue.serverTimestamp(),
        });
        console.log("Message sent", input);

        setInput("");
    }


    return (
        <div className="chats">
            <div className="chats_header">
            <Avatar alt="Shikhar Sangam" src="https://avatars1.githubusercontent.com/u/54438024?s=460&u=6312f0e7142c4ed394a8fb9a4254cba4325c9fe7&v=4" />
                <div className="chatHeader_info">
                    <h3>{roomName}</h3>
                    <p>last seen at 18:32</p>
                </div>
                <div className="chats_headerRight">
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="mainChat">
                {messages.map((message) => (
                    <p className={`mainChat_sentmessage ${message.name === user.displayName && "mainChat_receivedmessage"}`}>
                        <span className="chat_name">{message.name}</span>
                        {message.message}
                        <span className="chat_timestamp">{new Date(message.timestamp?.toDate()).toUTCString()}</span>            
                    </p>
                ))}

                {/* <p className="mainChat_sentmessage mainChat_receivedmessage">
                    <span className="chat_name">Sangam</span>
                    Tujhe yaad karke, mujhe chain aawe...Tujhe yaad karke, mujhe chain aawe...Tujhe yaad karke, mujhe chain aawe...Tujhe yaad karke, mujhe chain aawe...
                    <span className="chat_timestamp">{new Date().toLocaleTimeString()}</span>            
                </p> */}
               

            </div>

            <form>
            <div className="chatSend">            
                <IconButton>
                    <SentimentVerySatisfiedIcon/>
                </IconButton>                                
                    <div className="chatSend_messageContainer">
                        {/* <form> */}
                            <input 
                                value={input}
                                onChange={(e) => setInput(e.target.value)} 
                                placeholder="Type a message" 
                                type="text" 
                                size="70"/>
                            {/* <button onClick={sendMessage} type="submit">Send</button> */}
                        {/* </form> */}
                        <IconButton>
                            <AttachFileIcon/>
                        </IconButton>      
                    </div>
                    <IconButton>
                        <MicIcon/>
                    </IconButton>   
                    <IconButton>
                        <SendIcon onClick={sendMessage}/>
                    </IconButton>                                                                                           
            </div> 
            </form>       
        </div>
    )
}

export default Chats
