const notes = require('./notes.js')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
// Create add command
yargs.command ({
    command : 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe : 'Note Title',
            demandOption : true,
            type: 'string'
        },
        body: {
            describe : 'note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler: function (argv){
        notes.addNote(argv.title, argv.body)
    }

})

//create remove command
yargs.command({
    command : 'remove',
    describe : 'Removing a note',
    builder: {
        title : {
            descibe : 'note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler: function (argv){
        notes.removeNotes(argv.title)
        
    }
})

//create list command
yargs.command({
    command : 'list',
    describe : 'list your note',
    handler : function () {
        console.log('listing out all notes!')
    }
})

//create read command
yargs.command({
    command : 'read',
    describe : 'read a note',
    handler : function (){
        console.log('reading a note!')
    }

})


yargs.parse()

// add, remove, read, list