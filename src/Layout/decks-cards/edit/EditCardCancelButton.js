import React from "react";
import { useHistory } from "react-router-dom";

function EditCardCancelButton({ deckId }) {
  const history = useHistory();

  return (
    <button
      type="button"
      className="btn btn-dark mr-2"
      onClick={() => history.push(`/decks/${deckId}`)}
    >
      Cancel
    </button>
  );
}

export default EditCardCancelButton;
