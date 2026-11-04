const multer = require("multer");
const path = require("path");

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const allowed = [".jpg", ".png", ".jpeg", ".webp"];
  if (!allowed.includes(ext)) {
    return cb(new Error("only images are allowed (png,jpg,jpeg,webp)"), false);
  }
  cb(null, true);
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../assets"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const MB = 1024 * 1024;
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * MB },
});
module.exports = upload;
