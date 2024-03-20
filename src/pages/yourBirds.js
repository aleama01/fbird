import React, { useState, useEffect } from 'react';
import "../index.css"

function YourBirds() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://radiant-plains-82781-13ddbea1617c.herokuapp.com/imagesList')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data)
        setPhotos(data);
      });
  }, []);

  return (
    <div className='flex flex-col justify-start items-start mx-10 h-[100dvh]'>
      <div className='flex flex-row space-x-6 my-2'>
        {photos.map((photo, index) => (
          <div key={photo.url} className="w-[200px] h-[200px] hover:brightness-100 brightness-75">
            <img src={photo.url} alt={photo.name} />
            <p>{photo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBirds;
