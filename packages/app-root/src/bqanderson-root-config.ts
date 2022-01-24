import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@bqanderson/todo",
  app: () => System.import("@bqanderson/todo"),
  activeWhen: ["/todo"]
});

start({
  urlRerouteOnly: true,
});
