import React from "react";
import "components/commentsHandler/buttons/buttonFormComments.css";

function ButtonFormComments({ handleClear }) {
  return (
    <div className="button-form-comments">
      <input id="add-comments-button" type="submit" value="Add" />
      <input
        id="clear-comments-button"
        type="button"
        value="Clear"
        onClick={handleClear}
      />
    </div>
  );
}
export default ButtonFormComments;
