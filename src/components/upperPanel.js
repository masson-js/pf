
function UpperPanel() {
  const date = new Date();
    const showTime = date.getHours()
        + ':' + date.getMinutes()
        + ":" + date.getSeconds();

  return (
    <div className='upper-panel'>
      <div className='time-box'>
        <span> {showTime}</span>
      </div>
    </div>
  );
}

export default UpperPanel;