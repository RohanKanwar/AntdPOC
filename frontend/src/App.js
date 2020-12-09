import './App.css';
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Register} />
        <Route path='/login' component={Login} />
        <Route path = '/home' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
