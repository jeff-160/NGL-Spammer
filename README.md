### Requirements  
1. Chrome as default browser
2. Tampermonkey chrome extension
3. PyAutoGUI module
---
  
### Run Instructions  
1. Download and extract this repository
2. Create a new Tampermonkey userscript
3. Copy paste the contents of `omg shokam.js` into the userscript
4. Enable Tampermonkey and run the userscript
5. `cd` to the project directory and run `python -b 'omg shokam.py'`
---

### Utilities  
`update.py` serves to provide easy code updating when Shokam changes his NGL link  
  
To update the NGL link in all files:
1. `cd` to the project directory and run `python -b update.py`
2. You will be prompted for the new NGL link
3. After entering the new link, all instances of the old link will be replaced in all files
4. Update the Tampermonkey userscript with the new code in `omg shokam.js`
