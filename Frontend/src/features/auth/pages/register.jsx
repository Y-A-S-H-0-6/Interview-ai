import React from "react";
import "../auth.form.scss";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast"

const Register = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const { loading, handleRegister } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await handleRegister({ username, email, password });
       toast.success("Registered successfully!")
    navigate("/")
    } catch (err) {
      toast.error("Registration failed! Please try again")
    
  }
}

  if (loading) {
    return <div>Loading...</div>;
  }

 

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              autoComplete="off"
              onChange={(e)=>{setusername(e.target.value)}}
              type="text"
              id="username"
              name="name"
              placeholder="Enter username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              autoComplete="off"
              onChange={(e)=>{setemail(e.target.value)}}
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              autoComplete="new-password"
              onChange={(e)=>{setpassword(e.target.value)}}
              type="password"
              id="password"
              name="password"
              placeholder="Enter password "
            />
          </div>

          <button className="button primary-button">Register</button>
        </form>

        <p>
          Already have an account? <Link to={"/login"}>Login</Link>{" "}
        </p>
      </div>
    </main>
  );
};

export default Register;
