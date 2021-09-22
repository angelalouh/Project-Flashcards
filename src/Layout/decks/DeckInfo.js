import React from "react";
import { useHistory } from "react-router-dom";
import DeckScreenDeleteDeckButton from "./DeckScreenDeleteDeckButton";
import DeckScreenCard from "./DeckScreenCard";

// This component displays all of a specific deck's info and the buttons used to interact with the deck
function DeckInfo({ deckName, deckDescription, deckId, cards, url }) {
    const history = useHistory();

  return (
    <div>
      <h1>{deckName}</h1>
      <p>{deckDescription}</p>

      <div class="d-flex mb-4">
        <div class="mr-auto">
          <button
            type="button"
            class="btn btn-secondary mr-2"
            onClick={() => history.push(`/decks/${deckId}/edit`)}
          >
            <span class="oi oi-pencil" /> Edit
          </button>
          <button
            type="button"
            class="btn btn-primary mr-2"
            onClick={() => history.push(`/decks/${deckId}/study`)}
          >
            <span class="oi oi-book" /> Study
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => history.push(`/decks/${deckId}/cards/new`)}
          >
            <span class="oi oi-plus" /> Add Cards
          </button>
        </div>

        <div>
          <DeckScreenDeleteDeckButton deckId={deckId} />
        </div>
      </div>

      <div>
        <h2>Cards</h2>

        {/* Renders the cards in the deck and the edit card and delete card buttons */}
        <DeckScreenCard cards={cards} deckId={deckId} url={url} />
      </div>
    </div>
  );
}

export default DeckInfo;
