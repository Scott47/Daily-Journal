
const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `<article>
        <div>
        <h5>Date: ${journalEntry.date}</h5>
        <h3>Concepts covered: ${journalEntry.topic}</h3>
        <p>Journal Entry: ${journalEntry.entry}</p>
        <h4>mood: ${journalEntry.mood}</h4>
        </div>
    </article>
    `
}
const entryContainer = document.querySelector(".entryLog")
const renderJournalEntries = (entries) => {
    console.log(entries)
    for (i = 0; i < entries.length; i++) {
    entryContainer.innerHTML += makeJournalEntryComponent(entries[i])
}
}
fetch("http://localhost:8088/entries") // Fetch from the API
    .then( entries => entries.json())  // Parse as JSON
    .then(parsedEntries => {
        renderJournalEntries(parsedEntries)
        // What should happen when we finally have the array?
    })
