import './Layout.css'
import { Link } from 'react-router-dom'

export default function Layout(props) {
  const { children, currentUser, handleLogout } = props;


  return (
    <div>
      <header>
        <h1>Nutmeg Kingdom</h1>
        {currentUser ? (
          <div className="layout-menu-plants">
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to='/login'>Login/Register</Link>
        )}
        <hr />
        {currentUser && (
          <div className="layout-menu-plants">
            <Link to='/plants'>Plants</Link>
            <br />
            <Link to='/plants/new'>Add Plant</Link>
            {/* do you need to switch the order of these links? */}
          </div>
        )}
      </header>
      <div className="layout-children">
        {children}
      </div>
    </div>
  );
}
