import React from "react";
import "./styles.css";
import NaviBar from "./component/NaviBar";
import Buttons from "./component/Buttons";
import NameCard from "./component/NameCard";
import { useAppState } from "./useAppState";

export default function App() {
  // TODO: メンバー情報は他で持った方がよさそう
  const [name, style, chooseMember] = useAppState();

  return (
    <div className="App">
      <NaviBar appName="Who's Next?" />
      <Buttons startOnClick={() => chooseMember()} />
      <NameCard color={style} name={name} />
    </div>
  );
}
