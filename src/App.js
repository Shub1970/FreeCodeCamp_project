import "./App.css";
import quote_author from "./quote_data";
import _color from "./colour_data";
import { useState } from "react";
function App() {
  const [Quote, setQuote] = useState(quote_author[0]);
  const [link, setLink] = useState(
    `https://twitter.com/intent/tweet?text=${Quote.quote}`
  );
  const [color, setColor] = useState(_color[0]);
  const handelClick = () => {
    const randomNumber = Math.ceil(Math.random() * 100);
    const randomColor = Math.ceil(Math.random() * _color.length);
    setQuote(quote_author[randomNumber]);
    setColor(_color[randomColor]);
    document.body.style.background = color;
    setLink(`https://twitter.com/intent/tweet?text=${Quote.quote}`);
  };
  document.body.style.background = color;
  return (
    <div className="flex-container">
      <div className="wrapper">
        <div className="quote-box">
          <i class="fa-solid fa-quote-left" style={{ color: color }}></i>
          <span className="quote-text" style={{ color: color }}>
            {Quote.quote}
          </span>
          <div className="quote-authore" style={{ color: color }}>
            - {Quote.author}
          </div>
          <div className="buttons">
            <div className="button" id="tweet-quote">
              <a
                className="fa-brands fa-square-twitter"
                target={"_top"}
                href={link}
                style={{ color: color }}
              ></a>
            </div>
            <button
              className="button"
              id="new-quote"
              style={{ background: color }}
              onClick={() => handelClick()}
            >
              new quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
