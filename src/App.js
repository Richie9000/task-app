import React from 'react'
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/SideBar';
import "./App.css"



function App() {
  return (
    <div className="app">
      <SideBar />
      <Header />
    </div>
  );
}

export default App;
