import React from "react";
import { useHistory } from "react-router-dom";

function StudyDeckButton({ deck }) {
  const history = useHistory();
  return (
    <button
      type="button"
      className="btn btn-primary mr-2"
      onClick={() => history.push(`/decks/${deck.id}/study`)}
    >
      <span className="oi oi-book" /> Study
    </button>
  );
}

export default StudyDeckButton;
