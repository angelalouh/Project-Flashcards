import React from "react";
import { useHistory } from "react-router-dom";

function CreateDeckButton() {
  const history = useHistory();
  return (
    <button
      type="button"
      className="btn btn-success mb-3 btn-lg"
      onClick={() => history.push("/decks/new")}
    >
      <span className="oi oi-plus" /> Create Deck
    </button>
  );
}

export default CreateDeckButton;
