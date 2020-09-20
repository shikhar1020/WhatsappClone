import React from 'react'
import "./chats.css"

import {Avatar, IconButton} from '@material-ui/core';

import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import MicIcon from '@material-ui/icons/Mic';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';



function Chats() {
    return (
        <div className="chats">
            <div className="chats_header">
            <Avatar alt="Shikhar Sangam" src="https://avatars1.githubusercontent.com/u/54438024?s=460&u=6312f0e7142c4ed394a8fb9a4254cba4325c9fe7&v=4" />
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <IconButton>
                    <AttachFileIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
            </div>
            <div className="mainChat">
                <h3>Main Chat Content!</h3>
            </div>
            <div className="chatSend">
                <MicIcon/>
                <SentimentVerySatisfiedIcon/>
            </div>
        </div>
    )
}

export default Chats
