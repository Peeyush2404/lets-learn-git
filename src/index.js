import React from 'react';
import ReactDOM from 'react-dom';

// import User from './User';
// import App from './App';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
// import Blogs from './Pricing';
import Contact from './Contact';
import NoPage from './NoPage';
import Action from './Action';
import Pricing from './Pricing';
import Login from './Login';
import AnotherAction from './AnotherAction';
import Customer from './Customer';
import Dashboard from './Dashboard';
import Register from './Register';
import Courses from './Courses';
import Course1 from './Course1';
import FormsHeader from './FormsHeader';
import { Form } from 'react-bootstrap';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
           <Route path="login" element={<Login/>}/>
          <Route path="action" element={<Action />} />
          
          <Route path="anotheraction" element={<AnotherAction />} />
          
          <Route path="customer" element={<Customer />} />
          
          <Route path="dashboard" element={<Dashboard />} />
          
          <Route path="register" element={<Register />} />
          <Route path="courses" element={<Courses />} />
          <Route path="course1" element={<Course1 />} />
          <Route path="formsheader" element={<FormsHeader />} />



        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

