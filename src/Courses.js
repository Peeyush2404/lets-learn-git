import { Outlet, Link } from "react-router-dom";
import React from "react";
function Courses(){
    return(
        <>
        <div className="container bg-secondary p-3">
        <h3 className="text-center mt-2 ">All courses</h3>

        <div className="container p-3">
            <div className="row p-3">
                <div className="col">
                <div className="card" style={{width: '18rem'}}>
        <img src="/Images/python.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Course title</h5>
          <p className="card-text">Some quick example text to build on the Course title and make up the bulk of the card's content.</p>
          <Link   to="/course1">Course1</Link>
          <div className="card-footer mt-2">
            <div className="title">
              <span>Rating : 4.5/5</span>
              <span className="float-end">Views : 78968</span>

            </div>
          </div>

        </div>
      </div>
                </div>
                <div className="col">
                <div className="card" style={{width: '18rem'}}>
        <img src="/Images/python.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Course title</h5>
          <p className="card-text">Some quick example text to build on the Course title and make up the bulk of the card's content.</p>
          <Link   to="/course1">Course2</Link>
          <div className="card-footer mt-2">
            <div className="title">
              <span>Rating : 4.5/5</span>
              <span className="float-end">Views : 78968</span>

            </div>
          </div>

        </div>
      </div>
                </div>
                <div className="col">
                <div className="card" style={{width: '18rem'}}>
        <img src="/Images/python.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Course title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link   to="/course1">Course3</Link>
          <div className="card-footer mt-2">
            <div className="title">
              <span>Rating : 4.5/5</span>
              <span className="float-end">Views : 78968</span>

            </div>
          </div>

        </div>
      </div>
                </div>
            </div>
            <div className="row p-3">
                <div className="col">
                <div className="card" style={{width: '18rem'}}>
        <img src="/Images/python.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Course title</h5>
          <p className="card-text">Some quick example text to build on the Course title and make up the bulk of the card's content.</p>
          <Link   to="/course1">Course4</Link>
          <div className="card-footer mt-2">
            <div className="title">
              <span>Rating : 4.5/5</span>
              <span className="float-end">Views : 78968</span>

            </div>
          </div>

        </div>
      </div>
                </div>
                <div className="col">
                <div className="card" style={{width: '18rem'}}>
        <img src="/Images/python.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Course title</h5>
          <p className="card-text">Some quick example text to build on the Course title and make up the bulk of the card's content.</p>
          <Link   to="/course1">Course5</Link>
          <div className="card-footer mt-2">
            <div className="title">
              <span>Rating : 4.5/5</span>
              <span className="float-end">Views : 78968</span>

            </div>
          </div>

        </div>
      </div>
                </div>
                <div className="col">
                <div className="card" style={{width: '18rem'}}>
        <img src="/Images/python.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Course title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link   to="/course1">Course6</Link>
          <div className="card-footer mt-2">
            <div className="title">
              <span>Rating : 4.5/5</span>
              <span className="float-end">Views : 78968</span>

            </div>
          </div>
          
        </div>
      </div>
                </div>
            </div>
            
            </div>
        </div>
            <Outlet/>
        </>
    );
}

export default Courses;  