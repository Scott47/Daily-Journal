let makeJournalEntryComponent = journalEntry => {
  // Create your own HTML structure for a journal entry
  return `<article id="journalEntry-${journalEntry.id}">
        <div id=>
        <h5>Date: ${journalEntry.date}</h5>
        <h3>Concepts covered: ${journalEntry.topic}</h3>
        <p>Journal Entry: ${journalEntry.entry}</p> 
        <h4>mood: ${journalEntry.mood}</h4>
        <div id="editInput-${journalEntry.id}">
        </div>
        <button class="delete-btn" id="delete-${
          journalEntry.id
        }">delete</button>
        <button class="edit-btn" id="edit-${journalEntry.id}">edit</button>
        </div>
    </article>
    `;
};

function addDeleteEventListener() {
  let deleteBtnArray = document.querySelectorAll(".delete-btn");
  console.log(deleteBtnArray);
  deleteBtnArray.forEach(btn => {
    btn.addEventListener("click", event => {
      let deleteBtnId = event.target.id;
      let deleteBtnIdArray = deleteBtnId.split("-");
      console.log(deleteBtnIdArray);
      let deleteBtnIdNum = deleteBtnIdArray[1];
      API.deleteJournalEntry(deleteBtnIdNum);
    });
  });
}

function addEditEventListener() {
  let editBtnArray = document.querySelectorAll(".edit-btn");
  console.log(editBtnArray);
  editBtnArray.forEach(editBtn => {
    console.log(editBtn);
    editBtn.addEventListener("click", event => {
      let editButtonId = event.target.id;
      let editBtnIdArray = editButtonId.split("-");
      let editBtnIdNum = editBtnIdArray[1];
      API.getOneEntry(editBtnIdNum).then(oneEntry => {
        let editForm = `<label for="journalEntry"><h5>Journal Entry</h5></label>
                <textarea id="JournalEntry-${journalEntry.id}">
                ${oneEntry.entry}
                </textarea>`;
        let editFormContainer = document.querySelector(
          `#editInput-${editBtnIdNum}`
        );
        editFormContainer.innerHTML = editForm;
        editBtn.addEventListener("click", event => {
          let editButtonId = event.target.id;
          let editBtnIdArray = editButtonId.split("-");
          let editBtnIdNum = editBtnIdArray[1];
          let updatedText = document.querySelector(
            `#JournalEntry-${journalEntry.id}`
          ).value;
          oneEntry.entry = updatedText;

          API.editJournalEntry(oneEntry, editBtnIdNum).then(
            revisedJournalEntry => {
              API.getJournalEntries().then(parsedEntries => {
                renderJournalEntries(parsedEntries);
                addDeleteEventListener();
                addEditEventListener();
                console.log(revisedJournalEntry)
              });
            }
          );
        });
      });
    });
  });
}

//now you have a reference to the editFormContainer and need to stick the editForm into it.
//(use innerHTML += for this I think?)
//if i want to put the text of that specific journal entry into the editForm, which means
// "GET" it from the database by using a fetch call and put it in there however text goes in a textarea
//(probably another innerHTML+=, just not sure if it goes inside the textarea tags or what)
