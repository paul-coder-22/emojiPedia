import { useState } from "react";
import "./styles.css";

let emojiArr = {
  smile: "😊",
  Excited: "🤩",
  Love: "💗",
  Sad: "😪",
  cash: "💸"
};
export default function App() {
  const [name, changeName] = useState("");
  const [emoji, emojiFind] = useState("");

  function handler(event) {
    const { value } = event.target;
    changeName(value);
  }
  function getkey(event) {
    emojiFind(event.target.id);
  }
  return (
    <div className="App">
      <input onChange={handler} value={name} />
      <br></br>
      <div style={{ textAlign: "center" }}>
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
      {/* {arr.map(v => <p>{v}</p>)} */}
    </div>
  );
}
