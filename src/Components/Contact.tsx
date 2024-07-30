export const Contact=()=>{
    return (
        <div id='contact' className="container-fluid px-4 py-5 my-5 text-center">
            <h1>CONNECT WITH US</h1>
            <br/><br/>
            <div className="row d-flex justify-content-center align-items-center">
  <div className="col-sm-4">
  <a href="https://www.linkedin.com/in/kaliswari-swaminathan/"><img src={require("../Images/contact/linked-in.png")} alt="Linked In" id="social"/></a>
  </div>
  <div className="col-sm-4">
  <a href="https://github.com/kaliswari-swaminathan"><img src={require("../Images/contact/github.png")} alt="GitHub" id="social"/></a>
  </div>
  <div className="col-sm-4">
  <a href="https://mail.google.com/mail/u/0/?fs=1&to=kalissusi598@gmail.com&tf=cm" ><img src={require("../Images/contact/gmail.png")} alt="Gmail" id="social"/></a>
  
  </div>
</div>
        </div>
    );

}