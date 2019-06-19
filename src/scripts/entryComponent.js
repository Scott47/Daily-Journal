const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `<article>
        <div>
        <h5>Date: ${journalEntry.date}</h5>
        <h3>Concepts covered: ${journalEntry.topic}</h3>
        <p>Journal Entry: ${journalEntry.entry}</p>
        <h4>mood: ${journalEntry.mood}</h4>
        <button class="delete-btn">Delete</button>
        </div>
    </article>
    `
}

const makeJournalEntryDeleteBtn = (journalEntry) => {
    let deleteButton = document.querySelector(".delete-btn")
}