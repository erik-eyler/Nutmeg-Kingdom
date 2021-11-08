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
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleRegister(formData)
    }}>
      <h3>Register</h3>
      <label>
        Username:
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      </label>
      <label>
        Email:
      <input
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
      />
      </label>
      <label>
        Password:
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      </label>
      <Link to="/login">Already have an account? Login</Link>
      <button>Submit</button>
    </form>
  );
}