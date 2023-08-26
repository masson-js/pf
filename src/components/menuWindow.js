import React from 'react'
import { Link } from 'react-router-dom'
import Draggable from 'react-draggable';


function Menu() {
  return (
    <Draggable>
    <div className='menu-container'>
      <div className='menu-panel'>
        <div>
        
        </div>
      </div>
      <Link to="/"  className="about-button"><span className="about-span"></span>About</Link>
      <Link to="/d3"  className="d3-button"><span className="about-span"></span>D3</Link>
    </div>
    </Draggable>
  );
}

export default Menu;