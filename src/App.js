import React, {useState, useEffect} from 'react';
import Pusher from 'pusher-js';
import axios from "./axios";
import './App.css';

import Sidebar from "./sidebar"
import Login from "./Login"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Chats from "./chats"
// import Chats from "./chatsmern"

import {useStateValue} from "./StateProvider";
import {actionTypes} from "./Reducer";

function App() {
  const [messages, setMessages] = useState([]);
  // const [user, setUser] = useState(null);

  const [{user}, dispatch] = useStateValue();

  // setUser({
  //   "name": "Sangam"
  // })

  // useEffect(() => {
  //   setUser({
  //   })
  // }, [user])

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
      <>
      {
        !user ? (
          <Login />
        ) : (
          <>
          {/* < Sidebar />
          < Chats messages={messages}/> */}


          {/* For Loading Firebase Data */}
          <Router>
            <Switch>
                <Route path="/rooms/:roomId">
                < Sidebar />
                  < Chats />
                </Route>
                <Route path="/">
                  < Sidebar />
                  < Chats />
                </Route>
            </Switch>
          </Router>

          {/* For Loading Mongo Data*/}
          {/* <Router>
            <Switch>
                <Route path="/rooms/:roomId">
                < Sidebar />
                  < Chats messages={messages} />
                </Route>
                <Route path="/">
                  < Sidebar />
                  < Chats messages={messages}/>
                </Route>
            </Switch>
          </Router> */}
        </>
        )
      }

        
      </>
      </div>
    </div>
  );
}

export default App;
