const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// app.get("/", (req, res) => res.type('html').send(html));

    //Point to public folder
    app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



