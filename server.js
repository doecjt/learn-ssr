import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./dist/App.js";

const server = express();

server.get("/", (req, res) => {
  const app = React.createElement(App);
  const html = renderToString(app);

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Learn SSR</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
  `);
});

const port = 3000;
server.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
