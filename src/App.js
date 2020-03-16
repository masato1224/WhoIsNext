import React, { useState } from "react";
import "./styles.css";
import { list } from "./menbers";
import NaviBar from "./component/NaviBar";
import Buttons from "./component/Buttons";
import NameCard from "./component/NameCard";

export default function App() {
  const [selectedMember, setMember] = useState({
    name: "",
    color: {}
  });
  const [roulette, setRoulette] = useState();
  const listLength = list.length;

  const choseRandomMember = () => {
    const member = list[Math.floor(Math.random() * Math.floor(listLength))];
    setMember({ name: member.name, color: { backgroundColor: member.color } });
  };

  const start = () => {
    setRoulette(
      setInterval(function() {
        choseRandomMember();
      }, 50)
    );
    document.getElementById("startButton").disabled = true;
    document.getElementById("nameCard").classList.remove("selected");
  };

  const stop = () => {
    if (!!roulette) {
      clearInterval(roulette);
      choseRandomMember();
      setRoulette();
      document.getElementById("startButton").disabled = false;
      document.getElementById("nameCard").classList.add("selected");
    }
  };

  return (
    <div className="App">
      <NaviBar appName="Who's Next?" />
      <Buttons startOnClick={() => start()} stopOnclick={() => stop()} />
      <NameCard color={selectedMember.color} name={selectedMember.name} />
    </div>
  );
}
