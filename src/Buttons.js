import React from "react";

const Buttons = ({ setquote, setauthor }) => {
  const quote = [
    "Deserunt amet consectetur amet eiusmod aliquip sit laboris.",
    "Sint consectetur incididunt dolore duis veniam laboris excepteur nostrud.",
    "Consequat ad dolor veniam commodo voluptate proident aliquip.",
    "Eu ad veniam non nisi aute quis voluptate excepteur veniam Lorem incididunt.",
  ];
  const author = [
    "-Enim",
    "-Excupa",
    "-Datat",
    "-Voluptate",
    "-Aliquip",
    "-Cillum",
  ];
  const newQupte = () => {
    setquote(quote[Math.floor(Math.random() * quote.length)]);
    setauthor(author[Math.floor(Math.random() * author.length)]);
  };
  return (
    <div style={{ justifyContent: "space-between", display: "flex" }}>
      <a href="twitter.com/intent/tweet" id="tweet-quote">
        tweet!
      </a>
      <button id="new-quote" onClick={newQupte}>
        New quote
      </button>
    </div>
  );
};

export default Buttons;
