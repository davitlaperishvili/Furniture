const path = require("path");

module.exports = {
    entry: "./source/js/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "scripts/js"),
    },
    watch: true,
};
