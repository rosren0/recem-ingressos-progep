import React from 'react';
import "./styles.css"

 function Card({ title, content, footer }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
      <div className="card-footer">{footer}</div>
    </div>
  );
};

export default Card;

