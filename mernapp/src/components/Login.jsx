import React from 'react'
import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import DecryptedText from '../Animate/DecryptedText';

const Login = () => {
  const[credit,setCredit]=useState({email:"",password:""});
  let navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("https://gofood-fast-deliver-backend.onrender.com/api/loginuser", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credit)
        });
    
        const json = await response.json();
        console.log(json);
    
        if (!json.success) {
          alert("Enter Valid Credentials");
        }
        if(json.success){ 
        localStorage.setItem("authToken",json.authToken);
        setCredit({email:"",password:""});
        navigate("/")
      }

      } catch (error) {
        console.error("Fetch error:", error);
        alert("Failed to connect to the server");
      }

    };
  
    const onchange = (event) =>{
      setCredit({ ...credit,[event.target.name]:event.target.value})
    }
    

  return (
    <div style={{minHeight:"90vh",display:"flex",justifyContent:"space-evenly",alignItems:"center"}} className='container'>
        <div className='Text fw-bold display-1 text-success'>
        <DecryptedText
text="Sign In Now !!"
speed={100}
maxIterations={15}
characters="ABCD1234!?"
className="revealed"
revealDirection="center"
useOriginalCharsOnly="true"
parentClassName="all-letters"
encryptedClassName="encrypted"
animateOn="view"

/> 
    </div>
    
    
        <div className='Input'>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control bg-dark" id="exampleFormControlInput1" placeholder="Enter Your Email-Id" name='email' value={credit.email} onChange={onchange}/>
        </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
        <input type="password" className="form-control bg-dark" id="exampleFormControlInput1" placeholder="Enter Your Password" name='password' value={credit.password} onChange={onchange}/>
        </div>

        <button type="submit" className='m-3 btn btn-success'>Submit</button>
        <Link to="/SignUp" className='m-3 btn btn-danger'>Don't Have An Account</Link>
        </form>
        </div>
        </div>
  )
}

export default Login
