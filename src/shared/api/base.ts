import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export const METHODS = {
  apiBaseUrl: import.meta.env.VITE_API_URL,
  registration: "/registr",
  sendEmailCode: "/sendemailcode",
  confirmEmail: "/confirmemail",
  login: "/login",
  profile: "/profile",
  drivers: "/drivers",
  logout: "/logout",
  receipt: "/receipt",
  cars: "/cars",
  subscription: "/subscription",
  changePassword: "/changepassword",
  sessions: "/sessions",
  start: "/start",
  cost: "/cost",
  fines: "/fines",
  zones: "/zones",
  limitations: "/limitations",
  documents: "/doc",
  guest: "/guest",
  guestPayment: "/guestPayment",
  fineImg: "/fineImage",
  paymentSubscription: "/paymentSubscription",
};

// Потенциально, можно передавать accessToken
export const apiInstance = axios.create({
  baseURL: METHODS.apiBaseUrl,
});

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  logOnDev(`[API] | Request [${JSON.stringify(config)}]`);
  config.headers["Access-Control-Allow-Origin"] = `*`;
  const token = tokens.getAuthToken()
    ? tokens.getAuthToken()
    : tokens.getToken();
  if (!token) {
    return config;
  }
  config.headers["Authorization"] = `${token}`;
  config.headers["Content-Type"] = `application/json`;

  return config;
};

const onErrorResponse = (
  error: AxiosError | Error
):
  | AxiosResponse<any, any>
  | AxiosResponse<unknown, any>
  | undefined
  | string => {
  if (axios.isAxiosError(error)) {
    const { message } = error;
    const { method, url } = error.config as AxiosRequestConfig;
    const { status } = (error.response as AxiosResponse) ?? {};

    logOnDev(
      `[API] | Error [${method?.toUpperCase()} ${url} | Error ${status} ${message}]`
    );

    switch (status) {
      case 400: {
        // "Invalid request"
        //throwErrorToast(`${error.response.errorMessage}`);
        return error.response;
      }

      case 401: {
        return error.response;
      }
      case 403: {
        // "Permission denied"
        return error.response;
      }
      case 404: {
        // "Invalid request"
        return error.response;
      }
      case 405: {
        // "Method not allowed"
        return error.response;
      }
      case 500: {
        // "Server error"
        return error.response;
      }
      default: {
        // "Unknown error occurred"
        return error.response;
      }
    }

    if (status === 401) {
      // Delete Token & Go To Login Page if you required.
      /* localStorage.removeItem("tokens");
            tokens.removeAuthToken(); */
    }
    // throwErrorToast(`${message}`);
  } else {
    logOnDev(`[API] | Error [${error.message}]`);
    return error.message;
  }
};

apiInstance.interceptors.request.use(onRequest, onErrorResponse);

apiInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    logOnDev(response);
    return response;
  },
  onErrorResponse
);
