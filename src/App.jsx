import React, { useEffect, useState } from "react";

import { ColorfulMessage } from "./components/ColorfulMessage.jsx";

const App = () => {
  const [num, setNum] = useState(0);
  const [faseShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faseShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faseShowFlag || setFaceShowFlag(true);
      } else {
        faseShowFlag && setFaceShowFlag(false);
      }
    }
    //eslint-dsable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>+1</button>
      <button onClick={onClickSwitchShowFlag}>On/Off</button>
      <p>{num}</p>
      {faseShowFlag && <p>(/ω＼)</p>}
    </>
  );
};

export default App;
