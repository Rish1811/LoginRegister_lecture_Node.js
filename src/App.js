
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginpage from './component/login';
import Register from './component/register';
import Dashboard from './component/dashboard';
import Navigator from './component/navigator';


function App() {
  return (
    <Router>
         <Navigator/>
          <Routes>
         <Route path="/" element={<Loginpage/>}/>
         <Route path="/registor" element={<Register/>}/>  
         <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>  
    
    </Router>
  );
}

export default App;
