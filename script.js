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

  // Render the list of pets to the DOM
  function renderPets(pets) {
    petList.innerHTML = ''; // Clear previous pets
    pets.forEach(pet => {
      const div = document.createElement('div');
      div.className = 'pet-card';
      // Populate the pet card with pet details
      div.innerHTML = `
        <img src="${pet.image}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p><strong>Breed:</strong> ${pet.breed}</p>
        <p><strong>Age:</strong> ${pet.age}</p>
        <p><strong>Gender:</strong> ${pet.gender}</p>
        <p><strong>Size:</strong> ${pet.size}</p>
        <p>${pet.description}</p>
        <p><em>Status: ${pet.status}</em></p>
      `;
      // Add click event to show an alert with the pet's name
      div.addEventListener('click', () => alert(`You selected ${pet.name}`));
      petList.appendChild(div);
    });
  }

  // Event listener for changing the pet type filter
  typeFilter.addEventListener('change', () => fetchPets(typeFilter.value));
  // Event listener for refreshing the pet list
  refreshBtn.addEventListener('click', () => fetchPets(typeFilter.value));

  fetchPets(); // Initial load of pets
});