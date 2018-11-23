const fs = require('fs');


getAllNotes = (json) => {
    console.log(`There are ${json.length} notes`);
    for (let item of json){
        console.log(`${item.title}: ${item.body}`);
    }
};

getSpecificNote = (title, json) => {
    return json.find( item => {
        return item.title === title;
    });
};

addNote = (title, body, json) => {
    let foundNote = json.find(
        (note) => {
            return note.title === title
        }
    );

    if (foundNote){
        console.log("There is already a note with this title!");
    } else{
        let newNote = { "title":title, "body":body};
        json.push(newNote);
        let newJson = JSON.stringify(json);
        fs.writeFileSync('./data.json', newJson);
        console.log('added new note!');
    }
};

deleteNote = (title, json) => {
    let data = json.filter(object => object.title !== title);

    fs.writeFileSync('./data.json', JSON.stringify(data));
    console.log('deleted note!');
};