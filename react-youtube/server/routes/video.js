const express = require("express");
const router = express.Router();
// const { Video } = require("../models/Video");
const multer = require("multer");
const { auth } = require("../middleware/auth");

let storage = multer.diskStorage({
    destination: (req, filc, cb) => {
        // 파일 저장 목적지
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`); // 파일이름 시간과 오리지널이름
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname); // 확장자명 체크
        if (ext !== ".mp4") {
            return cb(res.status(400).end("사진, 동영상만 업로드가능합니다"), false);
        }
        cb(null, true);
    },
});

const upload = multer({ storage: storage }).single("file");

//=================================
//             Video
//=================================

router.post("/uploadfiles", (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.json({ success: false, err });
        }
        return res.json({ success: true, url: res.req.file.path, fileName: res.req.file.filename });
    });
});

module.exports = router;
