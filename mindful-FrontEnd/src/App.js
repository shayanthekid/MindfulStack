
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './components/Login';


function App() {

  return (
    <Router>
    <div className="App">  
      <Navbar />
   <div className="content">
   <Switch>
     <Route exact path="/">
      <Home />
     </Route>
     <Route path="/events">
      <Home />
     </Route>
      <Route path="/login">
      <Login />
     </Route>
   </Switch>

   </div>
    </div>
    </Router>
  );
}

export default App;
