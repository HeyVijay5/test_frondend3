// Signin.js
import React, { useContext, useState } from 'react';
import './Signin.css';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext.js';
import Switch from '@material-ui/core/Switch';

function Signin() {
  const [isStudent, setIsStudent] = useState(true);
  const [admissionId, setAdmissionId] = useState();
  const [employeeId, setEmployeeId] = useState();
  const [password, setPassword] = useState();
  const [isAdmin, setIsAdmin] = useState(false); // State to track admin checkbox
  const [error, setError] = useState("");
  const { dispatch } = useContext(AuthContext);

  const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://readify-backend.onrender.com/api/auth/signin", userCredential);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

      // Check if isAdmin is true and the user is an admin
      if (isAdmin && res.data.isAdmin) {
        alert("Login successful as admin!");
        // Navigate to admin dashboard (you may need to adjust the route)
        // You can use react-router-dom's useHistory for navigation
        // history.push("/adminDashboard");
      } else {
        // Handle navigation for regular user (you may need to adjust the route)
        // history.push("/memberDashboard");
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
      setError("Wrong Password or Username");
    }
  }

  const handleForm = (e) => {
    e.preventDefault();
    isStudent
      ? loginCall({ admissionId, password, isAdmin }, dispatch)
      : loginCall({ employeeId, password, isAdmin }, dispatch);
  }

  return (
    <div className='signin-container'>
      <div className="signin-card">
        <form onSubmit={handleForm}>
          <h2 className="signin-title"> Log in</h2>
          <p className="line"></p>
          <div className="persontype-question">
            <p>Are you a Staff member ?</p>
            <Switch
              onChange={() => setIsStudent(!isStudent)}
              color="primary"
            />
          </div>
          {isStudent && (
            <div className="admin-checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={isAdmin}
                  onChange={() => setIsAdmin(!isAdmin)}
                />
                Admin
              </label>
            </div>
          )}
          <div className="error-message"><p>{error}</p></div>
          <div className="signin-fields">
            <label htmlFor={isStudent ? "admissionId" : "employeeId"}>
              <b>{isStudent ? "Admission ID" : "Employee ID"}</b>
            </label>
            <input
              className='signin-textbox'
              type="text"
              placeholder={isStudent ? "Enter Admission ID" : "Enter Employee ID"}
              name={isStudent ? "admissionId" : "employeeId"}
              required
              onChange={(e) => { isStudent ? setAdmissionId(e.target.value) : setEmployeeId(e.target.value) }}
            />
            <label htmlFor="password"><b>Password</b></label>
            <input
              className='signin-textbox'
              type="password"
              minLength='6'
              placeholder="Enter Password"
              name="psw"
              required
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>
          <button className="signin-button">Log In</button>
          <a className="forget-pass" href="#home">Forgot password?</a>
        </form>
        <div className='signup-option'>
          <p className="signup-question">Don't have an account? Contact service</p>
        </div>
      </div>
    </div>
  )
}

export default Signin;