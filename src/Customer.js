import React from 'react';
 import './Customer.css';
const Customer = () => {
  return <div>
      <div className="Customercontainer">
           
           <h1>Start Fast with TetraLMS</h1>

           <section className="customer">
               <div className="Customertop">
                   <p> 150<span style={{color:'#0000cc',fontWeight:"bold"}}>+</span> Clients <div>Find training success with TetraLMS</div></p>
                   <marquee behavior="scroll" direction="up" >
                   <ul className="CustomermySlide customerUl">
                       <li><img src={'./Images/hero.svg'}/></li>
                       <li><img src={'./Images/hcl.png'}/></li>
                       <li><img src={'./Images/hindustan unilever.png'}/></li>
                       <li><img src={'./Images/fenesta.png'}/></li>
                       <li><img src={'./Images/srf.png'}/></li>
                   </ul>

                   <ul className="CustomermySlide  customerUl">
                       <li><img src={'./Images/puma.jpg'}/></li>
                       <li><img src={'./Images/relaxo.png'}/></li>
                       <li><img src={'./Images/siemens.svg'}/></li>
                       <li><img src={'./Images/sunstar.png'}/></li>
                       <li><img src={'./Images/tvs.png'}/></li>
                   </ul>

                   <ul className="CustomermySlide customerUl">
                       <li><img src={'./Images/titan.png'}/></li>
                       <li><img src={'./Images/roop.jpg'}/></li>
                       <li><img src={'./Images/havels.png'}/></li>
                       <li><img src={'./Images/dayal.jpg'}/></li>
                       <li><img src={'./Images/cermica.png'}/></li>
                   </ul>
                   </marquee>
               </div>
           </section>

           <section className="Customertraining">
               <div className="Customermiddle">
                   <p> 350<span style={{color:'#0000cc',fontWeight:"bold"}}>+</span> Training
                   <div>Designed & Developed & Delivered 350+ High Impact Workshop Modules specifically designed for manufacturing professionals
</div></p>
               <div className="Customercard">
                   <div className="Customercard-box">
                       <h3>Technical Training Courses</h3>
                       <ul type='circle ' className='customerUl'>
                           <li>ADVANCED PRODUCT QUALITY PLANNING PROGRAM (APQP)</li>
                           <li>DESIGN FAILURE MODE EFFECT ANALYSIS (DFMEA)</li>
                           <li>STATISTICAL PROCESS CONTROL (SPC)</li>
                           <li>PROCESS FAILURE MODE EFFECT ANALYSIS (PFMEA)</li>
                       </ul>
                   </div>

                   <div className="Customercard-box">
                       <h3>Processes Important Training Courses</h3>
                       <ul type='circle' className='customerUl'>
                           <li>COST REDUCTION STRATEGIES</li>
                           <li>VALUE ENGINEERING & VALUE ANALYSIS TRAINING</li>
                           <li>ROOT CAUSE ANALYSIS (RCA)</li>
                           <li>5S + SAFETY IN THE WORKPLACE</li>
                           <li>PERFORMANCE MANAGEMENT AND IMPROVEMENT PLAN</li>
                       </ul>
                   </div>

                   <div className="Customercard-box">
                       <h3>Strategic Training Courses</h3>
                       <ul type='circle' className='customerUl'>
                           <li>DAILY WORK MANAGEMENT</li>
                           <li>DESIGN THINKING TRAINING</li>
                           <li>PRODUCTIVITY FOCUS SKILL MAPPING</li>
                           <li>WORLD CLASS MANUFACTURING</li>
                           <li>PRODUCTIVITY FOCUS SKILL MAPPING</li>
                       </ul>
                   </div>

                   <div className="Customercard-box">
                       <h3>Behavioural Courses</h3>
                       <ul type='circle' className='customerUl'>
                           <li>TEAM, TIME AND TASK MANAGEMENT</li>
                           <li>PRESENTATION SKILLS</li>
                           <li>THE ART OF DELEGATION</li>
                           <li>NON VERBAL COMMUNICATION</li>
                           <li>TEAM DEVELOPMENT & MOTIVATION</li>
                       </ul>
                   </div>
               </div>           
               </div>
           </section>

        <h2>Clients <span style={{color:"#0000cc"}}>Testimonials</span></h2>
           
        <div className="Customerslider">
           <div className="Customerslider-img"></div>
       </div>
 
       </div>
  </div>;
};

export default Customer;
