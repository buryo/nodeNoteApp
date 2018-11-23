require('./notes.js');
const fs = require('fs');
const process = require('process');
const minimist = require('minimist');

const command = process.argv[2];
let json = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const arguments = minimist(process.argv.slice(2));

let title = arguments['title'];
let body = arguments['body'];

switch (command) {
    case 'list':
        // e.g: node app.js list
        getAllNotes(json);
        break;
    case 'add':
        // e.g: node app.js add --title="titel 3" --body="weet ik het?"
        addNote(title, body, json);
        break;
    case 'read':
        // e.g: node app.js read --title="titel 3"
        console.log(getSpecificNote(title, json));
        break;
    case 'delete':
        // e.g: node app.js delete --title="title2"
        deleteNote(title, json);
        break;
}

