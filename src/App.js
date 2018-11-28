import React, { Component } from 'react';
import Nav from './Nav.js';
import DocPresebtation from './DocPresentation.js';
import Header from './Header.js';
import DocImg from './DocImg.js';
import Footer from './Footer.js';
import DocPreImg from './DocPreImg.js';
import DocCompany from './DocCompany.js';
import Paradiv from './DocPara.js';

import DocStats from'./DocStats'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
      <Header/>
      <DocPresebtation/>
      <DocPreImg/>
      <DocCompany/>
      <DocStats/>
      < Paradiv />
      <DocImg/>
      <Footer/>
        
      </div>
    );
  }
}

export default App;
