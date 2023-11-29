from pyautogui import hotkey
from webbrowser import open
from time import sleep
from random import randint

batch_size = 5

def main():
    count = int(input("Number of messages: "))
    while count>0:
        batch = batch_size if count>=batch_size else count
        for i in range(batch):
            open("https://ngl.link/junenlom1")
            count-=1
        sleep(4)
        for i in range(batch): 
            hotkey("ctrl", "w")
            sleep(0.5)
        sleep(randint(3, 7))

if __name__=="__main__":
    main()