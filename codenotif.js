let data = {"message": "imad added khawla"};

fetch('http://localhost/Alpha/Back_end/start/middleware.php/Pnotif', {
  method: 'POST',
  body: JSON.stringify(data), 
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });