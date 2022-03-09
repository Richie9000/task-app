import React from 'react'
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/SideBar';
import "./App.css"
import Status from './components/Status/Status';



function App() {
  return (
    <div className="app">
      <SideBar />
    <div className="app-container">
      <Header />
      <section className="status-container">
        <Status />
        <Status />
        <Status />
      </section>
    </div>

    </div>
  );
}

export default App;
