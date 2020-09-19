import React from 'react';
import './App.css';

import Sidebar from "./sidebar"
import Chats from "./chats"

function App() {
  return (
    <div className="app">
      <div className="whatsapp_body">  
        < Sidebar />
        < Chats />
      </div>

    </div>
  );
}

export default App;
