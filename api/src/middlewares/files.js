const multer = require("multer");
const path = require("path");
const { v4 } = require("uuid");

const dir = path.join(__dirname, "../../public");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, v4() + path.extname(file.originalname));
  }
});

exports.upload = multer({ storage: storage }).any("files");
