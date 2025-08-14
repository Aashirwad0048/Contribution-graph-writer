# Contribution-graph-writer
A project of keeping the contribution-graph to be marked active even though you have not open the github page or application. It uses Node.js and the `simple-git` library to make and push commits programmatically.

## Features
- Automatically generates and commits changes to a file (`data.json`) with unique dates and commit numbers
- Pushes all commits to your GitHub repository
- Useful for visualizing activity on your GitHub contribution graph

## Prerequisites
- Node.js (v14 or higher recommended)
- Git (must be installed and initialized in your project directory)

## Installation
1. Clone this repository:
	```sh
	git clone https://github.com/Aashirwad0048/Contribution-graph-writer.git
	cd Contribution-graph-writer
	```
2. Install dependencies:
	```sh
	npm install
	```

## Usage
1. Make sure your local git repository is initialized and connected to your GitHub remote.
2. Run the script to generate commits:
	```sh
	node index.js
	```
3. After the script finishes, push your commits to GitHub:
	```sh
	git push origin main
	```

## Configuration
- You can modify the number of commits or the file being updated in `index.js`.
- The script updates `data.json` with a unique date and commit number for each commit.

## Notes
- Do not include `node_modules` in your git repository. Add a `.gitignore` file with `node_modules/` if needed.
- This project is for educational and visualization purposes only.

## Dependencies
- [simple-git](https://www.npmjs.com/package/simple-git)
- [moment](https://www.npmjs.com/package/moment)
- [jsonfile](https://www.npmjs.com/package/jsonfile)
- [random-js](https://www.npmjs.com/package/random-js)

## License
MIT
