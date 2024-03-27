import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div></div>
);

function next(n) {
  const stringN = "" + n;
  let sumN = 2;
  let i = 0;

  while (i < stringN.length) {
    sumN += +stringN[i];
    i++;
  }

  return +n + sumN;
}
