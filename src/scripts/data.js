const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries")
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
    deleteJournalEntry (deleteEntry) {
        return fetch(`http://localhost:8088/entries/${id}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
        .then(deleteEntry => deleteEntry.json())
    },
})
    }
}