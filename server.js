const express = require('express');
const next = require('next');
const server = express();
const PORT = process.env.PORT || 4000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev: dev
})
const handler = app.getRequestHandler();


app.prepare()
   .then(() => {

    server.get('/forgotpassword', (req, res) => {
      app.render(req, res, '/forgotpassword/reset', {})
    })

    server.get('/messages/:threadId/thread', (req, res) => {
      console.log('err');
      app.render(req, res, '/messages', { threadId: req.params.threadId })
    })

    server.get('*', (req, res) => {
      return handler(req, res);
    })

    server.listen(PORT, _ => console.log(`> server running on port ${PORT}`))
   })
   .catch((err) => {
    console.log(err);
    process.exit(1);
   })