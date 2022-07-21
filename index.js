const express = require('express');
const multer = require('multer');
const path = require('path')

const app = express();

app.set('view engine', 'ejs')

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'images');
   },
   filename: function (req, file, cb) {
      console.log(file);
      cb(null, Date.now() + path.extname(file.originalname));
   }
});
const upload = multer({ storage: storage });



app.get('/', (req, res) => {
   res.redirect('upload')
})


app.get('/upload', (req, res) => {
   res.render('upload')
})

app.post('/upload', upload.single('image'), (req, res) => {

   res.send('Your Image has been uploaded successfully...!!')
})


app.listen(2007, () => {
   console.log('Server started on port 2007...');
})