// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Get references to DOM elements
  const petList = document.getElementById('pet-list');
  const typeFilter = document.getElementById('pet-type-filter');
  const refreshBtn = document.getElementById('refresh-pets');

   // Fetch pets from the server, optionally filtered by type
  function fetchPets(type = 'all') {
    const baseURL = 'http://localhost:3000/pets';
    const url = type === 'all' ? baseURL : `${baseURL}?type=${type}`;

    console.log('Fetching:', url);

    fetch(url)
      .then(response => {
        console.log('Status:', response.status, 'OK?', response.ok);
        if (!response.ok) throw new Error('Failed to fetch pets');
        return response.json();
      })
      .then(pets => {
        console.log('Pets:', pets);
        renderPets(pets);
      })
      .catch(error => console.error('Error fetching pets:', error));
  }