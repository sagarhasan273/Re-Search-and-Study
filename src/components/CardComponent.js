import { Stack } from '@mui/material';
import React from 'react';
import '../assets/css/CardComponent.css'; // Assuming you're importing a separate CSS file

function CardComponent({ heading, para, buttonText = 'Go' }) {
  return (
    <div className="card-container">
      <Stack gap={2}>
        <h1 className="card-heading">{heading}</h1>
        <p className="card-paragraph">{para}</p>
      </Stack>

      <button type="button" className="card-button">
        <p>{buttonText}</p>
        <svg className="card-button-icon" strokeWidth="1.5" viewBox="0 0 24 24">
          <path
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="black"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default CardComponent;
