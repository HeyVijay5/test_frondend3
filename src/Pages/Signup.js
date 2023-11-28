// frontend/Signup.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext.js';

function Signup() {
  const history = useHistory();
  const [userType, setUserType] = useState('student');
  const [userFullName, setUserFullName] = useState('');
  const [admissionId, setAdmissionId] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [photo, setPhoto] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { dispatch } = useContext(AuthContext);

  const signupCall = async (userData, dispatch) => {
    dispatch({ type: 'SIGNUP_START' });
    try {
      const res = await axios.post('https://readify-backend.onrender.com/api/auth/register', userData);
      dispatch({ type: 'SIGNUP_SUCCESS', payload: res.data });
      alert('User registered successfully!');
      history.push('/signin');
    } catch (err) {
      dispatch({ type: 'SIGNUP_FAILURE', payload: err });
      setError('Sign Up Failed');
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const userData = {
      userType,
      userFullName,
      admissionId,
      employeeId,
      age,
      gender,
      dob,
      address,
      mobileNumber,
      photo,
      email,
      password,
    };

    signupCall(userData, dispatch);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <form onSubmit={handleForm}>
          <h2 className="signup-title">Sign Up</h2>
          <p className="line"></p>
          <div className="persontype-question">
            <p>Are you a Staff member?</p>
            <label>
              Student
              <input
                type="radio"
                name="userType"
                value="student"
                checked={userType === 'student'}
                onChange={() => setUserType('student')}
              />
            </label>
            <label>
              Staff
              <input
                type="radio"
                name="userType"
                value="staff"
                checked={userType === 'staff'}
                onChange={() => setUserType('staff')}
              />
            </label>
          </div>
          <div className="error-message">
            <p>{error}</p>
          </div>
          <div className="signup-fields">
            <label htmlFor="userFullName">
              <b>Full Name</b>
            </label>
            <input
              className="signup-textbox"
              type="text"
              placeholder="Enter Full Name"
              name="userFullName"
              required
              onChange={(e) => setUserFullName(e.target.value)}
            />
            <label
              htmlFor={userType === "student" ? "admissionId" : "employeeId"}
            >
              <b>{userType === "student" ? "Admission ID" : "Employee ID"}</b>
            </label>
            <input
              className="signup-textbox"
              type="text"
              placeholder={
                userType === "student"
                  ? "Enter Admission ID"
                  : "Enter Employee ID"
              }
              name={userType === "student" ? "admissionId" : "employeeId"}
              required
              onChange={(e) =>
                userType === "student"
                  ? setAdmissionId(e.target.value)
                  : setEmployeeId(e.target.value)
              }
            />
            <label htmlFor="age">
              <b>Age</b>
            </label>
            <input
              className="signup-textbox"
              type="number"
              placeholder="Enter Age"
              name="age"
              required
              onChange={(e) => setAge(e.target.value)}
            />
            <label htmlFor="gender">
              <b>Gender</b>
            </label>
            <input
              className="signup-textbox"
              type="text"
              placeholder="Enter Gender"
              name="gender"
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="dob">
              <b>Date of Birth</b>
            </label>
            <input
              className="signup-textbox"
              type="text"
              placeholder="Enter Date of Birth"
              name="dob"
              onChange={(e) => setDob(e.target.value)}
            />
            <label htmlFor="address">
              <b>Address</b>
            </label>
            <input
              className="signup-textbox"
              type="text"
              placeholder="Enter Address"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <label htmlFor="mobileNumber">
              <b>Mobile Number</b>
            </label>
            <input
              className="signup-textbox"
              type="number"
              placeholder="Enter Mobile Number"
              name="mobileNumber"
              required
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <label htmlFor="photo">
              <b>Photo</b>
            </label>
            <input
              className="signup-textbox"
              type="text"
              placeholder="Enter Photo URL"
              name="photo"
              onChange={(e) => setPhoto(e.target.value)}
            />
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              className="signup-textbox"
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              className="signup-textbox"
              type="password"
              minLength="6"
              placeholder="Enter Password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
