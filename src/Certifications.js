import React from 'react';

function Certifications() {
  return <>
      <div className='container shadow-lg p-3 mb-5 bg-white rounded'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
         
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-decoration-underline" aria-current="page" href="#">Overview</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-decoration-underline" href="#">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-decoration-underline" href="#">Pricing</a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
      <div className='container p-3 mx-2'>
          <div className='row p-3 mx-auto '>
              <div className='col border border-primary border-4 rounded  text-center'>
                 0
                 <br/>
                 <strong>Course in Progress</strong>
              </div>
              <div className='col border border-primary border-4 rounded  text-center'>
                 0
                 <br/>
                 <strong>completed Courses</strong>
              </div>
              <div className='col border border-primary border-4 rounded  text-center'>
                 0h 0m
                 <br/>
                 <strong>training time</strong>
              </div>
              <div className='col border border-primary border-4 rounded  text-center'>
                 0
                 <br/>
                 <strong>badges</strong>
              </div>
          </div>
      </div>
      <div className='container text-center p-3 ' style={{backgroundColor:"#ccccff"}}>
          
          <img src={"/Images/certificate.png"} alt='certificate' style={{width:"500px",height:"200px"}}/>
          <p className='font-weight-bolder'><h3 className='p-3 '>You do not have any certifications</h3></p>
      </div>
      
      </div>
  </>;
}

export default Certifications;
