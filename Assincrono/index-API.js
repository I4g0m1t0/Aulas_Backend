fetch(`http://viacep.com.br/ws/${89230250}/json/`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));