import { useEffect, useState } from "react";
import { useRef } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const myRef = useRef(0);
  const buttonRef1 = useRef(0);
  const buttonRef2 = useRef(0);

  const fetchData = async () => {
    await axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((res) => {
        const randomIndex = Math.floor(Math.random() * res.data.quotes.length);
        console.log(res.data);
        setText(res.data.quotes[randomIndex].quote);
        setAuthor(res.data.quotes[randomIndex].author);
      })
      .catch((err) => console.log(err));
  };

  const randomColor = () => {
    // const red = Math.floor(Math.random() * 255);
    // const green = Math.floor(Math.random() * 255);
    // const blue = Math.floor(Math.random() * 255);
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    myRef.current.style.backgroundColor = colors[randomColorIndex];
    myRef.current.style.color = colors[randomColorIndex];
    buttonRef1.current.style.backgroundColor = colors[randomColorIndex];
    buttonRef2.current.style.backgroundColor = colors[randomColorIndex];
  };

  function handleNew() {
    randomColor();
    fetchData();
  }

  useEffect(() => {
    randomColor();
    fetchData();
  }, []);

  return (
    <div ref={myRef} className="body">
      <div id="quote-box">
        <p id="text">
          <i className="fa-solid fa-quote-left"></i>
          {text}
        </p>
        <p id="author">- {author}</p>
        <div className="buttons-container">
          <a href="https://twitter.com/intent/tweet" target="_blank"><button ref={buttonRef1} className="social-button" id="tweet-quote">
            <i className="fa-brands fa-twitter"></i>
          </button></a>
          <button ref={buttonRef2} onClick={handleNew} id="new-quote">
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

/* "https://type.fit/api/quotes" */

const colors = [
  "#186F65",
  "#B2533E",
  "#B0926A",
  "#C38154",
  "#65647C",
  "#61764B",
  "#7D6E83",
  "#A25B5B",
  "#D67D3E",
  "#6B4F4F",
  "#506D84",
  "#6F4C5B",
  '#798777',
  '#383E56',
  '#696464'
];
