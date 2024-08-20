# Game Interface

This project is a simple game interface that includes three different games: Snake Game, Number Guessing Game, and a Calculator Game. The interface is built using Python (for the desktop version) and HTML/JavaScript (for the web version). The main purpose of this project is to provide a collection of small games that can be played either on a desktop environment or through a web browser.

## Features

- **Snake Game**: A classic snake game where the player controls a snake to eat food and grow longer without running into itself or the walls.
- **Number Guessing Game**: A simple guessing game where the player tries to guess a randomly generated number within a certain range.
- **Calculator Game**: A basic calculator that allows users to perform arithmetic operations.

## Project Structure

The project is divided into two main folders:

1. **Python Game Interface (`python_game_interface`)**
   - Contains the Python implementations of the games using Pygame and a simple interface to select and play each game.
   - Files:
     - `snake_game.py`
     - `number_guessing_game.py`
     - `calculator_game.py`
     - `main.py` (entry point for the Python interface)

2. **Web Game Interface (`web_game_interface`)**
   - Contains the HTML, CSS, and JavaScript files for the web-based versions of the games.
   - Files:
     - `index.html` (main interface for selecting games)
     - `snake_game.html` (HTML for the Snake Game)
     - `number_guessing_game.html` (HTML for the Number Guessing Game)
     - `calculator_game.html` (HTML for the Calculator Game)
     - `style.css` (common styles for the web interface)
     - `snake_game.js`, `number_guessing_game.js`, `calculator_game.js` (JavaScript files for each game)

## Setup and Installation

### Python Game Interface🐍

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/xoaryaa/games.git
   cd games/python_game_interface
