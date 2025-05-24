// Reactの画面を表す関数(コンポーネント)は大文字始まりになる（パスカルケース）

import { ColorfulMessage } from "./components/ColorfulMessage";

// const App = () => <h1>こんにちは!</h1>; // returnで返すものが一つの場合はこう書ける
export const App = () => {
  const onClickButton = () => alert();
  const contentStyleB = {
    color: 'green',
    fontSize: '18px',
    // font-size: "18px" これが本来のCSSの書き方であるが、Reactではハイフンでつなぐ書き方は許容していないため、上記のキャメルケースで書く必要がある。
  };
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です!</ColorfulMessage>
      {/* {console.log('hoge')} */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
