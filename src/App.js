import { useState } from "react";
import "./styles.css";

let emojiArr = {
  smile: "😊",
  excited: "🤩",
  love: "💗",
  sad: "😪",
  cash: "💸"
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
    Object.entries(emojiArr).filter((e) => {
      console.log(e[0] === textValue);
      return e[0] === textValue
        ? emojiFind(textValue + " exist in the database")
        : emojiFind("We don't have your search emoji!");
    });
  }
  function getkey(event) {
    emojiFind(event.target.id);
  }
  return (
    <div className="App">
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
          id={element[0]}
          key={key}
          style={{ margin: "4%", fontSize: "200%", cursor: "pointer" }}
        >
          {element[1]}
        </span>
      ))}
    </div>
  );
}
