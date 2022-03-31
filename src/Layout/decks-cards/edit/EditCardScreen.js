import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../../../utils/api/index";

import EditCardScreenBreadcrumbNavBar from "./EditCardScreenBreadcrumbNavBar";
import CardForm from "../CardForm";
import EditCardCancelButton from "./EditCardCancelButton";

function EditCardScreen() {
  const [deck, setDeck] = useState({});
  const [preExistingCard, setPreExistingCard] = useState({});
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");

  const deckId = useParams().deckId;
  const cardId = useParams().cardId;
  const history = useHistory();

  useEffect(() => {
    // function to load the deck from the API
    async function loadDeck() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
    }

    // function to load the card from the API
    async function loadCard() {
      const response = readCard(cardId);
      const cardFromAPI = await response;
      setPreExistingCard(cardFromAPI);
      setCardFront(cardFromAPI.front);
      setCardBack(cardFromAPI.back);
    }
    loadDeck();
    loadCard();
  }, [deckId, cardId]);

  // handling form changes
  const handleCardFrontChange = (event) => setCardFront(event.target.value);
  const handleCardBackChange = (event) => setCardBack(event.target.value);

  // Updating the card with the changes to the front and back of the card
  // Clicking submit will also then take the user back to that deck's screen
  const handleEditCardSubmit = (event) => {
    event.preventDefault();
    updateCard({ ...preExistingCard, front: cardFront, back: cardBack })
      .then((updatedCard) => history.push(`/decks/${updatedCard.deckId}`));
  };

  return (
    <div>
      <EditCardScreenBreadcrumbNavBar
        deckName={deck.name}
        deckId={deckId}
        cardId={cardId}
      />
      <h2>Edit Card</h2>
      <form onSubmit={handleEditCardSubmit}>
        <CardForm
          cardFront={cardFront}
          handleCardFrontChange={handleCardFrontChange}
          cardBack={cardBack}
          handleCardBackChange={handleCardBackChange}
        />
        <EditCardCancelButton deckId={deckId} />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditCardScreen;
