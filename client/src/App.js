import './App.css';
import Layout from './layouts/Layout';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/login'>
            <h1>Login</h1>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
