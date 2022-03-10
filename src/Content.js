import React from 'react';

function Content() {
  return <>
  <div className='container'>
   <nav className="navbar navbar-light bg-light border-start border-top border-end border-2">
        <div className="container-fluid">
          <a className="navbar-brand">List of your courses</a>
          
          <div className="btn-group" role="group">
        <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </button>
        <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <li><a className="dropdown-item" href="#">Dropdown link</a></li>
          <li><a className="dropdown-item" href="#">Dropdown link</a></li>
        </ul>
      </div>
        </div>
      </nav>
      
     
   </div>
  </>;
}

export default Content;
