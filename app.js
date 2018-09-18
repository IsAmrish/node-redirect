const express = require('express');
const app = express();
const targetUrl = 'https://openebs-community.slack.com/join/shared_invite/enQtMjQzMTg4NTcyNTY2LTJiMzVjYjA5ZDk3YmI4NjAxY2QyYmI3MTA1MmUxMTAzNTU0NTM5NTViOTIxMjA1NWQ4NzVmMTBiNjk0NDU1YzQ';

function handleRedirect(req, res) {
    res.redirect(targetUrl);
}

app.get("/", handleRedirect);

const port = process.env.port || 3000;
app.listen(port);