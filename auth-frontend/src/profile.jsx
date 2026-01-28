import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/signin");
      return;
    }

    fetch("http://localhost:5000/user/profile", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Unauthorized");
        }
        return res.json();
      })
      .then(data => setUser(data))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/signin");
      });

  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };


  if (!user) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <h1>Profile</h1>
      <p>Name: {user.userName}</p>
      <p>Email: {user.mail}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
    
  );
}

export default Profile;
