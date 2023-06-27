import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route} from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/edit/:id" element={<Edit />}/>
      </Routes>
  
    </div>
  );
}

export default App;
