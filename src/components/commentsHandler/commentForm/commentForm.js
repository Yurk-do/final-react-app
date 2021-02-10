import React, { useState, useCallback } from "react";
import "components/commentsHandler/commentForm/commentForm.css";
import ButtonFormComments from "components/commentsHandler/buttons/buttonFormComments.js";

const CommentForm = (props) => {
  const [commentText, setCommentText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const comment = {
      text: commentText,
      userName: "",
      date: Date().toString(),
    };

    setCommentText("");

    props.onCreateComment(comment);
  }

  const submitCallback = useCallback((event) => handleSubmit(event), [
    commentText.length,
  ]);

  return (
    <div className="comment-form">
      <form onSubmit={submitCallback}>
        <input
          id="comment-text"
          type="text"
          name="comment-text"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
        <ButtonFormComments handleClear={() => setCommentText("")} />
      </form>
    </div>
  );
};

export default CommentForm;
