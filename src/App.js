import './App.css';
import NavBar from './components/Header/NavBar';
import Marks from './components/Marks/Marks';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Pricing></Pricing>
      <Marks></Marks>
    </div>
  );
}

export default App;
