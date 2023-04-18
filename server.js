import fs from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

// Constants
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function server() {
  // Create http server
  const app = express();

  // Add Vite or respective production middlewares
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  });
  app.use(vite.middlewares);

  // Serve HTML
  app.use('*', async (req, res) => {
    const url = req.originalUrl.replace(base, '');

    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      const html = template.split(`<!--ssr-outlet-->`);
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

      const { pipe } = await render(url, {
        onShellReady() {
          res.write(html[0]);
          pipe(res);
        },
        onShellError() {
          res.statusCode = 500;
          res.setHeader('content-type', 'text/html');
          res.send('<h1>Something went wrong</h1>');
        },
        onAllReady() {
          res.write(html[0] + html[1]);
          res.end();
        },
        onError(err) {
          console.error(err);
          logServerCrashReport(err);
        },
      });
    } catch (err) {
      vite.ssrFixStacktrace(err);
      console.log(err.stack);
      res.status(500).end(err.stack);
    }
  });

  // Start http server
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}

server();
