import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server.js'
import Routes from '../app/Routes'

export function render(req) {
  const content = renderToString(
    <StaticRouter>
      {Routes}
    </StaticRouter>,
  )

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>SSR</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="/index.js"></script>
    </body>
    </html>
  `
}
