import React from 'react';
import logo from './img/logo.svg';
import './App.scss';
import Nav from './components/Nav';
import Sections from './components/Sections';
import BongoCat from './components/BongoCat';

document.querySelectorAll('a[href^="#"]').forEach(elem => {
  elem.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(elem.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          offsetTop: 20
      });
  });
});


function App() {
  return (
    <div className="all">
        {/* first row */}


        {/* second row */}
        <div className="row">
          <div className="col-12">
            <Nav/>
            <Sections/>
          </div>
        </div>
      </div>
  );
}

export default App;
