import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Dashboard from './Dashboard';
const Login = () => {
  return <>
  <div className='container my-5 rounded p-3' style={{width:"400px",backgroundColor:"grey"}} >
  <form action="/login" method="post">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Remember Password</label>
        </div>
        <div  className='my-2 text-secondary' ><Link to="/register">Sign Up</Link></div>
        <Link style={{textDecoration:'none'}} to="/dashboard"><button
                    className="btn btn-outline-primary ml-3"
                    type="submit" >
                   Submit 
                  </button></Link>
      </form>
  </div>
  <Outlet/>
     
  </>;
};

export default Login;
