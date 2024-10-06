import React from 'react';
import '../assets/css/CardComponent.css'; // Assuming you're importing a separate CSS file

function CardComponent() {
  return (
    <div className="card-container">
      <div>
        <h1 className="card-heading">Heading</h1>
        <p className="card-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum blanditiis pariatur sequi magni.
        </p>
      </div>

      <button type="button" className="card-button">
        <p style={{ color: 'white' }}>Button</p>
        <svg className="card-button-icon" strokeWidth="1.5" viewBox="0 0 24 24">
          <path
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="white"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default CardComponent;
