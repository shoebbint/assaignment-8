import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Market from './Components/Market/Market';
import Cart from './Components/cart/Cart';



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
