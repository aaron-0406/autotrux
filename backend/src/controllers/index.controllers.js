const controller = {};
const path = require("path");

controller.index =  (req, res) => {
    return res.sendFile(path.join(__dirname, "../public/build", "index.html"));
}

module.exports = controller;