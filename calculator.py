import tkinter as tk

def start_calculator_game():
    def calculate():
        try:
            result = eval(entry.get())
            result_label.config(text=f"Result: {result}")
        except Exception as e:
            result_label.config(text="Error")

    calc_window = tk.Toplevel()
    calc_window.title("Calculator Game")

    entry = tk.Entry(calc_window, width=20)
    entry.pack(pady=10)
    tk.Button(calc_window, text="Calculate", command=calculate).pack(pady=10)
    result_label = tk.Label(calc_window, text="")
    result_label.pack(pady=10)
