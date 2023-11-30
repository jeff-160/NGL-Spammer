from pyautogui import hotkey
from webbrowser import open
from time import sleep
from random import randint

batch_size = 5

def main():
    batch_num = 0
    
    count = int(input("Number of messages: "))
    while count>0:
        batch_num+=1
        batch = batch_size if count>=batch_size else count
        print(f"Sending batch {batch_num} with {batch} messages")
        
        for i in range(batch):
            open("https://ngl.link/junenlom2/3words")
        count-=batch
        sleep(4)
        
        for i in range(batch): 
            hotkey("ctrl", "w")
            sleep(0.5)
        sleep(randint(5, 10))

if __name__=="__main__":
    main()