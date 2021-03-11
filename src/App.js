import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ActorRoute from './components/actor/index';
import SettingComponent from './components/setting';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ActorRoute}/>
        <Route exact path="/director" component={ActorRoute}/>
        <Route exact path="/setting/mic" component={SettingComponent}/>
        <Route exact path="/setting/create" component={SettingComponent}/>
        <Route exact path="/setting/confirm" component={SettingComponent}/>
      </Switch>
    </Router>
  );
}

export default App;
