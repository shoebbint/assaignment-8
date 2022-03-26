import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Market from './Components/Market/Market';
import { Row } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <div>
        <h1>Moto Shop Bangladesh</h1>
      </div>
      <Market></Market>


    </div>
  );
}

export default App;
