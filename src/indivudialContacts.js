import React from 'react'
import "./indivudialContacts.css"

import {Avatar} from '@material-ui/core';

function IndivudialContacts() {
    return <div
    className="IndivudialContacts">
        <Avatar alt="Shikhar Sangam" src="https://avatars1.githubusercontent.com/u/54438024?s=460&u=6312f0e7142c4ed394a8fb9a4254cba4325c9fe7&v=4" />
        <div className="IndivudialContacts_info">
            <h4>Sangam Pyaru</h4>
            <p>Tabhi toh itna maza aaya tha!</p>
        </div>
    </div>

}

export default IndivudialContacts
