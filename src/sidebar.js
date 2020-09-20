import React from 'react'
import "./sidebar.css"

import Avatar from '@material-ui/core/Avatar';

import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import SearchIcon from '@material-ui/icons/Search';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar alt="Shikhar Sangam" src="https://avatars1.githubusercontent.com/u/54438024?s=460&u=6312f0e7142c4ed394a8fb9a4254cba4325c9fe7&v=4" />
                < RadioButtonUncheckedIcon />
                <ChatIcon/>
                <MoreVertIcon />
            </div>
            <div className="sidebar_search">
                < SearchIcon />
            </div>
            <div className="contactsList">
            <h3>Add new Chat</h3>
            <hr/>
            <Avatar alt="Shikhar Sangam" src="https://avatars1.githubusercontent.com/u/54438024?s=460&u=6312f0e7142c4ed394a8fb9a4254cba4325c9fe7&v=4" />
            <hr/>
            <Avatar alt="Shikhar Sangam" src="https://avatars1.githubusercontent.com/u/54438024?s=460&u=6312f0e7142c4ed394a8fb9a4254cba4325c9fe7&v=4" />
            <hr/>
            <Avatar alt="Shikhar Sangam" src="https://avatars1.githubusercontent.com/u/54438024?s=460&u=6312f0e7142c4ed394a8fb9a4254cba4325c9fe7&v=4" />
            <hr/>
            <Avatar alt="Shikhar Sangam" src="https://avatars1.githubusercontent.com/u/54438024?s=460&u=6312f0e7142c4ed394a8fb9a4254cba4325c9fe7&v=4" />
            <hr/>
            </div>
            
        </div>
    )
}

export default Sidebar
