import './App.css';
import Layout from './layouts/Layout';
import { Route, Switch, useHistory } from 'react-router-dom'
import Login from './screens/Login';
import { loginUser, registerUser } from './services/auth';
import { useState, useEffect } from 'react';
import Register from './screens/Register'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData)
    history.push('/')
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/')
  }

  return (
    <div className="App">
      <Layout currentUser={currentUser}>
        <Switch>
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister}/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
