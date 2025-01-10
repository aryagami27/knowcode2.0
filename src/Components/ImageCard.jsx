import React from 'react';

export const ImageCard = () => {
  return (
    <div className='flex flex-col w-full'>
      {Array.from({ length: 3 }, (_, i) => (
        <img
          key={i}
          src='leaves.png'
          alt='leaves'
          className='object-fill w-full'
        />
      ))}
    </div>
  );
};
