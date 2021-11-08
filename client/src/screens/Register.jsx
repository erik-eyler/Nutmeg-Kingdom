import './Register.css'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="register-container">
      <div className="helper-container">
        <form onSubmit={(e) => {
          e.preventDefault();
          props.handleRegister(formData)
        }}>
          <h3 classname="user-form-heading">Register</h3>
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
            Email:
          <input
            className="user-input"
            type="text"
            name="email"
            value={email}
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
          <Link to="/login" classname="login-link">Already have an account? Login</Link>
          <button className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}