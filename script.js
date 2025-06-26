// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Get references to DOM elements
  const petList = document.getElementById('pet-list');
  const typeFilter = document.getElementById('pet-type-filter');
  const refreshBtn = document.getElementById('refresh-pets');
