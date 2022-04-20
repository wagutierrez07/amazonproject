import Billboard from './Components/Billboard/Billboard';
import Navbar from './Components/Navbar';
import React from 'react';

import './index.css';

function App() {

  return (
       <div className="App default" style={{width: '100%', height: '100%'}}>
          <div className="App default class4 class6" style={{overflow: 'hidden', width: '100%', height: '100%', zIndex: '0', position: 'fixed'}}>
            <div className="default class2 class4" style={{backgroundSize: '100% 100%', width: '100%', height: '100%', backgroundImage: 'url("assets/images/backgrounds/hbomax/default_1920x1080.png")'}}>
            </div>
            <Billboard/>
          </div>
      <Navbar/>
      </div>

  );
}

export default App;
