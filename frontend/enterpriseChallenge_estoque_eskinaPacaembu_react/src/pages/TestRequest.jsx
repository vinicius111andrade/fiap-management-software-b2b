import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [responseData, setResponseData] = useState(null);

  const handleRequest = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    // Define query parameters
    const params = {
      userId: 1,
      postId: 5
    };

    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        params: params, // Axios automatically adds query parameters to the URL
      });

      setResponseData(response.data);
    } catch (error) {
      console.error('There was a problem with your Axios operation:', error);
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

export default App;
