import React from "react";
import "../auth.form.scss";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast" 

const Login = () => {
  const { loading, handleLogin } = useAuth();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await handleLogin({ email, password });
     toast.success("Login successful!")
    navigate("/")  // only runs if no error
  } catch (err) {
    toast.error("Login failed! Invalid email or password")
  
  }
};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              autoComplete="off"
              onChange={(e) => {
                setemail(e.target.value);
              }}
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
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              type="password"
              id="password"
              name="password"
              placeholder="Enter password "
            />
          </div>

          <button className="button primary-button">Login</button>
        </form>

        <p>
          Don't have an account? <Link to={"/register"}>Register</Link>{" "}
        </p>
      </div>
    </main>
  );
};

export default Login;
