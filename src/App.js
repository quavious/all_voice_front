import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ActorRoute from './components/actor/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ActorRoute}/>
      </Switch>
    </Router>
  );
}

export default App;
