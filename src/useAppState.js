import { useState } from "react";
import { list } from "./menbers";

export const useAppState = () => {
  const [name, setName] = useState("");
  const [style, setStyle] = useState({});
  const [roulette, setRoulette] = useState();

  const listLength = list.length;

  const choseRandomMember = () => {
    const member = list[Math.floor(Math.random() * Math.floor(listLength))];
    setName(member.name);
    setStyle({ backgroundColor: member.color });
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

  return [name, style, start, stop];
};
