import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <button 
      className={`p-1 m-1 ml-2 rounded-full transition-colors ${liked ? 'text-red-500' : 'text-gray-500'}`}
      onClick={handleLikeClick}
    >
      <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
    </button>
  );
};

export default LikeButton;
