import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import { Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <h1><Link to='/cart'>CART</Link></h1>
      <h1><Link to='/'>HOME</Link></h1>
      <Routes/>
    </div>
  );
}

export default App;
