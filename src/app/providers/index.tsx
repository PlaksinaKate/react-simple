import { BrowserRouter } from "./router-provider";
import "../../shared/main.css";
import { withSuspense } from "../../shared/lib/react/hocs";
import { LoadingIcon } from "../../shared/ui/Icons";
import { Provider } from "react-redux";
import { store } from "../../shared/lib/redux";

function Providers() {
  return (
    <Provider store={store}>
      <BrowserRouter />
    </Provider>
  );
}

export const SuspensedProvider = withSuspense(Providers, {
  fallback: <LoadingIcon />,
});
export const LocalProvider = SuspensedProvider;
