import { BrowserRouter } from "./router-provider";
import '../../shared/main.css'
import { withSuspense } from "../../shared/lib/react/hocs";
import { LoadingIcon } from "../../shared/ui/Icons";

function Providers() {
  return <BrowserRouter />;
}

const SuspensedProvider = withSuspense(Providers, {
  fallback: <LoadingIcon />,
});
export const Provider = SuspensedProvider;
