import React from 'react'
import { Link } from 'react-router-dom'
import Draggable from 'react-draggable';
import DotPanel from './decorators/dotsPanel';

import AboutImage from '../images/about-icon.png'
import BusinessImage from '../images/business.png'
import ChartImage from '../images/chart.png'
import Map from '../images/map.png'

function Menu() {
  return (
    <Draggable>
    <div className='menu-container'>
      <div className='menu-panel'>
        <DotPanel/>
      </div>
      <div className='link-container'>
        <Link
          to="/"
          className="icon-button">
          <img src={AboutImage} width="100" height="100" alt="React" />
          about
        </Link>
        <Link
          to="/business"
          className="icon-button">
          <img src={BusinessImage} width="100" height="100" alt="React" />
          business
        </Link>
        <Link
          to="/maps"
          className="icon-button">
          <img src={Map} width="100" height="100" alt="React" />
          maps
        </Link>
        <Link
          to="/medicine"
          className="icon-button">
          <img src={ChartImage} width="100" height="100" alt="React" />
          medicine
        </Link>
      </div>
    </div>
    </Draggable>
  );
}

export default Menu;