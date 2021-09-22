import React from "react";
import { Link } from 'react-router-dom';

function AddCardScreenBreadcrumbNavBar({ deckName, deckId }) {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <Link to="/"><span class="oi oi-home"/> Home</Link>
        </li>
        <li class="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deckName}</Link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Add Card
        </li>
      </ol>
    </nav>
  );
}

export default AddCardScreenBreadcrumbNavBar;
