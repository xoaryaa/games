import tkinter as tk
from number_guessing import start_number_guessing_game
from calculator import start_calculator_game
from snake_game import start_snake_game

def main():
    root = tk.Tk()
    root.title("Game Interface")

    tk.Button(root, text="Start Number Guessing Game", command=start_number_guessing_game).pack(pady=10)
    tk.Button(root, text="Start Calculator Game", command=start_calculator_game).pack(pady=10)
    tk.Button(root, text="Start Snake Game", command=start_snake_game).pack(pady=10)

    root.mainloop()

if __name__ == "__main__":
    main()
