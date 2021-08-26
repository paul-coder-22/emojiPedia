import React from "react";

function EmojiListed({ arrOfEmoji, onClickEvent }) {
  return (
    <>
      {Object.entries(arrOfEmoji).map((emoji, key) => (
        <span
          onClick={onClickEvent}
          id={emoji[1]}
          key={key}
          style={{ margin: "4%", fontSize: "200%", cursor: "pointer" }}
        >
          {emoji[0]}
        </span>
      ))}
    </>
  );
}

export default EmojiListed;
