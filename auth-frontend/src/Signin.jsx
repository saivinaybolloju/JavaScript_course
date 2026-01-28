import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../src/App.css"

function Signin() {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

    try{

      const res = await fetch("http://localhost:5000/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });


      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/profile");
      } else {
        alert(data.msg || "Invalid credentials");
      }
      console.log(data);
    }catch(err){
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input name="mail" type="mail" onChange={handleChange} required />

        <label>Password:</label>
        <input name="password" type="password" onChange={handleChange} required />

        <button type="submit">Sign In</button>
      </form>

      <div className="link">
        Don't have an account? <a href="/signup">Sign Up here</a>
      </div>
    </div>
  );
}

export default Signin;
