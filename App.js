
import Login from './login';
import AdminScreen from'./AdminScreen';
import Registration from './Registration';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerScreen from './CustomerScreen'; 

import Details from './CutomerDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/customer" >

          <CustomerScreen/>
          <Details/>
        </Route>
        
        <Route exact path="/admin">
          <AdminScreen />
        </Route>
        <Route exact path="/register">
          <Registration />
        </Route>
      </Switch>
   </Router>
  );
}

export default App;
