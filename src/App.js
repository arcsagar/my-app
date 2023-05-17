import logo from './logo.svg';
import './App.css';
import Sub from './components/Sub/Sub';
import Add from './components/Add/Add';

function App() {
  return (
   <div>
     <h1> First React project 3</h1>
  <p> test p tag </p>

  <Add a='2' b='2' ></Add>
  <Sub a='2' b='2' />
   </div>
  );
}

export default App;
