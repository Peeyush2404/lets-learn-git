import React from 'react';

function Manage() {
  return <>
      <div className='container shadow-lg p-3'>
      <div className='row p-3'>
          <div className='col'>
          <span className="badge bg-secondary">Training Courses</span>
          </div>
          <div className='col'>
          <span className="badge bg-secondary">Department</span>
          </div>
          <div className='col'>
          <span className="badge bg-secondary">Location</span>
          </div>
          <div className='col'>
          <span className="badge bg-secondary">Brochure</span>
          </div>
      </div>
      <div className='row'>
          <div className='col'>
          <select className="form-select" aria-label="Default select example">
        <option selected>Select all</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
          </div>
          <div className='col'>
          <select className="form-select" aria-label="Default select example">
        <option selected>Select all</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select> 
          </div>
          <div className='col'>
          <select className="form-select" aria-label="Default select example">
        <option selected>Select all</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select> 
          </div>
          <div className='col'>
          <div className="mb-3">
        <input className="form-control" type="file" id="formFile" />
      </div>
         </div>
      </div>
      <div className='container p-3 text-center'>
      <button className='btn btn-primary'>
        Submit
      </button>
      </div>
      
      </div>
  </>;
}

export default Manage;
