import React, { useState } from 'react';

function YourBirds() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ yourData: 'Here' }),
    });
    const responseData = await response.json();
    setData(responseData);
  };

  return (
    <div className='flex flex-col justify-center items-center h-[100dvh]'>
      <button onClick={fetchData}>Fetch Data</button>
      {data && <div>You have something</div>}
    </div>
  );
}

export default YourBirds;
