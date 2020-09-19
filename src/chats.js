import React from 'react'
import "./chats.css"

function Chats() {
    return (
        <div className="chats">
            <div className="chats_header">
                <h3>This is chats header</h3>
            </div>
            <div className="mainChat">
                <h3>Here will be main chat content!</h3>
            </div>
            <div className="chatSend">
                <h3>From here one can type messeges and send them!</h3>
            </div>
        </div>
    )
}

export default Chats
