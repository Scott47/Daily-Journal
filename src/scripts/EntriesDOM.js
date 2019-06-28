const entryContainer = document.querySelector(".entryLog")
const renderJournalEntries = (entries) => {
    entryContainer.innerHTML = ""
    for (i = 0; i < entries.length; i++) {
    entryContainer.innerHTML += makeJournalEntryComponent(entries[i])
}

}   