import React,{useState , useEffect} from 'react'
import Certifications from './Certifications'
import Content from './Content'
import Footer from './Footer'
import Layout from './Layout'
import Manage from './Manage'
import { Skills } from './Skills'
import Table from './Table'
import Courses from './Courses'
import FormsHeader from './FormsHeader'
import Start from './components/Start'
import End from './components/End'
import Modal from './components/Modal'
import Question from './components/Question'
import quizData from './data/quiz.json';
import { set } from 'mongoose'
import Videos from './Videos'
import Leaderboard from './Leaderboard'
// import './style.css'

let interval;

const Home = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion , setActiveQuestion] = useState(0);
  const [answers ,setAnswers] = useState([]);

  const [showModel, setShowModel] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(()=>{
    if(step === 3){
      clearInterval(interval);
    }
  },[step]);
  const quizStartHandler =() =>{
    setStep(2);
    interval = setInterval(()=>{
      setTime(prevTime => prevTime +1);
    },1000);
  }
  const resetClickHandler = ()=>{

    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(()=>{
      setTime(prevTime => prevTime + 1);
       
    },1000);

  }
    return (
        <>
        {/* <Layout/> */}
        <div className='container-fluid'>
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img src="/Images/image4.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="/Images/image5.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/Images/image6.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </div>
            
        <section className="mb-0 home" style={{backgroundColor:"#ccccff"}}>
        <div className="row">
          <div className="col">
            <p >
              Come for the training, <br /> stay for the experience
            </p>
            <p >
              An intuitive interface means training feels right from the very
              first click. And with easy access on any device, learners jump in
              anytime, anywhere. Feel good introducing a tool that people
              actually use.
            </p>
          </div>
          <div className="col">
            <div className="card mx-auto mt-5" style={{ width: "400px" }}>
              <img
                className="card-img-top"
                src={"/Images/gif1.gif"}
                alt="Card image"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col container">
            <div className="card mx-auto mt-5" style={{ width: "600px" }}>
              <img
                className="card-img-top"
                src={"/Images/gif1.gif"}
                alt="Card image"
              />
            </div>
          </div>
          <div className="col">
            <p className=" p1 ">
              Come for the training, <br /> stay for the experience
            </p>
            <p className="p2">
              An intuitive interface means training feels right from the very
              first click. And with easy access on any device, learners jump in
              anytime, anywhere. Feel good introducing a tool that people
              actually use.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <p className=" p1 ">
              Come for the training, <br /> stay for the experience
            </p>
            <p className="p2">
              An intuitive interface means training feels right from the very
              first click. And with easy access on any device, learners jump in
              anytime, anywhere. Feel good introducing a tool that people
              actually use.
            </p>
          </div>
          <div className="col-7 container">
            <div className="card mx-auto mt-5" style={{ width: "600px" }}>
              <img
                className="card-img-top"
                src={"/Images/gif1.gif"}
                alt="Card image"
              />
            </div>
          </div>
        </div>
        <p className="p3">
          100 <span>+</span> teams
          <br />
          <strong>find training success with our LMS</strong>
        </p>
        <p className="p4">Why Leading Company choose Us</p>
        <div className="row p-3 ">
          <div className="col-4 ">
            <div className="card ml-3 " style={{ width: "400px" }}>
              <div className="card-body">
                <i className="far fa-clock p-3 " style={{ width: "20px" }}></i>
                <p className="card-text p-2">
                  <h3>Fast and Robust</h3>
                  With our superior technology under the hood, you can build and
                  launch a training program in a matter of hours.
                </p>
              </div>
            </div>
          </div>

          <div className="col-4 ">
            <div className="card ml-3" style={{ width: "400px" }}>
              <div className="card-body">
                <i
                  className="fas fa-sign-language p-3 "
                  style={{ width: "20px" }}
                ></i>
                <p className="card-text p-2">
                  <h3>Easy</h3>
                  our intuitive user experience makes the LMS super easy to use
                  for both learners and training administrators.
                </p>
              </div>
            </div>
          </div>

          <div className="col-4 ">
            <div className="card container ml-3" style={{ width: "400px" }}>
              <div className="card-body">
                <i
                  className="fas fa-hand-holding-usd p-3 "
                  style={{ width: "20px" }}
                ></i>
                <p className="card-text p-2">
                  <h3>Fair price</h3>
                  Award-winning technology at the best price. No hidden fees for
                  storage or bandwidth.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <p className="p5">Start fast with TMS Learn</p>
        

        
        
      </section>
      <Footer/>
      {/* <Certifications/> */}
      {/* <Content/> */}
      <Manage/>
      <Courses/>
      {/* <Skills/> */}
      <Table/>
      <FormsHeader/>
      { step === 1 && <Start onQuizStart={quizStartHandler}/>}
      { step === 2 && <Question
        data ={ quizData.data[activeQuestion]}
        onAnswerUpdate = {setAnswers}
        numberofQuestions = { quizData.data.length}
        activeQuestion = {activeQuestion}
        onSetActiveQuestion = { setActiveQuestion }
        onSetStep = {setStep}
      />}
      { step === 3 && <End results={answers} data={quizData.data} onReset={resetClickHandler} 
      onAnswersCheck={()=> setShowModel(true)} 
      time={time}/>}

      {showModel && <Modal onClose={()=>setShowModel(false)}
        results ={answers}
        data ={quizData.data}
      />}
      <Videos/>
      {/* <Leaderboard/> */}
        </>
    )
}

export default Home
