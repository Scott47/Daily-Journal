API.getJournalEntries () 
    .then(parsedEntries => {
        renderJournalEntries(parsedEntries)
    })

document.querySelector("#record-entry").addEventListener("click", () => {
    event.preventDefault()
    let recordDate = document.querySelector("#journalDate").value 
    let recordConcepts = document.querySelector("#concepts").value 
    let recordEntry = document.querySelector("#journalEntry").value
    let recordMood = document.querySelector("#mood").value
    if (recordDate === "" || recordConcepts === "" || recordEntry === "") {
    } else 
    {let saveEntry = newJournalEntry(recordDate, recordConcepts, recordEntry, recordMood)
    API.saveJournalEntry(saveEntry)
    }
    })
    
const newJournalEntry = (date, concept, entry, mood) => ({
    "Date": date,
    "Concept": concept,
    "Entry": entry,
    "Mood": mood
})

    // Use `fetch` with the POST method to add your entry to your API
    // fetch("http://localhost:8088/entries", { // Replace "url" with your API's URL
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(newJournalEntry)
    // })
   
    /*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
// objectWithGetterMethod.methodToGetData().then(functionThatRendersData)

