import React, { useState } from "react";
import "./Magiceight.css";

function choice(arr) {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}


function EightBall(props) {
  const [msg, setMsg] = useState("Ask a question...");
  const [color, setColor] = useState("black");

  function handleClick() {
    const { msg, color } = choice(props.answers);
    setMsg(msg);
    setColor(color);
  }

  function reset() {
    setMsg("Ask a question...")
    setColor("black")
  }

  return (
        <div>
            <h1 className="eight-ball-title">Magic Eight Ball</h1>
            <div className="eight"></div>
            <div
            className="eight-ball"
            onClick={handleClick}
            style={{ backgroundColor: color }}
            >
            <b className="eight-ball-msg">{msg}</b>
        </div>
        <button className="button" onClick={reset}>Reset</button>
    </div>
  );
}

EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" }
  ]
};

export default EightBall;