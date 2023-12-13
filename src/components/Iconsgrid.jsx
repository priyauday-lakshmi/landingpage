import React from 'react'

function Iconsgrid({name,description,iconClass}) {
  return (
    <>
       <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className={iconClass}></i></div>
                            <h3>{name}</h3>
                            <p className="lead mb-0">{description}</p>
                        </div>
                    </div>
        </>
  )
}

export default Iconsgrid