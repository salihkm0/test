import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='leftSide'>
       trial side A
      </div>
      <div className='rightSide'>
          <div className='hourlyForcast'>
          </div>
          <div className='10dayForcast'></div>
          <div className='uvIndex'></div>
          <div className='wind'></div>
      </div>
    </div>
  );
}

export default App;
