import React from 'react';
import './assets/output.css';
import bg_chat from './assets/images/bg-chat.png';
import SideBar from "./components/SideBar";
import Chats from "./components/Chats";
function App() {
  return (
    <div className="App">
      <div className="flex">

        <div className="bg-white h-screen overflow-hidden" style={{ 'width' : '30%' }}>
          <SideBar/>
        </div>

        <div className="bg-gray-800 h-screen relative"
             style={background_chat}>
          <Chats/>
        </div>
      </div>
    </div>
  );
}

export default App;

const background_chat = {
  'width' : '70%',
  'background': "linear-gradient(rgba(229,221,213,.95), rgba(229,221,213,.95)), "+"url(" + bg_chat + ")"
}