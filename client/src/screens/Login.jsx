import { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <div className="helper-container">
        <form onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin(formData)
        }}>
          <h3 className="user-form-heading">Login</h3>
          <label className="user-label">
            Username:
          <input
            className="user-input"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
          </label>
          <label className="user-label">
            Password:
          <input
            className="user-input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          </label>
          <Link to="/register">Register</Link>
          <button>Submit</button>
          </form>
        </div>
    </div>
  );
}
