import ReactDOM from "react-dom/client";
import { Provider } from "./providers";
import './firebase/index.js'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider />
);
