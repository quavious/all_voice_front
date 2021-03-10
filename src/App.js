import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ActorRoute from './components/actor/index';
import MikeComponent from './components/setting/mike';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ActorRoute}/>
        <Route exact path="/setting/mike" component={MikeComponent}/>
      </Switch>
    </Router>
  );
}

export default App;
