import React from 'react';
import './App.scss';
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
//import Routes from "./routes";

function App() {
  return (
    <div className="container">
      <Header />
      <MainContent/>
      <Footer />
    </div>
  )
}

export default App;