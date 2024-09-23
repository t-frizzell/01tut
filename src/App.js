// This component can be treated as the "Parent" component for all other components. 

//import logo from './logo.svg'; // Remove Logo
import './App.css';

// import the other React Components
import Header from './Header'; // Path is relative to this file's directory
import Content from './Content';
import Footer from './Footer';

// Components are represented by functions
// Components use Arrow Functions by standard
const App = () => {
  // Crate a new javascript variable, can be used inside JSX return statement.
  // JSX renders strings and integers as text in the web view.
  const name = "Drake";
  const number = 10;
    // To use these variables inside JSX, must use { }.
      // The use of { } signifies the use of a Javascript expression.


  // The return statement inside functions (or "components") returns JSX.
  // JSX allows the use of Javascript expressions (ex: {logo}).
    // Expressions can use data types, variables, functions
  return (
    <div className="App">
      <Header />   
      <Content />
      <Footer />
    </div>
  );
}

// Export required for imports into other components
export default App;
