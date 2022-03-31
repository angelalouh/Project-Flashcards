import React from "react";
import { useHistory } from "react-router-dom";

function AddCardDoneButton({ deckId }) {
  const history = useHistory();

  return (
    <button
      type="button"
      className="btn btn-dark mr-2"
      onClick={() => history.push(`/decks/${deckId}`)}
    >
      Done
    </button>
  );
}

export default AddCardDoneButton;
