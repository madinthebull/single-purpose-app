import React from "react";
import emoji from "../assets/static/emoji.svg";

function EntryScreenSuccess() {
  return (
    <div className="entry-screen-success">
      <img className="emoji" src={emoji} alt="emoji" />
    </div>
  );
}

export default EntryScreenSuccess;
