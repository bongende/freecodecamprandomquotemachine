import { useState } from "react";
import "./Card.css";

export default function Card() {
  const getRandQt = (arr) => {
    let color = `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(
      Math.random() * 255
    )},${Math.ceil(Math.random() * 255)})`;

    return { ...arr[Math.ceil(Math.random() * arr.length)], color };
  };

  const genQuote = async () => {
    let msg = await fetch("https://type.fit/api/quotes");
    let txt = await msg.json();
    return getRandQt(txt);
  };

  const [quote, setQuote] = useState({ author: "", text: "", color: "#fff" });

  if (!quote || (!quote.author && !quote.text))
    setTimeout(
      genQuote().then((el) => setQuote(el)),
      5000
    );

  return (
    <section id="quote-box" className="card">
      <blockquote id="" className="card-body">
        <q id="text" className="card-text">
          {quote.text}
        </q>
        <address id="author" className="">
          &#8212;{quote.author}
        </address>
      </blockquote>
      <div className="footer">
        <a href="twitter.com/intent/tweet" id="tweet-quote" target="_black">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <button
          id="new-quote"
          onClick={() => genQuote().then((el) => setQuote(el))}
          className="btn btn-primary"
        >
          New Quote
        </button>
      </div>
    </section>
  );
}

// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.
