import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>BearPool</code> under development
        </p>
        <a
          className="App-link"
          href="https://github.com/COS420-Fall23/Team-G"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to repository
        </a>
      </header>
    </div>
  );
}

export default App;
