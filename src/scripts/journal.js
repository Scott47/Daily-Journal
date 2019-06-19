API.getJournalEntries () 
    .then(parsedEntries => {
        renderJournalEntries(parsedEntries)
    })

document.querySelector("#record-entry").addEventListener("click", (event) => {
    let recordDate = document.querySelector("#journalDate").value 
    let recordConcepts = document.querySelector("#concepts").value 
    let recordContainer = document.querySelector("#journalEntry").value
   console.log(recordDate, recordConcepts, recordContainer)
})
   
   
    // let newEntry = buildingJournalEntry(recordDate, recordConcepts, recordContainer)
    // addNewEntry(newEntry)
    // console.log(event.target)
// })
    /*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
// objectWithGetterMethod.methodToGetData().then(functionThatRendersData)

