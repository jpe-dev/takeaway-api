var express = require("express");
app = express();
var router = express.Router();

app.use(express.json());

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

module.exports = router;
