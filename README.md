
# Animal Catalog

This project is a simple React application that displays a catalog of animals divided by type (Cats, Dogs, Birds). Users can browse through different types of animals, search for specific animals, and view detailed information in a pop-up modal.

## Project Structure

animal-catalog/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── AboutUs.js
│ │ ├── AnimalCard.js
│ │ ├── AnimalGallery.js
│ │ ├── ContactUs.js
│ │ ├── Menu.js
│ │ ├── Popup.js
│ ├── App.js
│ ├── index.js
│ ├── index.css
└── package.json



## Installation

To run this project locally, you need to have Node.js and npm installed on your machine. Follow the instructions below to set up and run the project.

### Prerequisites

- Node.js (https://nodejs.org/)
- npm (https://www.npmjs.com/)

### Steps

1. **Clone the repository**
   
   git clone https://github.com/your-username/animal-catalog.git
   cd animal-catalog


2. **Install dependencies**
   
     npm install

4. **Start the development server**
   
    npm start
   
5. Open your browser and navigate to http://localhost:3000 to see the application.


## Project Components
1. **App.js**
The main component that sets up the application structure, including the header, main content area, and footer.

2. **Menu.js**
A navigation menu that allows users to switch between different animal types and other sections (About Us, Contact Us).

3. **AnimalGallery.js**
Fetches and displays a gallery of animal cards based on the selected type. Includes a search bar to filter animals by name.

4. **AnimalCard.js**
Represents a single animal card in the gallery. Clicking on the card opens a pop-up with more detailed information.

5. **Popup.js**
Displays detailed information about the selected animal in a modal.

6. **AboutUs.js**
Displays information about the project or organization.

7. **ContactUs.js**
Displays contact information.

8. **index.js**
The entry point of the React application. Renders the App component.

9. **index.css**
Contains the CSS styles for the entire application.

## APIs Used
Dogs API: https://freetestapi.com/apis/dogs
Cats API: https://freetestapi.com/apis/cats
Birds API: https://freetestapi.com/apis/birds
These APIs are used to fetch data for the different animal types displayed in the application.

