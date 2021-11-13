import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import NotFound from './components/notFound/NotFound';


function App() {
  return  (   
    <div>
    {/* nueva forma de crear rutas con el react-router-dom 6.0.1 */}
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
