
import './App.css';
import Header from'./Header';
import Cart from'./Cart';
import Home from'./Home';
import Topnavbar from './Topnavbar';
import Bottomnavbar from './Bottomnavbar';
import Signin from'./Signin';
import Topfooter from'./Topfooter';
import Languagefooter from'./Languagefooter';
import Bottomfooter from'./Bottomfooter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
   <Router>
   <div className="App">
   <Header/>
   <Topnavbar/>
   <Bottomnavbar/>
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />


    </Routes>
    <Signin/>
   <Topfooter/>
   <Languagefooter/>
   <Bottomfooter/>
      
    </div>
    </Router>
  );
}

export default App;
