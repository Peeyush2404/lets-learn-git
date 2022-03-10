import React from "react";
import Footer from "./Footer";
import { Outlet,Link } from "react-router-dom";
const Pricing = () => {
    return ( <>
    <div id="pricing" >
       <section className="p-3" style={{ backgroundColor: "#ccccff" }}><div className="container mt-3 p-3 text-center ">
        <span
          className="badge shadow-lg rounded-pill bg-secondary mb-3"
          style={{ fontSize: "25px" }}
        >
          Our Plans
        </span>

        <div className="row">
          <div className="col d-flex align-items-stretch">
            <div className="card  shadow-lg text-center">
              <div className="card-header text-secondary">
                <strong>
                  <h3>Free</h3>
                </strong>
              </div>
              <div className="card-body">
                <h5 className="card-title text-danger">$0/month</h5>

                <a href="#" >
                <Link style={{textDecoration:'none'}} to="/login"><strong>Get Started</strong></Link>
                </a>
                <p className="card-text p-4">
                <ul className="p-3">
                    <strong >
                      <li className="p-2">Upto 10 users</li>
                      <li className="p-2">Upto 10 courses</li>
                      
                      <li className="p-2">Online course builder</li>
                      <li className="p-2"> Create Learning Path</li>
                      <li className="p-2">Space Limited upto 1TB</li>
                      <li className="p-2">Unlimited Email Support</li>
                    </strong>
                  </ul>
                </p>
              </div>
              <div className="card-footer text-muted">2 days ago</div>
            </div>
          </div>
          <div className="col d-flex align-items-stretch">
            <div className="card shadow-lg text-center">
              <div className="card-header text-secondary">
                <strong>
                  <h3>Basic</h3>
                </strong>
              </div>
              <div className="card-body">
                <h5 className="card-title text-danger">$0/month</h5>

                <a href="#" >
                <Link style={{textDecoration:'none'}} to="/login"><strong>Get Started</strong></Link>
                
                </a>
                <p className="card-text p-4">
                <ul className="p-3">
                    <strong >
                      <li className="p-2">Upto 50 users</li>
                      <li className="p-2">Upto 50 courses</li>
                      <li className="p-2">Online course builder</li>
                      <li className="p-2"> Create Learning Path</li>
                      <li className="p-2">Space Limited upto 2TB</li>
                      <li className="p-2">Unlimited Email Support</li>
                    </strong>
                  </ul>
                </p>
              </div>
              <div className="card-footer text-muted">2 days ago</div>
            </div>
          </div>
          <div className="col d-flex align-items-stretch">
            <div className="card shadow-lg text-center">
              <div className="card-header text-secondary">
                <strong>
                  <h3>Premium</h3>
                </strong>
              </div>
              <div className="card-body p-3">
                <h5 className="card-title text-danger">$0/month</h5>

                <a href="#" >
                <Link style={{textDecoration:'none'}} to="/login"><strong>Get Started</strong></Link>
                
                </a>
                <p className="card-text p-4">
                  <ul className="p-3">
                    <strong >
                      <li className="p-2">Upto 100 users</li>
                      <li className="p-2">20 courses per user</li>
                      <li className="p-2">Online course builder</li>
                      <li className="p-2"> Create Learning Path</li>
                      <li className="p-2">Space Limited upto 5TB</li>
                      <li className="p-2">Unlimited Email Support</li>
                    </strong>
                  </ul>
                </p>
              </div>
              <div className="card-footer text-muted">2 days ago</div>
            </div>
          </div>
        </div>

        
      </div>
</section>
<div className="container mt-5 p-3" style={{ fontFamily: "Dongle" }}>
          <p className="text-center">
            <h1 className="display-3">Feel free to ask</h1>
          </p>
          <p className="text-center" style={{ fontSize: "30px" }}>
            For any Corporate related Training,and any questions you may
            have,just call us or drop us a line.
            <br /> We’ll get back to you shortly.
          </p>
          <div className="container  text-center " style={{width:"200px"}}>
          <Link style={{textDecoration:'none'}} to="/action"><button
                    className="btn btn-outline-primary btn-lg ml-3"
                    type="submit"  >
                   Contact Us 
                  </button></Link>
          </div>
        </div>
              <Footer/>
    </div>
    <Outlet/>
  </>);
  };
  
  export default Pricing;