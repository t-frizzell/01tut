import logo from './logo.svg';
import './App.css';

// Components are represented by functions
function App() {
  // Crate a new javascript variable, can be used inside JSX return statement.
  // JSX renders strings and integers as text in the web view.
  const name = "Drake";
  const number = 10;
    // To use these variables inside JSX, must use { }.
      // The use of { } signifies the use of a Javascript expression.

  /* 
  Functions are created using const keyword
  Standard practice is to create functions using arrow functions = () => {}
  */
  const handleNameChange = () => {
    const names = ["bob","kevin","dave"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }


  // The return statement inside functions (or "components") returns JSX.
  // JSX allows the use of Javascript expressions (ex: {logo}).
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to see changes.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{/* This is how to include a comment, using JS Expression in JSX */}</p>
        <p>
          {/* Functions are called in expressions */}
          {handleNameChange()}
          </p>
        <p>
          {/* Variables can be passed into JSX with Javascript expressions */}
          String: {name} 
          Integer: {number}
          Array: [0,1,2]
          Javascript expression array: {[0,1,2]}
        </p>
      </header>
    </div>
  );
}

// 
export default App;
