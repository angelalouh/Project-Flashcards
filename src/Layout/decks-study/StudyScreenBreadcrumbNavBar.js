import React from "react";
import { Link } from 'react-router-dom';

function StudyScreenBreadcrumbNavBar({ deckId, deck }) {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <Link to="/"><span class="oi oi-home"/> Home</Link>
        </li>
        <li class="breadcrumb-item">
          <Link to={`/decks/${deckId}`}>{deck.name}</Link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Study
        </li>
      </ol>
    </nav>
  );
}

export default StudyScreenBreadcrumbNavBar;
