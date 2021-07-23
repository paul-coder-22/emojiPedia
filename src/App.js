import { useState } from "react";
import "./styles.css";

let emojiArr = {
  "😊": "smile",
  "🤩": "excited",
  "💗": "love",
  "😪": "sad",
  "💸": "cash"
};
export default function App() {
  const [name, changeName] = useState("");
  const [emoji, emojiFind] = useState("Check your emoji exist or not");

  function handler(event) {
    const text1 = event.target.value;
    changeName(text1);
  }

  function checkName(event) {
    const textValue = event.target.value;
    /*     Object.entries(emojiArr).find((e) => {
      console.log(e[1] === textValue);
      return e[1] === textValue
        ? emojiFind(textValue + " exist in the list")
        : emojiFind("We don't have your search emoji!");
    }); */
    const item = Object.entries(emojiArr).filter((item) =>
      item[1].includes(textValue)
    );
    [...item].map((e, k) => emojiFind(e[k]));
  }
  function getkey(event) {
    emojiFind(event.target.id);
  }
  return (
    <div className="App">
      <h2>EmojiPedia</h2>
      <input onChange={handler} value={name} onKeyUp={checkName} />
      <br></br>
      <div style={{ textAlign: "center", color: "#fff" }}>
        <strong>{name}</strong>
        <hr></hr>
        <strong>{emoji}</strong>
      </div>

      {Object.entries(emojiArr).map((element, key) => (
        <span
          onClick={getkey}
          id={element[1]}
          key={key}
          style={{ margin: "4%", fontSize: "200%", cursor: "pointer" }}
        >
          {element[0]}
        </span>
      ))}
    </div>
  );
}
