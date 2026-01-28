import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../src/App.css"

function Signup() {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    mail: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    
    
    const data = await res.json();
    if (res.ok) {
      navigate("/signin");
    } else {
      console.log(data);
    }
    
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="userName" onChange={handleChange} required />

        <label>Email:</label>
        <input name="mail" type="email" onChange={handleChange} required />

        <label>Password:</label>
        <input name="password" type="password" onChange={handleChange} required />

        <button type="submit">Sign Up</button>
      </form>

      <div className="link">
        Already have an account? <a href="/signin">Login here</a>
      </div>
    </div>
  );
}

export default Signup;
