const multer = require("multer");
const path = require("path");

const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp"
};

const itemsStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "uploads/pictures/items");
    },
    filename: (req, file, callback) => {
        const fileInfo = path.parse(file.originalname);
        const name = fileInfo.name.split(" ").join("_");
        const extension = MIME_TYPES[file.mimetype];

        if (!MIME_TYPES.hasOwnProperty(file.mimetype)) {
            return callback(new Error('Invalid file type'));
        }
        callback(null, `${name}_${new Date().getTime()}.${extension}`);
    }
});

const uploadItems = multer({ storage: itemsStorage }).single('img_url');

module.exports = { uploadItems };