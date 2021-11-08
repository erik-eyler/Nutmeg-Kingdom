import './App.css';
import Layout from './layouts/Layout';
import { Route, Switch } from 'react-router-dom'
import Login from './screens/Login';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
