import React from 'react';
import './DeveloperCard.css';

const DeveloperCard = ({ developer }) => {
  return (
    <div className="developer-card">
      <img src={developer.image} alt={developer.name} />
      <h2>{developer.name}</h2>
      <h5>{developer.area}</h5>
      <div className="social-media">
        <div className='github-image'>
          <a href={developer.github} target="_blank">
            <img src="./assets/img/github.png" />
          </a>
        </div>
        <div className='linkedin-image'>
          <a href={developer.linkedin} target="_blank">
            <img src="./assets/img/linkedin.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;