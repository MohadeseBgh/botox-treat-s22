import React, {useState} from 'react';

const StarValue = () => {
  // const [rating, setRating] = useState(null)
  // const handleRating = (star) => {
  //   setRating(star)
  // };
  return (
    <div className={"flex flex-row"}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.09375 1.5625L6.0625 5.71875L1.46875 6.375C0.65625 6.5 0.34375 7.5 0.9375 8.09375L4.21875 11.3125L3.4375 15.8438C3.3125 16.6562 4.1875 17.2812 4.90625 16.9062L9 14.75L13.0625 16.9062C13.7812 17.2812 14.6562 16.6562 14.5312 15.8438L13.75 11.3125L17.0312 8.09375C17.625 7.5 17.3125 6.5 16.5 6.375L11.9375 5.71875L9.875 1.5625C9.53125 0.84375 8.46875 0.8125 8.09375 1.5625Z" fill="#FF974A"/>
      </svg>

    </div>
  )
}
export default StarValue;
