import React, { useEffect, useState } from "react";
import { listDecks } from "../../utils/api/index";
import "./Home.css";

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
    <div className="home">
      <CreateDeckButton />

      {/* Creating a Bootstrap card for each deck and the associated buttons */}
      {decks.map((deck, index) => {
        return (
          <div className="deck-card card mt-2" key={index}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title font-weight-bold">{deck.name}</h5>
                <h6 className="card-subtitle text-muted">
                  {deck.cards.length} cards
                </h6>
              </div>
              <p className="card-text">{deck.description}</p>
              <div className="d-flex">
                <div className="mr-auto">
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
