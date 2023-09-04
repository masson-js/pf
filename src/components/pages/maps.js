
import React from 'react';
import Draggable from 'react-draggable';
import DotPanel from '../decorators/dotsPanel';

function Maps() {
  return (
    <>
    <Draggable>
    <div className="content-box maps">
      <div className='window-panel'>
        <DotPanel/>
        <p>Maps</p>
        <span></span>
      </div>
    </div>
    </Draggable>
    </>
  );
}

export default Maps;