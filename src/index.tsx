import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { Auth0Provider } from "./components/Auth/react-auth0-spa";
import { AUTH_CONFIG } from './components/Auth/auth0-variables';
import history from "./utils/history";

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={AUTH_CONFIG.domain}
    client_id={AUTH_CONFIG.clientId}
    redirect_uri={AUTH_CONFIG.callbackUrl}
    onRedirectCallback={onRedirectCallback}
  / >
  ,
  document.getElementById("root")
);

serviceWorker.unregister();
