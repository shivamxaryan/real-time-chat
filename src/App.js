// client/src/App.js

import React from 'react';
import Header from './components/Header';
import Error from './components/Error';
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Register from './components/Auth/Register';
import ChatRoom from './components/Chat/ChatRoom';
import KanbanBoard from './components/Kanban/KanbanBoard';
import Login from './components/Auth/Login';
// import Body from './components/Body';


const App = () => {
  return (
    <BrowserRouter>
    <div className="">
    <h1>MERN Chat and Kanban App</h1>
      <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" component={<Register/>} />
          <Route path="/chat" component={<ChatRoom/>} />
          <Route path="/kanban" component={<KanbanBoard/>} />
        </Routes>
    </div>
    </BrowserRouter>
    );
  };



export default App;
