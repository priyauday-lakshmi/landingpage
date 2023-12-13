import React from 'react';

function Imageshowcase({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <div className="row g-0" key={index}>
          <div className={`col-lg-6 order-lg-${index % 2 === 0 ? 1 : 2} my-auto showcase-text`}>
            <h3>{item.h3}</h3>
            <p className="lead mb-0">{item.p}</p>
          </div>
          <div className={`col-lg-6 order-lg-${index % 2 === 0 ? 2 : 1} text-white showcase-img`} style={{backgroundImage: `url('${item.imageUrl}')`}}></div>
        </div>
      ))}
    </>
  );
}

export default Imageshowcase;
