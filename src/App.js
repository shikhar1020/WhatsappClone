import React, {useState, useEffect} from 'react';
import Pusher from 'pusher-js';
import axios from "./axios";
import './App.css';

import Sidebar from "./sidebar"
import Chats from "./chats"

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data);
      });

  }, []);

  useEffect(() => {
    // Enable pusher logging - don't include this in production
    // Pusher.logToConsole = true;

    const pusher = new Pusher('95c1441e074cea11a2ec', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)  => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="whatsapp_body">  
        < Sidebar />
        < Chats messages={messages}/>
      </div>

    </div>
  );
}

export default App;
