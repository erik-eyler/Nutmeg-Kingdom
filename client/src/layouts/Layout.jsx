import {Link} from 'react-router-dom'

export default function Layout(props) {
  return (
    <div>
      <header>
        <h1>Nutmeg Kingdom</h1>
        <Link to='/login'>Login/Register</Link>
        <hr />
      </header>
      {props.children}
    </div>
  )
}
