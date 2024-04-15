import {
  RouterProvider,
  createBrowserRouter,
  redirect,
  useRouteError,
} from "react-router-dom";
import { PATHS } from "../../shared/lib/react-router";
import { GuestLayout } from "../../pages/layouts";
import { registerPageRoute } from "../../pages/registration";
import { loginPageRoute } from "../../pages/login";

function Error() {
  const error = useRouteError();
  if (error) throw error;
  return null;
}

const router = createBrowserRouter([
  {
    errorElement: <Error />,
    children: [
      {
        element: <GuestLayout />,
        children: [registerPageRoute, loginPageRoute],
      },
      {
        loader: async () => redirect(PATHS.page404),
        path: "*",
      },
    ],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
