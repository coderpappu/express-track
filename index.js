const express = require("express");
const handler = require("./outer");
const multer = require("multer");
const UPLOADS_FOLDER = "./uploads/";
const path = require('path');


const storage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null, UPLOADS_FOLDER);
    },
    filename : (req, file, cb)=>{
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname
                            .replace(fileExt, "")
                            .toLowerCase()
                            .split()
                            .join('-') + "-" + Date.now();
        cb(null, fileName + fileExt);

    }

})

const upload = multer({ 
    storage : storage,
    limits : {
        fileSize : 1000000,
    },
    fileFilter : (req, file, cb) =>{
        if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
            cb(null, true)
        }else{
            cb(new Error('only jpg png jpeg suported'));

        }
    }
 });

const app = express();

app.post("/",upload.single('avatar'),(req, res) => {

    res.send("Submitted!..");
  }
);

app.use((err, req, res, next) =>{
    if(err){
        if(err instanceof multer.MulterError){
            res.status(500).send('There was an upload error');
        }else{
            res.status(500).send(err.message);
        }
    }else{
        res.send('Succesful');
      
    }
})

app.listen(3000, () => {
  console.log("listening port 3000");
});
