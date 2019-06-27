
let makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `<article id="journalEntry-${journalEntry.id}">
        <div>
        <h5>Date: ${journalEntry.date}</h5>
        <h3>Concepts covered: ${journalEntry.topic}</h3>
        <p>Journal Entry: ${journalEntry.entry}</p> 
        <h4>>mood: ${journalEntry.mood}</h4>
        <button class="delete-btn" id="delete-${journalEntry.id}">delete</button>
        </div>
    </article>
        `
}

function addDeleteEventListener() {
    let deleteBtnArray = document.querySelectorAll(".delete-btn")
    console.log(deleteBtnArray)
    deleteBtnArray.forEach(btn => {
    btn.addEventListener("click", event =>  {
        let deleteBtnId = event.target.id
        let deleteBtnIdArray = deleteBtnId.split("-")
        console.log(deleteBtnIdArray)
        let deleteBtnIdNum = deleteBtnIdArray[1]
        API.deleteJournalEntry(deleteBtnIdNum)
        })
    })
}




// let btn = document.createElement(button)
//     btn.setAttribute(“id”, `${newJournalEntry.id}`)
// btn.textContent = "Delete"