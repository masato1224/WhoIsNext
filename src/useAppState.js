import { useState } from "react";
import { list } from "./menbers";
import { useConditionalTimeout } from "beautiful-react-hooks";

export const useAppState = () => {
  const [member, setMember] = useState({});
  const [intervalId, setIntervalId] = useState(null);
  const [isStarted, setIsStarted] = useState(false);

  useConditionalTimeout(
    () => {
      stopToChoose(intervalId, setIsStarted);
    },
    3000,
    isStarted
  );

  const chooseMember = startToChoose(setIntervalId, setMember, setIsStarted);

  return [member.name, member.style, chooseMember];
};

function startToChoose(setIntervalId, setMember, setIsStarted) {
  return () => {
    setIntervalId(
      setInterval(() => {
        setMember(chooseMemberRandomly());
      }, 50)
    );
    // TODO: idで指定しているところもっと上手くできないか？
    document.getElementById("startButton").disabled = true;
    document.getElementById("nameCard").classList.remove("selected");
    setIsStarted(true);
  };
}

function stopToChoose(intervalId, setIsStarted) {
  clearInterval(intervalId);
  // TODO: idで指定しているところもっと上手くできないか？
  document.getElementById("startButton").disabled = false;
  document.getElementById("nameCard").classList.add("selected");
  setIsStarted(false);
}

function chooseMemberRandomly() {
  const member = list[Math.floor(Math.random() * Math.floor(list.length))];
  return { name: member.name, style: { backgroundColor: member.color } };
}
