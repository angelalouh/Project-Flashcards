# Flashcard-o-matic App
Flashcard-o-matic is an application intended for both teachers to use to create decks of flashcards for the subjects they 
teach, as well as for students to use to study the decks their teachers have created. 

## Screenshots
### Home Page:
![home](/screenshots/home.jpg)
The home screen has the following features:
- A "Create Deck" button that will take the user to the Create Deck screen when clicked on.
- Existing decks are shown with the deck name, the number of cards in that deck, and a "View", "Study", and "Delete" button.
- Clicking the "View" button will take the user to that deck's Deck screen.
- Clicking the "Study" button will take the user to the Study screen.
- Clicking the "Delete" button will prompt a warning message to appear.

### Delete Deck Prompt:
![delete deck prompt](/screenshots/delete-deck-prompt.jpg)
When the user clicks on the "Delete" button associated with a particular deck, a warning message is shown. The user can either click
"OK" or "Cancel". If the user clicks "OK", the deck is deleted and will no longer be visible on the Home page.

### Study Screen:
![study screen](/screenshots/study-screen.jpg)
The study screen has the following features:
- A breadcrumb navigation bar with a link to the Home page, followed by the name of the deck being studied and a link to that deck's
screen, and finally, the text: `Study`. 
- The deck's title is shown on the screen.
- Cards are shown one at a time, front-side first.
- A button at the bottom of each card "flips" it to the other side when clicked on.

### Next Button:
![study screen next button](/screenshots/study-next-button.jpg)
After flipping the card on the Study screen, the backside of the card will now include a "Next" button as well. Clicking on the "Next"
button will prompt the next card in the deck to be shown, front-side first.

### Restart Prompt:
![study screen restart prompt](/screenshots/study-restart-prompt.jpg)
Once the user reaches the back-side of the last card in the deck, a warning message will appear. The user is offered the opportunity
to restart the deck by clicking on the "OK" button. If the user chooses not to restart studying this deck, the "Cancel" button will take the
user back to the Home page.

### Not Enough Cards:
![study screen not enough cards prompt](/screenshots/study-not-enough-cards.jpg)
If a user tries to study a deck with two or fewer cards in it, the Study screen will display a "Not enough cards" message and an "Add
Cards" button. Clicking on the "Add Cards" button will take the user to the Add Card screen.

### Create Deck:
![create deck screen](/screenshots/create-deck-screen.jpg)
The Create Deck screen has the following features:
- A breadcrumb navigation bar with a link to the Home page, followed by the text: `Create Deck`.
- A form is shown with the appropriate fields for creating a new deck.
- If the user cliks on the "Submit" button, the user is taken to this new deck's Deck screen.
- If the user clicks on the "Cancel" button, the user is taken back to the Home page.

### Deck Screen:
![deck screen](/screenshots/deck-screen.jpg)
The Deck screen has the following features:
- A breadcrumb navigation bar with a link to the Home page, followed by the name of the deck.
- This screen includes the deck's name and description.
- Below the description, there are "Edit", "Study", "Add Cards", and "Delete" buttons. Each button results in a different outcome when clicked on:
  * "Edit" --> Edit Deck screen
  * "Study" --> Study screen
  * "Add Cards" --> Add Card screen
  * "Delete" --> Shows a warning message before deleting the deck
- Each card in the deck:
  * is listed on the page under the "Cards" heading.
  * shows a question and the answer to the question.
  * has an "Edit" button that takes the user to the Edit Card screen when clicked on.
  * has a "Delete" button that allows that card to be deleted.

### Delete Card Prompt
![deck screen delete card prompt](/screenshots/delete-card-prompt.jpg)
When the user clicks on the "Delete" button associated with a card, a warning message appears. The user can either click on "OK" or "Cancel".
If the user clicks on "OK", the card is deleted and will no longer appear on the Deck screen.

### Edit Deck:
![edit deck screen](/screenshots/edit-deck-screen.jpg)
When the user navigates to this screen, they are able to modify information on an existing deck. The Edit Deck screen has the following features:
- A breadcrumb navigation bar with a link to the Home page, followed by the name of the deck being edited, which is also a link to that deck's Deck
screen, and lastly, the text: `Edit Deck`.
- It displays the same form as the Create Deck screen, except it is pre-filled with information for the existing deck.
- The user can edit and update the form.
- If the user clicks on the "Cancel" or the "Submit" button, the user is taken back to the Deck screen.

### Add Card:
![add card screen](/screenshots/add-card-screen.jpg)
The Add Card screen allows the user to add new cards to the deck. This screen has the following features:
- A breadcrumb navigation bar with a link to the Home page, followed by the name of the deck to which cards are being added, which is also a link
to that deck's Deck screen, and finally the text: `Add Card`.
- The screen displays a form with the "Front" and "Back" fields for a new card. Both fields use a `<textarea>` tag that can accommodate multiple
lines of text.
- If the user clicks on the "Done" button, the user is taken to the Deck screen.
- If the user clicks on the "Save" button, a new card is created and associated with the relevant deck. Then, the form is cleared and the process
for adding a new card is restarted.

### Edit Card:
![edit card screen](/screenshots/edit-card-screen.jpg)
The Edit Card screen allows the user to modify information on an existing card in a deck. This screen has the following features:
- A breadcrumb navigation bar with a link to the Home page, followed by the name of the deck of which the edited card is a member of, a link to
that deck's Deck screen, and finally the text: `Edit Card :cardId`. 
- It displays the same form as the Add Card screen, except it is pre-filled with information for the existing card. It can be edited and updated.
- If the user clicks on either the "Cancel" or "Submit" button, the user is taken to the Deck screen.

## Technology
### Built with:
- React, JavaScript, HTML, Bootstrap 4 for styling, and Open-Iconic icons for icons.
