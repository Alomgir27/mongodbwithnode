const express = require('express');
const multer  = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const url =  "mongodb+srv://dbUser:dbUser@cluster0.kqf4z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Create a storage object with a given configuration
const storage = new GridFsStorage({ url });

// Set multer storage engine to the newly created object
const upload = multer({ storage, dest: 'uploads/' });

const app = express();

// Upload your files as usual
app.post('/', upload.single('avatar'), (req, res, next) => { 
    /*....*/ 
    console.log(req);
    const {file} = req;
    const stream = fs.createReadStream(file.path);
    storage.fromStream(stream, req, file)
      .then(() => res.send('File uploaded'))
      .catch(() => res.status(500).send('error'));
});

app.post('/photos/upload', upload.array('photos', 12), (req, res, next) => {
    /*....*/ 
    console.log(req.body.photos)
});

app.post('/cool-profile', upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]), (req, res, next) => {
    /*....*/ 
});
