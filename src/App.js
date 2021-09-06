import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import './styles/App.css'



function App() {
  return (
    <div className="App">
        
        {/* route setup */}

        <Router>
          <Switch>
            <Route exact path='/'> <Login></Login> </Route>
            <Route path='/signup'> <SignUp></SignUp> </Route>
          </Switch>
        </Router>


    </div>
  );
}

export default App;
