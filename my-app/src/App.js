import './App.css';
import Main from './Components/Main';
import Login from './Components/Login';
import {Route,BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
 <div className="App"></div>
   <Route path="/" exact component={Login}/>
   <Route path="/signup" component={Main}/>
    </Router>
   
   
  );
}

export default App;
