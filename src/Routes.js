import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';
import { About } from './layout/About';
import { Home } from './layout/Home';

function Routes() {
  return (
    <Router>
      <Switch>
        <GlobalContext>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </GlobalContext>
      </Switch>
    </Router>
  );
}

export default Routes;
