import './App.css';
import Birthdays from './components/Birthdays';

function App() {
  return (
    <div className="App">
      <Birthdays lastName = {"Doe"} firstName = {"Jane"} ages = {45} hairColor = {"Black"} />
      <Birthdays lastName = {"Smith"} firstName = {"John"}  ages = {88} hairColor = {"Brown"}/>
    </div>
  );
}

export default App;
