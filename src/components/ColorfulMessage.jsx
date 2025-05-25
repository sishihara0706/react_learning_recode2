// export const ColorfulMessage = (props) => {
//   const { color, children } = props; // ここでオブジェクトの分割代入が使われる
//   const contentStyleA = {
//     color, // ここで省略記法が使われる
//     fontSize: '18px',
//     // font-size: "18px" これが本来のCSSの書き方であるが、Reactではハイフンでつなぐ書き方は許容していないため、上記のキャメルケースで書く必要がある。
//   };
//   return <p style={contentStyleA}>{children}</p>;
// };
export const ColorfulMessage = ({ color, children }) => {  // この段階でもオブジェクトの分割代入は使える
  console.log("--ColorfulMessage--");
  const contentStyleA = {
    color, // ここで省略記法が使われる
    fontSize: '18px',
    // font-size: "18px" これが本来のCSSの書き方であるが、Reactではハイフンでつなぐ書き方は許容していないため、上記のキャメルケースで書く必要がある。
  };
  return <p style={contentStyleA}>{children}</p>;
};
