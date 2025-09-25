console.log('Script loaded');

// Change page title
const editorName = 'Philippe Gambette';

const pageTitle = document.querySelector('title');
pageTitle.innerHTML = pageTitle.innerHTML.replace('Average Jane', editorName);

const pageHeading = document.querySelector('h1');
pageHeading.innerHTML = pageHeading.innerHTML.replace('Average Jane', editorName);

console.log('Title and heading updated');

// Helper functions
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}

// Movies Data
const movies = [
  {
    title: "Souleymane's Story",
    director: 'Boris Lojkine',
    releaseDate: '2024-10-09',
    cast: ['Abou Sangaré', 'Nina Meurisse'],
    wikidataId: 'Q126014180',
    allocineId: '311444',
  },
  {
    title: 'Lilo & Stitch',
    director: 'Dean Fleischer Camp',
    releaseDate: '2025-05-23',
    cast: ['Courtney B. Vance', 'Tia Carrere', 'Amy Hill', 'Billy Magnussen', 'Zach Galifianakis'],
    wikidataId: 'Q59395971',
    allocineId: '268362',
  },
  {
    title: 'The Fantastic Four: First Steps',
    director: 'Matt Shakman',
    releaseDate: '2010-07-16',
    cast: ['Pedro Pascal', 'Vanessa Kirby', 'Ebon Moss-Bachrach', 'Joseph Quinn'],
    wikidataId: 'Q105105219',
    allocineId: '226116',
  },
  {
    title: 'The Judge',
    director: 'David Dobkin',
    releaseDate: '2014-10-10',
    cast: ['Robert Downey Jr.', 'Robert Duvall'],
    wikidataId: 'Q13573278',
    allocineId: '215680',
  },
];

// Function to create movie cards
function createMovieCards(movies) {
  movies.forEach((movie) => {
    console.log(`Processing movie: ${movie.title}`);

    const card = document.createElement('li');
    card.className = 'movie-item';

    card.innerHTML = `
      <img src="./assets/${movie.wikidataId}.png" alt="" />
      <h2>
        <a href="https://wikidata.org/wiki/${movie.wikidataId}" target="_blank">${movie.title}</a>
      </h2>
      <p>Release date: ${formatDate(movie.releaseDate)}</p>
      <p>Cast: ${movie.cast.join(', ')}</p>
      <div class="quiz">
        <label for="guess-director-${movie.wikidataId}">Guess the director:</label>
        <input type="text" id="guess-director-${movie.wikidataId}" />
      </div>
    `;

    // Append card to movie list
    const movieList = document.querySelector('.movie-list');
    movieList.appendChild(card);

    console.log(`Movie card for "${movie.title}" added to the list.`);
  });
}

// Initialize movie cards
createMovieCards(movies);
console.log('All movie cards created');

// Quiz functionality function
function initializeQuizFunctionality(quizInputs, movies) {
  quizInputs.forEach((input) => {
    input.addEventListener('input', (event) => {
      const movieId = input.id.split('-').pop();
      const movie = movies.find((movie) => movie.wikidataId === movieId);
      if (movie) {
        const directorName = movie.director.toLowerCase();
        const userGuess = event.target.value.toLowerCase();
        // Check for correct answer
        if (userGuess === directorName) {
          alert('Correct! Well done.');
          input.readOnly = true;
        }
        // Hint feature
        else if (directorName.startsWith(userGuess) && userGuess) {
          console.log(`Hint: next character is ${directorName[userGuess.length]}`);
        }

        // Change background color based on guess accuracy
        if (directorName.startsWith(userGuess) && userGuess) {
          event.target.style.backgroundColor = 'lightgreen';
        } else if (userGuess) {
          event.target.style.backgroundColor = 'lightcoral';
        }
      }
    });
  });
}

// Quiz functionality initialization
const quizInputs = document.querySelectorAll('.quiz input');
initializeQuizFunctionality(quizInputs, movies);
console.log('Quiz functionality initialized');
