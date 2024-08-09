import tkinter as tk
import random

def start_number_guessing_game():
    def check_guess():
        try:
            guess = int(entry.get())
            if guess < number:
                result_label.config(text="Too low!")
            elif guess > number:
                result_label.config(text="Too high!")
            else:
                result_label.config(text="Correct! Well done!")
        except ValueError:
            result_label.config(text="Please enter a valid number.")

    number = random.randint(1, 100)

    game_window = tk.Toplevel()
    game_window.title("Number Guessing Game")

    tk.Label(game_window, text="Guess a number between 1 and 100:").pack(pady=10)
    entry = tk.Entry(game_window)
    entry.pack(pady=10)
    tk.Button(game_window, text="Submit", command=check_guess).pack(pady=10)
    result_label = tk.Label(game_window, text="")
    result_label.pack(pady=10)
