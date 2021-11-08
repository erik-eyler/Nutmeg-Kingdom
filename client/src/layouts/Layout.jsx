import {Link} from 'react-router-dom'

export default function Layout(props) {
  const { children, currentUser, handleLogout } = props;


  return (
    <div>
      <header>
        <h1>Nutmeg Kingdom</h1>
        {currentUser ? (
          <div>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to='/login'>Login/Register</Link>
        )}
        <hr />
        {currentUser && (
          <div>
            <Link to='/plants'>Plants</Link>
            <Link to='/create'>Add Plant</Link>
          </div>
        )}
      </header>
      {children}
    </div>
  );
}
