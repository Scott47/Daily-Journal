
const API = {
    getJournalEntries (id) {
        return fetch(`http://localhost:8088/entries/${id}`)
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
    editJournalEntry (id) {
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