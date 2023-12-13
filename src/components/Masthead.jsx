import React from 'react'

function Masthead({heading,margin,isFooterSection}) {
    const headingElement = isFooterSection ? 'h5' : 'h1';
    

  return (
    <>
    <header className="masthead" style={{backgroundImage: "url('./src/images/bg-masthead.jpg')"}}>
            <div className="container position-relative" >
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-white">
                        {React.createElement(headingElement, { className: `mb-${margin}` }, heading,)}
                           
                            <form className="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
                                
                                <div className="row">
                                    <div className="col">
                                        <input className="form-control form-control-lg" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                                        <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                                        <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                                    </div>
                                    <div className="col-auto"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                                </div>
                                
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        <p>To activate this form, sign up at</p>
                                        <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                
                                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Masthead