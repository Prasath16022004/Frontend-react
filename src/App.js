import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"




import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import Form from "./components/Form";
// import LoginForm from "./components/loginform";
import Login from "./components/login";

function App() {
  return (
    <Router>
    <Navbar/>
    <div className="container main"> 
    <Routes>

    <Route path="/" element={<Home />}/>
    <Route path="/recipes" element={<Recipes/>}/>
    <Route path="Settings" element={<Settings/>}/>
    <Route path="/form" element={<Form/>}/>
    <Route path="/login" element={<Login/>}/>
    
    </Routes>
    
    
    
    
    </div>
    <Footer/>
    
    
    </Router>
    
    
    
    
    )
  }
  
  export default App;
  
  // <Route path="/loginform" element={<LoginForm/>}/>