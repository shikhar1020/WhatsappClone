import React, {useState} from 'react'
import axios from "./axios";
import "./chats.css"

import {Avatar, IconButton} from '@material-ui/core';

import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import MicIcon from '@material-ui/icons/Mic';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SendIcon from '@material-ui/icons/Send';



function Chats({ messages }) {

    const [input, setInput] = useState("");
    const sendMessage = async(e) => {
        e.preventDefault();

        await axios.post("/messages/new",  {
            "message" : input,
            "name" : "Shikhar Sangam",
            "timestamp" : "Just Now",
            "received" : false
        });

        setInput("");
    };


    return (
        <div className="chats">
            <div className="chats_header">
            <Avatar alt="Shikhar Sangam" src="https://avatars1.githubusercontent.com/u/54438024?s=460&u=6312f0e7142c4ed394a8fb9a4254cba4325c9fe7&v=4" />
                <div className="chatHeader_info">
                    <h3>Sangam Doobara</h3>
                    <p>last seen at 19:00</p>
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
                    <p className={`mainChat_sentmessage ${message.received && "mainChat_receivedmessage"}`}>
                        <span className="chat_name">{message.name}</span>
                        {message.message}
                        <span className="chat_timestamp">{message.timestamp}</span>            
                    </p>
                ))}

                

                {/* <p className="mainChat_sentmessage mainChat_receivedmessage">
                    <span className="chat_name">Sangam</span>
                    Tujhe yaad karke, mujhe chain aawe...Tujhe yaad karke, mujhe chain aawe...Tujhe yaad karke, mujhe chain aawe...Tujhe yaad karke, mujhe chain aawe...
                    <span className="chat_timestamp">{new Date().toLocaleTimeString()}</span>            
                </p>

                <p className="mainChat_sentmessage">
                    <span className="chat_name">Sangam</span>
                    Tujhe yaad karke, mujhe chain aawe...
                    <span className="chat_timestamp">{new Date().toLocaleTimeString()}</span>            
                </p>

                <p className="mainChat_sentmessage mainChat_receivedmessage">
                    <span className="chat_name">Sangam</span>
                    Tujhe yaad karke, mujhe chain aawe...
                    <span className="chat_timestamp">{new Date().toLocaleTimeString()}</span>            
                </p>

                <p className="mainChat_sentmessage ">
                    <span className="chat_name">Sangam</span>
                    Tujhe yaad karke, mujhe chain aawe...
                    <span className="chat_timestamp">{new Date().toLocaleTimeString()}</span>            
                </p>

                <p className="mainChat_sentmessage mainChat_receivedmessage">
                    <span className="chat_name">Sangam</span>
                    Tujhe yaad karke, mujhe chain aawe...
                    <span className="chat_timestamp">{new Date().toLocaleTimeString()}</span>            
                </p>
                
                <p className="mainChat_sentmessage">
                    <span className="chat_name">Sangam</span>
                    Tujhe yaad karke, mujhe chain aawe...
                    <span className="chat_timestamp">{new Date().toLocaleTimeString()}</span>            
                </p>

                <p className="mainChat_sentmessage mainChat_receivedmessage">
                    <span className="chat_name">Sangam</span>
                    Tujhe yaad karke, mujhe chain aawe...
                    <span className="chat_timestamp">{new Date().toLocaleTimeString()}</span>            
                </p>

                <p className="mainChat_sentmessage">
                    <span className="chat_name">Sangam</span>
                    Tujhe yaad karke, mujhe chain aawe...
                    <span className="chat_timestamp">{new Date().toLocaleTimeString()}</span>            
                </p>

                <p className="mainChat_sentmessage mainChat_receivedmessage">
                    <span className="chat_name">Sangam</span>
                    Tujhe yaad karke, mujhe chain aawe...
                    <span className="chat_timestamp">{new Date().toLocaleTimeString()}</span>            
                </p>

                <p className="mainChat_sentmessage">
                    <span className="chat_name">Sangam</span>
                    Tujhe yaad karke, mujhe chain aawe...
                    <span className="chat_timestamp">{new Date().toLocaleTimeString()}</span>            
                </p>

                <p className="mainChat_sentmessage">
                    <span className="chat_name">Sangam</span>
                    Tujhe yaad karke, mujhe chain aawe...
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
                        <SendIcon onClick={sendMessage}/>
                    </IconButton>
                    <IconButton>
                        <MicIcon/>
                    </IconButton>                                                                                              
            </div> 
            </form>       
        </div>
    )
}

export default Chats
