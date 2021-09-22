import React from "react";
import { useHistory } from "react-router-dom";

function CreateDeckCancelButton() {
  const history = useHistory();

  return (
    <button
      type="button"
      class="btn btn-secondary mr-2"
      onClick={() => history.push("/")}
    >
      Cancel
    </button>
  );
}

export default CreateDeckCancelButton;
