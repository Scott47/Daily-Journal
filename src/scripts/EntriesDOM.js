const entryContainer = document.querySelector(".entryLog")
const renderJournalEntries = (entries) => {
    console.log(entries)
    for (i = 0; i < entries.length; i++) {
    entryContainer.innerHTML += makeJournalEntryComponent(entries[i])
}
}