import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const starFull = <FontAwesomeIcon icon={faStar} />;
const starEmpty = <FontAwesomeIcon icon={faStar} />;

const GenerateRatingScale = (props) => {
  const scaleValue = props.scaleValue;
  const range = [1, 2, 3, 4, 5];

  return (
    <div className='ratings'>
      {range.map((rangeElem) => (
        <span key={rangeElem.toString()} className={scaleValue >= rangeElem ? 'ratings_star' : 'star_grey'}>
          {scaleValue >= rangeElem ? starFull : starEmpty}
        </span>
      ))}
    </div>
  );
}

export default GenerateRatingScale;
