from dotenv import load_dotenv
import os

def main():
    link = input("Enter Shokam's new NGL link: ")
    for path in [f"{os.path.dirname(os.path.abspath(__file__))}\\{i}" for i in ["omg shokam.js", "omg shokam.py", ".env"]]:
        content = None
        with open(path) as f: 
            content = f.read()
        with open(path, "w") as f: 
            f.write(content.replace(os.environ.get("LINK"), link))
            print(f"Successfully overwrote [{path}]")


if __name__=="__main__":
    load_dotenv()
    main()