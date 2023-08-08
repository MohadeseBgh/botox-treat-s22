import React from 'react';
import StarValue from '../icons/FilledStar';
import HollowStar from '../icons/HollowStar';


const Index = () => {

  const rating = 2;


  const fullStars = Array.from({ length: rating }, (_, index) => (
    <span key={index} className="star full-star">
    <StarValue/>
    </span>
  ));


  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
    <span key={index + rating} className="star empty-star">
      <HollowStar/>
    </span>
  ));

  return (
    <div className='flex flex-row  '>
      {fullStars}
      {emptyStars}
    </div>
  );
};

export default Index;