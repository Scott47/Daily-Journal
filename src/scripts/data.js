
const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries/")
        .then(response => response.json())
    },
    saveJournalEntry (newJournalEntry) {
        return fetch("http://localhost:8088/entries", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
             },
            body: JSON.stringify(newJournalEntry)
        })  
    },
    deleteJournalEntry (id) {
        return fetch(`http://localhost:8088/entries/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(deleteEntry => deleteEntry.json())
    },

    getOneEntry (id) {
        return fetch(`http://localhost:8088/entries/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
    })
        .then(editOneEntry => editOneEntry.json())
},
//you need to give it an id, so it knows where to save the object, and also an object to save
//this is like a combo of POST and GET(one). It needs both pieces. 
//(You can nest one of the pieces inside the object if you want to, 
//but for now to keep it step-by-step I will suggest passing them both in.)
    editJournalEntry (editEntry, id) {
        fetch(`http://localhost:8088/entries/${id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(editEntry)
        })  
        .then(editEntry => editEntry.json())
    }
}     