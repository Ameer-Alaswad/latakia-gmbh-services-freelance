import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import "./index.css";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://97271c792a6bafa542591cba75f02163@o4506543691333632.ingest.sentry.io/4506543701360640",
  integrations: [
    new Sentry.BrowserTracing({

      tracePropagationTargets: ["*"],
    }),
    new Sentry.Replay({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
