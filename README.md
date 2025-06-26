# Animal Shelter SPA

A Single Page Application (SPA) for an animal shelter that displays adoptable pets, allows filtering by type, and provides contact and donation information.

## Description
Animal Shelter SPA is a responsive, interactive front-end application built with HTML, CSS, and JavaScript. It uses **json-server** to mock a RESTful API (`db.json`) and demonstrates:  
- Fetching and rendering JSON data asynchronously  
- Filtering data without page reloads  
- Dynamic UI updates and event-driven interactions  

---

## Features
- **Adoptable Pets Gallery** — Displays a grid of pet cards with images and details.  
- **Filtering** — Filter pets by type (Dog, Cat, or All).  
- **Refresh Data** — Re-fetch the latest data on demand.  
- **Click Interaction** — Click a pet card to see a quick alert with the pet’s name.  
- **Contact & Location** — Static section with address, phone, and map placeholder.  
- **Donation & Volunteer** — Provides links for supporting the shelter.  

---

## Getting Started

### Dependencies
- Node.js (for `json-server`)  
- A modern browser (Chrome, Firefox, Safari, Edge)  

### Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/animal-shelter-spa.git
   cd animal-shelter-spa

2. Install json-server globally (if not already):
   -npm install -g json-server

### Running the Mock API

1.Ensure db.json is in the project root.

2. Start the mock API server:

-json-server --watch db.json --port 3000

-This serves endpoints at http://localhost:3000/pets.

### Running the Application
1. Open index.html in your browser, or serve via a local web server (e.g., Live Server in VS Code).

2. The SPA will load and display pet data from the mock API.

## Project Structure

animal-shelter-spa/
├─ db.json           # Mock database
├─ index.html        # Single-page application
├─ style.css         # Styling rules
├─ script.js         # Fetch & render logic
└─ README.md         # Project documentation

## Usage
1. Filter: Use the dropdown to show Dogs, Cats, or All.

2. Refresh: Click the “Refresh Pets” button to re-fetch data.

3. Click: Click on any pet card to see its name in an alert.

4. Explore: Scroll down to find contact and volunteer information.

## Configuration
-To change the mock data, edit db.json and restart json-server.

-If you host the app under a different port or path, update the baseURL in script.js accordingly.

## Author
1999272 – GitHub Profile
Mark Kamau

## License
-This project is licensed under the MIT License. See the LICENSE file for details.
