# Flashcard-o-matic
Flashcard-o-matic is an application intended for both teachers to use to create decks of flashcards for the subjects they 
teach, as well as for students to use to study the decks their teachers have created. 

## Technology
### Built with:
- JavaScript, React, HTML, CSS, Bootstrap, Open Iconic, and Google Fonts.

## Installation
1. Fork and clone this repository.
2. Run `npm install` to install project dependencies.
3. Run `npm run start` to concurrently start the project's frontend and backend.

## Screenshots
### Home Page:
![home](/screenshots/new/home.jpg)
The home screen has the following features:
- A `Create Deck` button that will take the user to the `/decks/new` page when clicked on.
- Existing decks are shown with the deck name, the number of cards in that deck, and a `View`, `Study`, and `Delete` button.
- Clicking the `View` button will take the user to the Deck screen, `/decks/:deckId`, where more information about that particular deck is stored.
- Clicking the `Study` button will take the user to the Study screen, `decks/:deckId/study`, where the user can begin to study the cards in that deck.
- Clicking the `Delete` button will prompt a warning message to appear, and give the user the option to delete the deck or cancel this action.

### Delete Deck Prompt:
When the user clicks on the `Delete` button associated with a particular deck, a warning message is shown. The user can either click
`OK` or `Cancel`. If the user clicks `OK`, the deck is deleted and will no longer be visible on the Home page.

![delete deck prompt](/screenshots/new/delete-deck-prompt.jpg)

### Study Screen:
![study screen](/screenshots/new/study-screen.jpg)
The study screen has the following features:
- A breadcrumb navigation bar with a link to the Home page, followed by the name of the deck being studied and a link to that deck's
screen, and finally, the text: `Study`. 
- The deck's title is shown on the screen.
- Cards are shown one at a time, front-side first.
- A `Flip` button at the bottom of each card flips it to the other side when clicked on.

### Next Button:
After flipping the card on the Study screen, the backside of the card will now include a `Next` button as well. Clicking on the `Next`
button will prompt the next card in the deck to be shown, front-side first. Clicking on the `Flip` button will show the front-side of the card again.

![study screen next button](/screenshots/new/study-next-button.jpg)

### Restart Prompt:
Once the user reaches the back-side of the last card in the deck, a warning message will appear. The user is offered the opportunity
to restart the deck by clicking on the `OK` button. If the user chooses not to restart studying this deck, the `Cancel` button will take the
user back to the Home page.

![study screen restart prompt](/screenshots/new/study-restart-prompt.jpg)

### Not Enough Cards:
If a user tries to study a deck with two or fewer cards in it, the Study screen will display a `Not enough cards` message and an `Add
Cards` button. Clicking on the `Add Cards` button will take the user to the Add Card page, `decks/:deckId/cards/new`.

![study screen not enough cards prompt](/screenshots/new/study-not-enough-cards.jpg)

### Create Deck:
![create deck screen](/screenshots/new/create-deck-screen.jpg)
The Create Deck screen has the following features:
- A breadcrumb navigation bar with a link to the Home page, followed by the text: `Create Deck`.
- A form is shown with the appropriate fields for creating a new deck.
- If the user cliks on the `Submit` button, the user is taken to this new deck's Deck screen.
- If the user clicks on the `Cancel` button, the user is taken back to the Home page.

### Deck Screen:
![deck screen](/screenshots/new/deck-screen.jpg)
The Deck screen has the following features:
- A breadcrumb navigation bar with a link to the Home page, followed by the name of the deck.
- This screen includes the deck's name and description.
- Below the description, there are `Edit`, `Study`, `Add Cards`, and `Delete` buttons. Each button results in a different outcome when clicked on:
  * `Edit` --> Edit Deck screen, `/decks/:deckId/edit`.
  * `Study` --> Study screen, `/decks/:deckId`.
  * `Add Cards` --> Add Card screen, `decks/:deckId/cards/new`.
  * `Delete` --> Shows a warning message before deleting the deck
- Each card in the deck:
  * is listed on the page under the `Cards` heading.
  * has a `Front` and `Back` side to the card.
  * has an `Edit` button that takes the user to the Edit Card screen, `/decks/:deckId/cards/:cardId/edit`.
  * has a `Delete` button that allows that card to be deleted.

### Delete Card Prompt
When the user clicks on the `Delete` button associated with a card, a warning message appears. The user can either click on `OK` or `Cancel`.
If the user clicks on `OK`, the card is deleted and will no longer appear on the Deck screen. Clicking `Cancel` will return the user to the Deck screen.

![deck screen delete card prompt](/screenshots/new/delete-card-prompt.jpg)

### Edit Deck:
![edit deck screen](/screenshots/new/edit-deck-screen.jpg)
When the user navigates to this page, `/decks/:deckId/edit`, they are able to modify information on an existing deck. The Edit Deck screen has the following features:
- A breadcrumb navigation bar with a link to the Home page, followed by the name of the deck being edited, which is also a link to that deck's Deck
screen, and lastly, the text: `Edit Deck`.
- It displays the same form as the Create Deck screen, except it is pre-filled with information for the existing deck.
- The user can edit and update the form.
- If the user clicks on the `Cancel` or the `Submit` button, the user is taken back to the Deck screen.

### Add Card:
![add card screen](/screenshots/new/add-card-screen.jpg)
The Add Card page, `/decks/:deckId/cards/new`, allows the user to add new cards to the deck. This screen has the following features:
- A breadcrumb navigation bar with a link to the Home page, followed by the name of the deck to which cards are being added, which is also a link
to that deck's Deck screen, and finally the text: `Add Card`.
- The screen displays a form with the `Front` and `Back` fields for a new card. Both fields use a `<textarea>` tag that can accommodate multiple
lines of text.
- If the user clicks on the `Done` button, the user is taken to the Deck screen.
- If the user clicks on the `Save` button, a new card is created and associated with the relevant deck. Then, the form is cleared and the process
for adding a new card is restarted.

### Edit Card:
![edit card screen](/screenshots/new/edit-card-screen.jpg)
The Edit Card page, `/decks/:deckId/cards/:cardId/edit`, allows the user to modify information on an existing card in a deck. This screen has the following features:
- A breadcrumb navigation bar with a link to the Home page, followed by the name of the deck of which the edited card is a member of, a link to
that deck's Deck screen, and finally the text: `Edit Card :cardId`. 
- It displays the same form as the Add Card screen, except it is pre-filled with information for the existing card. It can be edited and updated.
- If the user clicks on either the `Cancel` or `Submit` button, the user is taken back to the Deck screen.
