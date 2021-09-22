import React from "react";
import { Link } from 'react-router-dom';

function DeckScreenBreadcrumbNavBar({ deckName }) {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <Link to="/"><span class="oi oi-home"/> Home</Link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {deckName}
        </li>
      </ol>
    </nav>
  );
}

export default DeckScreenBreadcrumbNavBar;
