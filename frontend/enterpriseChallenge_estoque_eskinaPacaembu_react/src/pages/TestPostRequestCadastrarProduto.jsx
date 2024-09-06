import React, { useState } from 'react';

function TestPostRequestCadastrarProduto() {
  const [responseData, setResponseData] = useState(null);

  const handleRequest = async () => {
    const url = 'http://localhost:8080/produtos';

    // The data you want to send in the request body
    const bodyData = {
      nm_nome: 'Atum',
      ds_tipo: 'Atum em olio',
      nr_quantidade: 2,
      vl_preco: 10.0
    };

    try {
      const response = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(bodyData)
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

export default TestPostRequestCadastrarProduto;
