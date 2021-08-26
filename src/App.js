import { useState } from "react";
import EmojiListed from "./emojiRender";
import "./styles.css";

let emojiArr = {
  "": "Choose Your Emoji",
  "😊": "smile",
  "🤩": "excited",
  "💗": "love",
  "😪": "sad",
  "💸": "cash",
  "😜": "funny",
  "🍔": "burger",
  "🍟": "French Fries",
  "🌮": "taco",
  "🍜": "steaming Bowl",
  "♨️": "Hot Springs",
  "✨": "sparkel",
  "❤️‍🔥": "Heart on Fire",
  "🚅": "bullet-train",
  "🚗": "car",
  "✈️": "airplane"
};
export default function App() {
  const [name, changeName] = useState("");
  const [emoji, emojiFind] = useState("Check your emoji exist or not");

  function handler(event) {
    const inputEmoji = event.target.value;
    changeName(inputEmoji);

    const emojiObject = Object.entries(emojiArr).filter((item) =>
      item[0].includes(inputEmoji)
    );
    if (emojiObject.length === 0) {
      emojiFind("Not available in the database");
    } else {
      emojiFind(emojiObject.flat()[1]);
    }
  }

  /*   function checkName(event) {
    const userEmoji = event.target.value;
    const emojiObject = Object.entries(emojiArr).filter((item) =>
      item[0].includes(userEmoji)
    );
    if (emojiObject.length === 0) {
      emojiFind("Not available in the database");
    } else {
      emojiFind(emojiObject.flat()[1]);
    }
  } */

  function getkeyOfEmoji(event) {
    emojiFind(event.target.id);
  }

  return (
    <div className="App">
      <h2>🧀 Emoji-Pedia 🍔</h2>
      <h3>Enter Emoji or Choose any Emoji below to know Emoji namee</h3>
      <input
        onChange={handler}
        value={name}
        className="inputElement"
        placeholder="Search Here"
      />
      <br></br>
      <div style={{ textAlign: "center", color: "#fff" }}>
        <strong>{name}</strong>
        <hr></hr>

        <strong style={{ color: "red" }}>{emoji}</strong>
      </div>

      <EmojiListed arrOfEmoji={emojiArr} onClickEvent={getkeyOfEmoji} />
    </div>
  );
}

/*  {Object.entries(emojiArr).map((element, key) => (
        <span
          onClick={getkey}
          id={element[1]}
          key={key}
          style={{ margin: "4%", fontSize: "200%", cursor: "pointer" }}
        >
          {element[0]}
        </span>
      ))} */
