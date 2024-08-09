import pygame # type: ignore
import random

def start_snake_game():
    pygame.init()
    window_size = (600, 400)
    window = pygame.display.set_mode(window_size)
    pygame.display.set_caption("Snake Game")
    
    # Colors
    black = (0, 0, 0)
    green = (0, 255, 0)
    red = (255, 0, 0)

    # Game Variables
    snake_block = 10
    snake_speed = 15

    clock = pygame.time.Clock()

    def game_loop():
        game_over = False
        x1, y1 = window_size[0] / 2, window_size[1] / 2
        x1_change, y1_change = 0, 0

        while not game_over:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    return
                if event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_LEFT:
                        x1_change = -snake_block
                        y1_change = 0
                    elif event.key == pygame.K_RIGHT:
                        x1_change = snake_block
                        y1_change = 0
                    elif event.key == pygame.K_UP:
                        y1_change = -snake_block
                        x1_change = 0
                    elif event.key == pygame.K_DOWN:
                        y1_change = snake_block
                        x1_change = 0

            x1 += x1_change
            y1 += y1_change

            window.fill(black)
            pygame.draw.rect(window, green, [x1, y1, snake_block, snake_block])
            pygame.display.update()

            clock.tick(snake_speed)

    game_loop()
    pygame.quit()
