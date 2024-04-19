import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import Landing from '../assests/landing.jpg'
import '../css/Login.css'

export default function LoginSignup(){
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
    });

    const [formErrors, setFormErrors] = useState({
      usernameError: "",
      emailError: "",
      passwordError: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
      let isValid = true;
      const errors = {};

      if (!formData.username) {
        errors.usernameError = "Username is required";
        isValid = false;
      }

      if (!formData.email) {
        errors.emailError = "Email is required";
        isValid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        errors.emailError = "Invalid email address";
        isValid = false;
      }

      if (!formData.password) {
        errors.passwordError = "Password is required";
        isValid = false;
      }

      setFormErrors(errors);
      return isValid;
    };

    const handleClick = (e) =>{
      e.preventDefault();
      if (validateForm()) {
        // Form is valid, proceed with login/signup logic
        alert(`Welcome: ${formData.username}`);
        // Navigate or perform other actions here
      } else {
        // Form is not valid, show error messages or handle accordingly
        alert("Please fill in all fields correctly.");
      }
    };

    return (
      <div id='login_page' className='container'>
        <img src={Landing} alt="Landing"></img>
        <form>
          <div className='inputs'>
            <div className="text">Sign Up/Login</div> 
            <div className="input">
              <FaUser className='icon'/>
              <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange}/>
              <div className="error">{formErrors.usernameError}</div>
            </div>
            <div className='input'>
              <CiMail className='icon'/>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
              <div className="error">{formErrors.emailError}</div>
            </div>
            <div className='input'>
              <FaLock className='icon'/>
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
              <div className="error">{formErrors.passwordError}</div>
            </div>
            <a className="forgot-password">Lost Password<span>Click Here</span></a>
            <div className="submit-continer">
              <button className="submit" onClick={handleClick}>Sign up</button>
              <button className="submit" onClick={handleClick}>Login</button>
            </div>
          </div>
        </form>
      </div>
    );
}
