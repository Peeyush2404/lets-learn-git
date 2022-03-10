import React from "react";

const Course1 = () => {
  return (
    <>
      <div className="container p-5 ">
        <div className="row">
          <div className="col">
            <img
              src="/Images/image3.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col">
            <div className="card-body">
              <h5 className="card-title"><strong>Course title</strong></h5>
              <p className="card-text ">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. In the example, blow we remove the grid gutters with g-0
                and col-md * classes to make the card horizontal at the md
                breakpoint. Further adjustments may be needed depending on your
                card content.
                <br/>
                <br/>

                <strong> Course By:</strong>
                <br/>
                <br/>

                <strong> Duration :</strong> 3 Hours 30 minutes
                <br/>
                <br/>

                <strong> Total Enrolled : </strong>456 students
                <br/>
                <br/>

                <strong> Rating: </strong>4.5/5


              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="list-group">
      <button type="button" className="list-group-item list-group-item-action active">Course Content </button>

        <button type="button" className="list-group-item list-group-item-action " aria-current="true">
          Introduction  <p className="float-end  "> < i className="fa fa-video fa-2x" />1 hour 30 minutes</p>
        </button>
        <button type="button" className="list-group-item list-group-item-action">Lesson-1 <p className="float-end  ">< i className="fa fa-video fa-2x" />1 hour 30 minutes </p></button>
        <button type="button" className="list-group-item list-group-item-action">Lesson-2 <p className="float-end  ">< i className="fa fa-video fa-2x" />1 hour 30 minutes </p></button>
        <button type="button" className="list-group-item list-group-item-action">Lesson-3<p className="float-end  ">< i className="fa fa-video fa-2x" />1 hour 30 minutes </p></button>
        <button type="button" className="list-group-item list-group-item-action" >Lesson-4<p className="float-end  ">< i className="fa fa-video fa-2x" />1 hour 30 minutes </p></button>
      </div>
      <div className="container">
      <div className="row">
      <div className="col"><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdzbpEj5AucCFYhZkR9y7xstwTtl79hRTBhjeVT7Xzk_4nTDQ/viewform?embedded=true" width="640" height="1392" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>
      <div className="col"><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfcbxmuzlZG3647WxnnQCwaa6wxVXLJevfnjMeZMkPei1mCgQ/viewform?embedded=true" width="640" height="1360" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>
     </div>
     </div>
      </div>
    </>
  );
};

export default Course1;
