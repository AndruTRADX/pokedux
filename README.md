# Pokedux Project Documentation

## Functionality

This project is a web application that displays the first generation of Pokemons using the PokeAPI. The application uses lazyload to load Pokemons and Redux to manage state. It also allows searching for Pokemons in the search bar. Each Pokemon card displays the name, types, and sprite of the Pokemon.

The application is written in Typescript and uses React and Vite.js.

## Installation

Clone the repository: <https://github.com/AndruTRADX/pokedux.git>

Enter the project folder:

- cd pokedux

Install dependencies:

- npm install

Start the application:

- npm run dev

The application will open in the browser at <http://localhost:5173/pokedux/>

## Technologies Used

- React
- Typescript
- Vite.js
- Redux
- PokeAPI

## Full Functionality

The application displays all first generation Pokemons in a grid. The grid uses lazyload to load Pokemons as the user scrolls down the page.

The application has a search bar that allows the user to search for Pokemons by name. When the user starts typing in the search bar, the list of Pokemons is filtered to show only the Pokemons that match the search query.

Each Pokemon card displays the name, types, and sprite of the Pokemon. Clicking on a Pokemon card takes the user to a details page that displays additional information about that Pokemon: stats, and abilities.

The application state is managed with Redux. When the Pokemons are first loaded, they are stored in the Redux state so that another API request is not necessary if the user returns to the main page. The Redux state also stores the current search query so that the list of Pokemons can be filtered accordingly.

Typescript is used for a better development experience and to reduce runtime errors. Vite.js is used as a fast and efficient development environment for React.

Made with 💜 by [AndruTRADX](https://github.com/AndruTRADX)
