import React from 'react';
function Register() {
 
  return <div>
      <div className='container bg-secondary my-3 p-3 rounded'>
      <form >
      <div className='mb-3'>
        <label htmlFor='exampleInputUsername' className='form-label'>Username</label>
        <input type="text" className="form-control" name='name' id="exampleInputUsername" />
    </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' id="exampleInputEmail1"  ara-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" >Confirm Password</label>
          <input type="password" className="form-control" name="cpassword"  id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input"   id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" >Register</button>
      </form>

      </div>
  </div>;
}

export default Register;
