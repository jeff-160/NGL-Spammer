### Requirements  
1. Chrome as default browser
2. [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) chrome extension
3. [Dotenv](https://pypi.org/project/python-dotenv/) module ([if you want to use `update.py`](#utilities))
   - `pip install python-dotenv` 
---
  
### Run Instructions  
1. Download and extract this repository
2. Create a new Tampermonkey userscript
3. Copy paste the contents of `tampermonkey.js` into the userscript
4. Enable Tampermonkey and run the userscript
5. Open `index.html` in Chrome
6. You will be prompted for the number of messages to send
---

### Utilities  
`update.py` serves to provide easy code updating for when the NGL link is changed  
  
To update the NGL link in all files:
1. `cd` to the project directory and run `python -b update.py`
2. You will be prompted for the new NGL link
3. After entering the new link, all instances of the old link will be replaced in all files
4. Update the Tampermonkey userscript with the new code in `tampermonkey.js`
