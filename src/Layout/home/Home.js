import React, { useEffect, useState } from "react";
import { listDecks } from "../../utils/api/index";

import CreateDeckButton from "./CreateDeckButton";
import ViewDeckButton from "./ViewDeckButton";
import StudyDeckButton from "./StudyDeckButton";
import DeleteDeckButton from "./DeleteDeckButton";

function Home() {
  const [decks, setDecks] = useState([]);

  // Loading all of the decks from the API
  useEffect(() => {
    async function loadDecks() {
      const response = listDecks();
      const decksFromAPI = await response;
      setDecks(decksFromAPI);
    }
    loadDecks();
  }, []);

  return (
    <div>
      <CreateDeckButton />

      {/* Creating a Bootstrap card for each deck and the associated buttons */}
      {decks.map((deck, index) => {
        return (
          <div class="card" key={index}>
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h5 class="card-title">{deck.name}</h5>
                <h6 class="card-subtitle text-muted">
                  {deck.cards.length} cards
                </h6>
              </div>
              <p class="card-text">{deck.description}</p>
              <div class="d-flex">
                <div class="mr-auto">
                  <ViewDeckButton deck={deck} />
                  <StudyDeckButton deck={deck} />
                </div>
                <div>
                  <DeleteDeckButton deck={deck} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
