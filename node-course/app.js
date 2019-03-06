const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//Customize yarts

yargs.version('1.1.0')

//Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },        
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})


//Create list command

yargs.command({
    command: 'list',
    describe: 'List your Notes',
    handler(){
        notes.listNodes();
    }
})

//Create read command

yargs.command({
    command: 'read',
    describe: 'Read a Note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },        
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
yargs.parse()