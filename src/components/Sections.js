import React from 'react';
import logo from '../img/logo.svg';
import BongoCat from '../components/BongoCat';

const Section = () => {
    return (
        <div>
            <section id="section-1">
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
            </section>

            <section id="section-2">
                <span>Section 2</span>
            </section>

            <section id="section-3">
                <span>Section 3</span>
            </section>
        </div>
    )
}

export default Section;