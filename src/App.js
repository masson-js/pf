
import './App.css';

import Menu from "./components/menuWindow";
import UpperPanel from './components/upperPanel';
import Pages from './components/pagesWindow';

function App() {
  return (
    <div className="App">
      <UpperPanel/>
      <div className='container'>
        <Menu/>
        <Pages/>
      </div>
    </div>
  );
}

export default App;
