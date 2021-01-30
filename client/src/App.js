
import Login from './components/Login';
import Register from './components/Register';
import PageNotFound from './components/PageNotFound';
import List from './components/List';

import { Provider } from 'react-redux';
import store from './store/store';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  
  return (
    <div>
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
            <Route exact={true} path='/' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/list' component={List} />
            <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>  
  );
}

export default App;
