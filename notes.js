const fs = require('fs');

/**
 *  To get all notes
 * @param json file
 */
getAllNotes = (json) => {
    console.log(`There are ${json.length} notes`);
    for (let item of json){
        console.log(`${item.title}: ${item.body}`);
    }
};

/**
 * To get a specific note
 * @param title
 * @param json file
 * @returns the item where title === @param title
 */
getSpecificNote = (title, json) => {
    return json.find( item => {
        return item.title === title;
    });
};

/**
 *     To add a note and check if exist
 * @param title
 * @param body
 * @param json file
 */
addNote = (title, body, json) => {
    // loop through the json file and search for title === @param title
    let foundNote = json.find(
        (note) => {
            return note.title === title
        }
    );

    //if found note === true (it means note already exist), give an error
    if (foundNote){
        console.log("There is already a note with this title!");
    } else{
        // Defining a new note
        let newNote = { "title":title, "body":body};
        //pushing the new note
        json.push(newNote);
        let newJson = JSON.stringify(json);
        fs.writeFileSync('./data.json', newJson);
        console.log('added new note!');
    }
};

/**
 *  To delete a note
 * @param title
 * @param json file
 */
deleteNote = (title, json) => {
    //  Filter through the object, deselect the item where title === @param title
    let data = json.filter(object => object.title !== title);

    fs.writeFileSync('./data.json', JSON.stringify(data));
    console.log('deleted note!');
};