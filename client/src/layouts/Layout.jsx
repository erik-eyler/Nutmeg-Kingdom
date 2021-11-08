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
            <Link to='/plants/new'>Add Plant</Link>
            {/* do you need to switch the order of these links? */}
          </div>
        )}
      </header>
      {children}
    </div>
  );
}
