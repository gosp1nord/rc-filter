import logo from './logo.svg';
import './App.css';
import { dataCards } from './components/dataCards';
import { Portfolio } from './components/PortfolioCC';


function App() {
  return (
    <div className="container">
      <div className='block-portfolio'>
      <Portfolio cards={dataCards}/>
      </div>
    </div>
  );
}

export default App;
