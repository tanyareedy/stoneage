const router = require('express-promise-router')();
const ImageController = require('../controller/upload');

const multer = require('multer');
const  storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);

    }
});
const  fileFilter = (req, file, cb) => {
    //reject file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'  || file.mimetype === 'image/jpg' ){
        cb(null, true);
    }else{
        cb(new Error('invalid image type'),  false)
    }

}
const  upload = multer({storage:storage, fileFilter:fileFilter, limits:{
        fileSize: 1024 *1024 * 4
    }});

router.route('/trader/:code')
    // .get(ImageController.index)
    .post(upload.single('file'),ImageController.newTraderImage);

router.route('/guest')
    // .get(ImageController.index)
    .post(upload.single('file'),ImageController.newGuestImage);



module.exports = router;
