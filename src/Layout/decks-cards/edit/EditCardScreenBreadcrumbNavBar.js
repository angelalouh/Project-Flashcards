import React from "react";
import { Link } from "react-router-dom";

function EditCardScreenBreadcrumbNavBar({ deckName, deckId, cardId }) {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <Link to="/">
            <span class="oi oi-home" />
            Home
          </Link>
        </li>
        <li class="breadcrumb-item">
          <Link to={`/decks/${deckId}`}>Deck: {deckName}</Link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Edit Card {cardId}
        </li>
      </ol>
    </nav>
  );
}

export default EditCardScreenBreadcrumbNavBar;
