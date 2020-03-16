import React, { useState } from "react";
import "../styles.css";
import { list } from "../menbers";

export default function WhoIsNext() {
  const [name, setName] = useState("");
  const [colcr, setColor] = useState({});
  const [roulette, setRoulette] = useState();

  const chouse = e => {
    const len = list.length;
    setRoulette(
      setInterval(function() {
        const member = list[Math.floor(Math.random() * Math.floor(len))];
        setName(member.name);
        setColor({ backgroundColor: member.color });
      }, 100)
    );
    document.getElementById("startButton").disabled = true;
  };

  const stop = () => {
    if (!!roulette) {
      clearInterval(roulette);
      const len = list.length;
      const member = list[Math.floor(Math.random() * Math.floor(len))];
      setName(member.name);
      setColor({ backgroundColor: member.color });
      document.getElementById("startButton").disabled = false;
      setRoulette();
    }
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="1">
          Who's Next?
        </a>
        <span className="navbar-text">
          You don't have to worry about next parson anymore!
        </span>
      </nav>
      <button
        id="startButton"
        className="btn btn-outline-primary btn-lg mt-3 mr-2"
        onClick={() => chouse()}
      >
        Spin the wheel
      </button>
      <button
        id="stopButton"
        className="btn btn-outline-danger btn-lg mt-3"
        onClick={() => stop()}
      >
        stop !
      </button>
      <div className="NameCard mt-3" style={colcr}>
        {name}
      </div>
    </div>
  );
}
