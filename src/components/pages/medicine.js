
import React from 'react';
import Draggable from 'react-draggable';
import DotPanel from '../decorators/dotsPanel';

function Medicine() {
  return (
    <>
    <Draggable>
    <div className="content-box">
      <div className='window-panel'>
        <DotPanel/>
        <p>Medicine</p>
        <span></span>
      </div>
    </div>
    </Draggable>
    </>
  );
}

export default Medicine;