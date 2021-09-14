import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import Dash from './components/Dash';
import LeftSideBar from './components/LeftSideBar';
import SendMoney from './components/SendMoney';
import RightSideBar from './components/RightSideBar';
import SecureChannel from './components/SecureChannelComponents/SecureChannel';
import './styles/App.css'



function App() {
  return (
    <div className="App">
        
        {/* route setup */}

        <Router>
          <Switch>
            <Route exact path='/'> <Login></Login> </Route>
            <Route path='/signup'> <SignUp></SignUp> </Route>
            <Route path='/dash'> <Dash><LeftSideBar></LeftSideBar><SendMoney></SendMoney><RightSideBar></RightSideBar></Dash> </Route>
            <Route path='/secureChannel'> <Dash><LeftSideBar></LeftSideBar> <SecureChannel></SecureChannel> <RightSideBar></RightSideBar></Dash> </Route>
            {/* <Route path='/virtualcard'> <Dash> <LeftSideBar></LeftSideBar> virtual card <RightSideBar></RightSideBar> </Dash> </Route> */}
          </Switch>
        </Router>


    </div>
  );
}

export default App;
