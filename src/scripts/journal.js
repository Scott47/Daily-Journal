API.getJournalEntries () 
    .then(parsedEntries => {
        renderJournalEntries(parsedEntries)
        addDeleteEventListener()
        addEditEventListener()
    })

document.querySelector("#record-entry").addEventListener("click", () => {
    // event.preventDefault()
    let recordDate = document.querySelector("#journalDate").value 
    let recordConcepts = document.querySelector("#concepts").value 
    let recordEntry = document.querySelector("#journalEntry").value
    let recordMood = document.querySelector("#mood").value
    // input.value = input.value.replace(regex, "")
    if (recordDate === "" || recordConcepts === "" || recordEntry === "") {
    } else 
    {let saveEntry = newJournalEntry(recordDate, recordConcepts, recordEntry, recordMood)
    API.saveJournalEntry(saveEntry)
    .then(() => API.getJournalEntries () 
    .then(parsedEntries => {
        renderJournalEntries(parsedEntries)
        addDeleteEventListener()
        addEditEventListener()
    })) 
    }
})

const newJournalEntry = (date, concept, entry, mood) => ({
    "date": date,
    "topic": concept,
    "entry": entry,
    "mood": mood
})

let moodSelect = document.getElementsByName("mood")
    moodSelect.forEach(moodElement => {
    moodElement.addEventListener("click", event => {   
        const moody = event.target.value
        API.getJournalEntries().then(entries => {
            let filteredEntries = entries.filter(entry => {
                let moodChoice = false
                if (entry.mood === moody){
                moodChoice = true
                }
                return moodChoice
            })
            renderJournalEntries(filteredEntries)
        })
    });
})

// In main module, invoke method to save entry, then add item to local array.
// Update DOM with updated array values.
    /*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
// objectWithGetterMethod.methodToGetData().then(functionThatRendersData)
