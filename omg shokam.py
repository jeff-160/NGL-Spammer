from pyautogui import hotkey
from webbrowser import open
from time import sleep

for i in range(int(input("Enter number of messages: "))):
    open("https://ngl.link/junenlom")
    sleep(4)
    hotkey('ctrl', 'w')