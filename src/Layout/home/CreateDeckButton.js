import React from "react";
import { useHistory } from "react-router-dom";

function CreateDeckButton() {
  const history = useHistory();
  return (
    <button
      type="button"
      class="btn btn-secondary mb-2 btn-lg"
      onClick={() => history.push("/decks/new")}
    >
      <span class="oi oi-plus" /> Create Deck
    </button>
  );
}

export default CreateDeckButton;
