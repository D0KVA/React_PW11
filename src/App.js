import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import  './App.css';
import React from "react"

class App extends React.Component {
  render() {
    return (
      <div class="background">
        <div class="container">
          <Header/>
          <Main/>  
          <Footer/>    
        </div>
         
      </div>
    );
  }
  
}

export default App;
