# Note Taker

An application utilizing express that allows the user to create, save and delete notes over multiple browser sessions.

## Installation

Use the node package manager [npm](https://nodejs.org/en/) to install Note Taker.

```bash
npm install
```

## Usage

```node.js
npm start
```
then navigate to 'localhost:9000'

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

# Unit 11 Express Homework: Note Taker

## Description

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

* The application frontend has already been created, it's your job to build the backend and connect the two.

* The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file
