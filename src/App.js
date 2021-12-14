import { useState } from "react";
import "./App.css";
import Buttons from "./Buttons";

function App() {
  const [quote, setquote] = useState(
    "Deserunt amet consectetur amet eiusmod aliquip sit laboris."
  );
  const [author, setauthor] = useState("-Enim");

  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">{quote}</div>
        <div id="author">{author}</div>
        <Buttons setquote={setquote} setauthor={setauthor} />
      </div>
    </div>
  );
}

export default App;
