// Reactの画面を表す関数(コンポーネント)は大文字始まりになる（パスカルケース）
import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// const App = () => <h1>こんにちは!</h1>; // returnで返すものが一つの場合はこう書ける
export const App = () => {
  console.log("--App--");
  const [num, setNum] = useState(0); // 配列の分割代入
  const [isShowFace, setIsShowFace] = useState(false); // 配列の分割代入
  const onClickCountUp = () => {
    // setNum(num+1);                // 
    setNum((prev) => prev + 1); // 現在の値を更新したい場合
  };
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true);
      }
      else{
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>!(^^)!</p>}
    </>
  );
};
