const express = require('express');
const router = express.Router();

router.get('/projects', (req, res) => {
    const str = [{
        "name": "foo",
        "link": "gh-link",
        "desc": "foo-bar"
    }]
    res.end(JSON.stringify(str));
});

router.post('/addProject', (req, res) => {
    res.end('NA');
});

module.exports = router;