
import React from 'react';
import Draggable from 'react-draggable';
import DotPanel from '../decorators/dotsPanel';

function Business() {
  return (
    <>
    <Draggable>
    <div className="content-box d3">
      <div className='window-panel'>
        <DotPanel/>
        <p>Business</p>
        <span></span>
      </div>
    </div>
    </Draggable>
    </>
  );
}

export default Business;