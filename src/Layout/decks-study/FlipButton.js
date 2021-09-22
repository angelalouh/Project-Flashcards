import React from "react";

function FlipButton({ setIsFrontOfCard }) {
  const flipCardHandler = () => {
    setIsFrontOfCard((currentSide) => !currentSide);
  };

  return (
    <button type="button" class="btn btn-secondary mr-2" onClick={flipCardHandler}>
      Flip
    </button>
  );
}

export default FlipButton;
