import React from "react";
import { useHistory } from "react-router-dom";

function ViewDeckButton({ deck }) {
  const history = useHistory();

  return (
    <button
      type="button"
      className="btn btn-dark mr-2"
      onClick={() => history.push(`/decks/${deck.id}`)}
    >
      <span className="oi oi-eye" /> View
    </button>
  );
}

export default ViewDeckButton;
