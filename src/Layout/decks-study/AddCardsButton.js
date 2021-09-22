import React from "react";
import { useHistory } from "react-router";

function AddCardsButton({ deckId }) {
  const history = useHistory();
  return (
    <button
      type="button"
      class="btn btn-primary"
      onClick={() => history.push(`/decks/${deckId}/cards/new`)}
    >
      <span class="oi oi-plus" /> Add Cards
    </button>
  );
}

export default AddCardsButton;
