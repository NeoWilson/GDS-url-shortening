import logo from './urlshortener.png'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import MyForm from "./components/MyForm"

function App() {
  return (
    //<div>
    //  <MyForm />
    //</div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <p>
          <MyForm />
        </p>
      </header>
    </div>
    
  );
}

export default App;
