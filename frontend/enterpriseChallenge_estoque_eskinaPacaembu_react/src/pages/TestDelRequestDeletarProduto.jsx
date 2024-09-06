import React, { useState } from 'react';

function TestDelRequestDeletarProduto() {
  const [responseData, setResponseData] = useState(null);

  const handleRequest = async () => {
    const url = 'http://localhost:8080/produtos';

    const productId = "1"

    // Construct the URL
    const fullUrl = `${url}/${productId}`;

    try {
      const response = await fetch(fullUrl, {
              method: 'DEL',
              headers: {
                'Content-Type': 'application/json'
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

export default TestDelRequestDeletarProduto;
