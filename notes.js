const fs = require('fs')
const chalk = require('chalk')
const getNotes = function (){
    return 'Your notes...';
}

const addNote = function (title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note){
        return note.title === title
    }) 
    if(duplicateNotes.length === 0){
        notes.push({
            title : title,
            body : body
        })
        saveNotes(notes)
        console.log('new note added!')
    } else {
        console.log('note title taken!')
    }
    
}

const saveNotes = function (notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
} catch(e){
    return e
}  
}

const removeNotes = function (title){
    const notes = loadNotes() 
    const notesToKeep = notes.filter(function (note){
        return note.title !== title
    })
    if (notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('removed notes'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('nothing removed'))
    }
    
}


module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNotes : removeNotes
}