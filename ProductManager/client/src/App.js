import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ManagerForm from './components/ManagerForm';
import Details from './components/Details';
import Edit from './components/Edit';
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<ManagerForm />} />
        <Route path="/details/:id" element = {<Details />} />
        <Route path="/edit/:id" element = {<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
