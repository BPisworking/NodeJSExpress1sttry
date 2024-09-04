import express from 'express';
import debug from 'debug';
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req, res) => {
    res.send("Hello BP456");
});

const log = debug('app');
app.listen(port, () => {
    log("Listening on port " + port);
});
