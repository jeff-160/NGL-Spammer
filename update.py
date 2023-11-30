from dotenv import load_dotenv
import os

def main():
    link = input("Enter Shokam's new NGL link: ")
    for path in [os.path.abspath(i) for i in os.listdir(os.path.dirname(os.path.abspath(__file__))) if os.path.basename(__file__) not in i]:
        content = None
        with open(path) as f: 
            content = f.read()
        with open(path, "w") as f: 
            f.write(content.replace(os.environ.get("LINK"), link))
            print(f"Successfully overwrote [{path}]")


if __name__=="__main__":
    load_dotenv()
    main()