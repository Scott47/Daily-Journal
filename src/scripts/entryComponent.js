const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `<article>
        <div>
        <h5>Date: ${journalEntry.date}</h5>
        <h3>Concepts covered: ${journalEntry.topic}</h3>
        <p>Journal Entry: ${journalEntry.entry}</p>
        <h4>>mood: ${journalEntry.mood}</h4>
        <button id="delete-btn">Delete</button>
        </div>
    </article>
        `
}

const deleteButton = document.querySelector("#delete-btn")
deleteButton.addEventListener("click", event =>  {
    console.log(event)
// fetch(`http://localhost:8088/entries/${id}`, {
//     method: "DELETE",
//     headers: {
//         "Content-Type": "application/json"
//     }
// })
// .then(res => res.json())
})
// function createDeleteButton (button) {
//     let btn = document.createElement(button)
//     btn.setAttribute(“id”, `${newJournalEntry.id}`)
//     btn.textContent = "Delete"
// }
