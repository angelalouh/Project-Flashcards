import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api/index";

function DeckScreenCard({ cards, deckId, url }) {
  const history = useHistory();

  // When the user clicks the "Delete" button associated with a card, this warning message will show.
  // If the user clicks "OK", the card is deleted using deleteCard()
  const handleDeleteCardClick = (card) => {
    if (
      window.confirm("Delete this card? You will not be able to recover it.")
    ) {
      deleteCard(card.id);
    } 
  };

  // Creates a Bootstrap card for each card in the deck with an edit and delete button
  const cardDisplay = cards.map((card, index) => {
    return (
      <div class="card" key={index}>
        <div class="card-body row">
          <div class="col-md-5">
            <p class="card-text">{card.front}</p>
          </div>
          <div class="col-md-5 ml-auto">
            <p class="card-text">{card.back}</p>
          </div>
        </div>

        <div class="ml-auto mt-2">
          <button
            type="button"
            class="btn btn-secondary mr-2 mb-2"
            onClick={() =>
              history.push(`/decks/${deckId}/cards/${card.id}/edit`)
            }
          >
            <span class="oi oi-pencil" /> Edit
          </button>

          <button
            type="button"
            class="btn btn-danger mr-3 mb-2"
            onClick={() => handleDeleteCardClick(card)}
          >
            {/* The anchor element will trigger the page to refresh after the card has been deleted.
            This makes it so that the refreshed page will no longer display the deleted card. */}
            <a href={url} class="text-white">
              <span class="oi oi-trash" />
            </a>
          </button>
        </div>
      </div>
    );
  });

  // If there are cards in this deck, they will render. If not, the following message will return instead.
  if (cards.length) {
    return <div>{cardDisplay}</div>;
  } else {
    return "There are no cards in this deck yet!";
  }
}

export default DeckScreenCard;
