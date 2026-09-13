import tkinter as tk
import math

MESSAGE = "I LOVE YOU UGWU EBUBE MIRACLE"

WIDTH, HEIGHT = 1100, 800
CENTER_X, CENTER_Y = WIDTH // 2, HEIGHT // 2 + 35
HEART_SCALE = 21
BACKGROUND = "#070b18"
CYAN = "#54f7ff"
PINK = "#ff4fd8"

root = tk.Tk()
root.title("I LOVE YOU UGWU EBUBE MIRACLE")
root.configure(bg=BACKGROUND)
root.resizable(False, False)

canvas = tk.Canvas(
    root,
    width=WIDTH,
    height=HEIGHT,
    bg=BACKGROUND,
    highlightthickness=0,
)
canvas.pack()

for x in range(0, WIDTH, 55):
    canvas.create_line(x, 0, x, HEIGHT, fill="#0d1930")
for y in range(0, HEIGHT, 55):
    canvas.create_line(0, y, WIDTH, y, fill="#0d1930")

for radius, color in [(330, "#0b1730"), (260, "#0d1d38"), (190, "#102544")]:
    canvas.create_oval(
        CENTER_X - radius,
        CENTER_Y - radius,
        CENTER_X + radius,
        CENTER_Y + radius,
        outline=color,
        width=1,
    )


def heart_point(t):
    x = 16 * math.sin(t) ** 3
    y = (
        13 * math.cos(t)
        - 5 * math.cos(2 * t)
        - 2 * math.cos(3 * t)
        - math.cos(4 * t)
    )
    return CENTER_X + x * HEART_SCALE, CENTER_Y - y * HEART_SCALE


heart_points = [
    heart_point(index * 2 * math.pi / 400)
    for index in range(401)
]

for glow, color in [
    (22, "#101c55"),
    (14, "#173d9b"),
    (7, CYAN),
    (3, PINK),
]:
    canvas.create_line(heart_points, fill=color, width=glow, smooth=True)

canvas.create_text(
    CENTER_X,
    CENTER_Y - 8,
    text="I LOVE YOU",
    fill="#ffffff",
    font=("Consolas", 34, "bold"),
)
canvas.create_text(
    CENTER_X,
    CENTER_Y + 38,
    text="UGWU EBUBE MIRACLE",
    fill=CYAN,
    font=("Segoe UI", 22, "bold"),
)
canvas.create_text(
    CENTER_X,
    45,
    text="LOVE TRANSMISSION  /  2026",
    fill=PINK,
    font=("Segoe UI", 16, "bold"),
)

letters = []
for index, character in enumerate(MESSAGE):
    glow = canvas.create_text(
        0,
        0,
        text=character,
        fill=PINK,
        font=("Segoe UI", 20, "bold"),
    )
    main = canvas.create_text(
        0,
        0,
        text=character,
        fill="#ffffff",
        font=("Segoe UI", 20, "bold"),
    )
    letters.append((glow, main, index))

animation_offset = 0


def animate():
    global animation_offset

    total_letters = len(letters)
    for glow, main, index in letters:
        t = (
            animation_offset + index * (2 * math.pi / total_letters)
        ) % (2 * math.pi)
        x, y = heart_point(t)
        canvas.coords(glow, x + 2, y + 2)
        canvas.coords(main, x, y)

        brightness = int(
            170 + 85 * math.sin(t * 3 + animation_offset * 4)
        )
        color = f"#ff{brightness:02x}{brightness:02x}"
        canvas.itemconfig(glow, fill=color)

    animation_offset += 0.018
    root.after(30, animate)


animate()
root.mainloop()
