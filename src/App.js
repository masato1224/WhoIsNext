import React, { useEffect } from "react";
import "./styles.css";
import NaviBar from "./component/NaviBar";
import Buttons from "./component/Buttons";
import NameCard from "./component/NameCard";
import { useAppState } from "./useAppState";

export default function App() {
  // TODO: メンバー情報は他で持った方がよさそう
  const [name, style, chooseMember] = useAppState();

  useEffect(() => {
    /*global AWS*/
    var docClient = new AWS.DynamoDB.DocumentClient();
    var table = "Users";

    var params = {
      TableName: table
    };
    docClient.scan(params, function(err, data) {
      if (err) {
        console.log(JSON.stringify(err, undefined, 2));
      } else {
        console.log(JSON.stringify(data, undefined, 2));
      }
    });
  }, []);

  return (
    <div className="App">
      <NaviBar appName="Who's Next?" />
      <Buttons startOnClick={() => chooseMember()} />
      <NameCard color={style} name={name} />
    </div>
  );
}
