const express = require("express");
const router = express.Router();
// const { Video } = require("../models/Video");
const multer = require("multer");
const { auth } = require("../middleware/auth");
var ffmpeg = require("fluent-ffmpeg");

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

router.post("/thumbnail", (req, res) => {
    // 썸네일 생성 비디오 정보 가져오기
    let filePath = "";
    let fileDuration = "";

    ffmpeg.ffprobe(req.body.url, function (err, metadata) {
        console.dir(metadata);
        console.log(metadata.format.duration);
        fileDuration = metadata.format.duration;
    });
    // 썸네일 생성
    ffmpeg(req.body.url)
        .on("filenames", function (filenames) {
            console.log("생성" + filenames.join(", "));
            console.log(filenames);

            filePath = "uploads/thumbnails/" + filenames[0];
        })
        .on("end", function () {
            console.log("스크린샷 찍기");
            return res.json({ success: true, url: filePath, fileDuration: fileDuration });
        })
        .on("error", function (err) {
            console.log(err);
            return res.json({ success: false, err });
        })
        .screenshots({
            count: 3,
            folder: "upload/thunmbnails",
            size: "320x240",
            // '%b' = input basename ( filename 중에 확장자명은 빼고)
            filename: "thunmnail-%b.png",
        });
});

module.exports = router;
