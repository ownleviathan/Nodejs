const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter(function(note){        
    //     return note.title ===title
    // })
    // const duplicateNotes = notes.filter((note) => note.title === title)

    const displicateNote = notes.find((note)=> note.title === tittle)

    // if(duplicateNotes.length === 0){
    if(!duplicateNote){    
        notes.push({
            title: title,
            body: body
        })    
        saveNotes(notes)    
        console.log(chalk.green.inverse('New note added!!'))
    }else{
        console.log(chalk.red.inverse('Note title taken!!')) 
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)        
    }catch(e){
        return []
    }

}
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }    
}

const listNodes = () =>{
    
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))

    notes.forEach(note => {
        console.log(note.title)
    });
    
}

const readNote = (title) =>{
    const notes = loadNotes()

    const readNote = notes.find((note)=> note.title === title)
    
    if(readNote){
        console.log(chalk.inverse(readNote.title))
        console.log(readNote.body)
    }
    else{
        console.log(readNote.body)
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNodes: listNodes,
    readNote:readNote
}