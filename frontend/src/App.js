import './App.css';
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import ForgotPassword from './components/ForgetPassword';
import ForgotPassword2 from './components/ForgetPassword2';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Register} />
        <Route path='/login' component={Login} />
        <Route path = '/home' component={Home} />
        <Route path = '/forgotpassword' component={ForgotPassword} />
        <Route path = '/forgotpassword2' component={ForgotPassword2} />
      </Switch>
    </Router>
  );
}

export default App;
