import React from 'react'
import "./sidebar.css"
import IndivudialContacts from "./indivudialContacts"

import {Avatar, IconButton, Button} from '@material-ui/core';

import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

import SearchIcon from '@material-ui/icons/Search';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar alt="Shikhar Sangam" src="https://avatars1.githubusercontent.com/u/54438024?s=460&u=6312f0e7142c4ed394a8fb9a4254cba4325c9fe7&v=4" />
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
                    <input placeholder="Search or Start new Chat" type="text"/>
                </div>
            </div>

            <div className="contactsList">
                <IndivudialContacts />
                <IndivudialContacts />
                <IndivudialContacts />
                <IndivudialContacts />
                <IndivudialContacts />
                <IndivudialContacts />
                <IndivudialContacts />
            </div>
            
        </div>
    )
}

export default Sidebar
