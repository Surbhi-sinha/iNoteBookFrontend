import React, { useState } from 'react'

const Login = () => {

      const [credentials,setCredentials] = useState({email:"", password:""})
      
      const handleSubmit = async (e) => {
            e.preventDefault();
            //addnote api call
            const response = await fetch("http://localhost:5000/api/auth/login", {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json"
                  },
                  body:JSON.stringify({email:credentials.email , password:credentials.password})
            });
            const json = await response.json();
            console.log(json)
            if(json.success) {
                  //save theauth auth token and redirect other wise alert
                  // localStorage.setItem('token', json.auth_token);
            }
            else{
                  // alert("invalid credentials");
                  console.log("invalid credentials");
            }
      }
      const onChange = (e) =>{
            setCredentials({...credentials, [e.target.name]:e.target.value}) //whenever it changes the value in the field then the perticular named for the specific work.
      }
      return (
            <div className="container ">
                  <form  onSubmit={handleSubmit}>
                        <div className="mb-3">
                              <label htmlFor="email" className="form-label">Email address</label>
                              <input type="email" className="form-control" placeholder='example@domain.com' name="email" id="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange}/>
                              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                              <label htmlFor="password" className="form-label">Password</label>
                              <input type="password" placeholder='Password' className="form-control" name="password" id="password" value={credentials.password} onChange={onChange}/>
                        </div>
                        <div className="mb-3 form-check">
                              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                              <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                  </form>
            </div>
      )
}

// 
// email
// "govind@gmail.com"
// password
// "dastu"

export default Login
