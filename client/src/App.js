import './App.css';
import Layout from './layouts/Layout';
import { Route, Switch } from 'react-router-dom'
import Login from './screens/Login';
import { loginUser } from './services/auth';
import { useState, useEffect } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData)
  };

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
