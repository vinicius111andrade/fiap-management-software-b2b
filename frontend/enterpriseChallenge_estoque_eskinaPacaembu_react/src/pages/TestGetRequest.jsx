import React, { useState } from 'react';

function TestGetRequest() {
  const [responseData, setResponseData] = useState(null);

  const handleRequest = async () => {
    const url = 'https://api.restful-api.dev/objects';

    // Define query parameters
//     const params = {
//       userId: 1,
//       postId: 5
//     };

    // Construct the URL with query parameters
//     const queryString = new URLSearchParams(params).toString();
//     const fullUrl = `${url}?${queryString}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  return (
    <div>
      <button onClick={handleRequest}>Send Request</button>
      {responseData && (
        <pre>{JSON.stringify(responseData, null, 2)}</pre>
      )}
    </div>
  );
}

export default TestGetRequest;
