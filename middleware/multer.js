import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Get directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define upload folder path
const uploadPath = path.join(__dirname, "../uploads");

// Ensure the upload folder exists, create it if it doesn't
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Configure multer disk storage
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, uploadPath); // Save files in 'uploads' folder
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "-" + file.originalname); // Append timestamp to file name
  },
});

const upload = multer({ storage });

export default upload;

// import multer from "multer";

// const storage = multer.diskStorage({
//   filename: function (req, file, callback) {
//     callback(null, file.originalname);
//   },
// });

// const upload = multer({ storage });

// export default upload;
