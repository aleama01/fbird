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
    <div className='flex flex-col justify-start items-start mx-10 h-[100dvh] '>
      <div className='flex flex-row justify-between mx-auto w-5/6 my-2 flex-wrap'>
        {photos.map((photo, index) => (
          <div key={photo.url} className='basis-1/5 my-2'>
            <img src={photo.url} className="w-[200px] object-cover h-[200px] hover:brightness-100 brightness-75" alt={photo.name} />
            <p>{photo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBirds;
