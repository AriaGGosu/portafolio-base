import React from 'react';
import logo from './img/logo.svg';
import './App.scss';
import BongoCat from './components/BongoCat';

function App() {
  return (
    <div className="all">

      <div className="container-fluid">
        <div className="row"> 
          <div className="col-12 col-sm-6">

            <div className="row">
              <div className="col-3">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <div className="col-3">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <div className="col-3">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <div className="col-3">
                <img src={logo} className="App-logo" alt="logo" />
              </div>             
            </div>

          </div>

          <div className="col-12 col-sm-6">
            <BongoCat/>
          </div>

        </div>
      </div>



    </div>
  );
}

export default App;
