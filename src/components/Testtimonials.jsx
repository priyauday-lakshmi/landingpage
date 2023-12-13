import React from 'react'

function Testtimonials({imageUrl,h5,p}) {
  return (
    <>
    
   
    
                    <div className="col-lg-4" >
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={imageUrl} alt="..." />
                            <h5>{h5}</h5>
                            <p className="font-weight-light mb-0">{p}</p>
                        </div>
                    </div>
                     
                   

    </>
  )
}

export default Testtimonials