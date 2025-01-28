
# Hangman Game

A classic word-guessing game built with HTML, CSS, and JavaScript. This project provides an interactive and responsive version of the Hangman game, complete with keyboard controls, hints, and visual feedback.




## Features

- Interactive word-guessing gameplay.
- Keyboard interface for selecting letters.
- Dynamic hints for each word.
- Game-over modal with animations and feedback (victory or defeat).
- Fully responsive design optimized for desktop and mobile devices.
- Customizable word list and hints.


## How to Play

1. A random word is selected, and its hint is displayed.
2. Guess letters one at a time by clicking the on-screen keyboard.
3. Each incorrect guess increases the hangman image progress.
4. The game ends when:
- All letters in the word are correctly guessed (victory).
- The maximum number of incorrect guesses (6) is reached (game over).
5. A modal will display the result, and you can choose to play again.
## Customization

Add New Words and Hints
Open the scripts/word-list.js file.

Add new entries to the wordList array in the following format:

const wordList = [
    { word: "example", hint: "This is a sample word" },
    { word: "coding", hint: "What programmers do" }
];
## Technologies Used

- HTML5: Structuring game elements
- CSS3: Styling and responsive layout.
- JavaScript (ES6): Core game logic and interactivity.

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Acknowledgements

- Google Fonts for the Open Sans font.

- GIFs and images from free online resources.

