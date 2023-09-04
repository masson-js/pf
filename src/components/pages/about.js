
import React from 'react';
import Draggable from 'react-draggable';
import DotPanel from '../decorators/dotsPanel';


function About() {
  return (
    <>
      <Draggable>
        <div className="content-box menu">
          <div className='window-panel'>
            <DotPanel/>
            <p className='panel-name-title'>About</p>
            <span></span>
          </div>
          <section className='content'>
              <div className='content-container'>
                <h1>Welcome, my name is Wlod Simon</h1>
                

              </div>
            </section>
        </div>
      </Draggable>
    </>

  );
}

export default About;