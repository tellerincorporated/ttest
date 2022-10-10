const express = require ('express')
const app = express()
const multer = require ('multer')
const port = process.env.PORT || 8083
// ------------------------------------------


 //Multer Add files to folder
  const fstore = multer.diskStorage({
    destination: (req,  file, erc) =>{
      erc(null, "./tempdata")
    },
    filename:(req, file, cb) => {
      cb(null, Date.now() + "--" + file.originalname)
    }
  })
  const upload = multer({storage: fstore})
  
  
   //Point to public folder
  app.use(express.static('public'))
  

   //Go get function
  app.get('/', (req, res) => {
    res.status(200).send('/')
  })
  
   //Do post fuction for single file 
  app.post('/single', upload.single('image'),  (req, res) => {
  
    console.log(req.file)
    res.send('Single file upload succesful')
  } ) 
  

   //Do post fuction for Multiple file 
  app.post('/multiple', upload.array('file'), (req, res) => {
  
    console.log(req.files)
    res.send('Multiple file upload succesful')
  } ) 
 
  app.listen(port, () => console.log(`Teller Server Listening @ ${port}` ))


var go = (async function () {
 

    const { node } = await import("./call.mjs");
    const { version } = await import("./call.mjs");
    // console.log(node);
    console.log(version.version);
   
    // ADD files to ipfs
    const fileip = {
      path: '/upload',
      content: './tempdata',
       pin : false
    }
    
    //  const result =  node.add(fileip)
    console.log('Added file:', fileip)
   


 
 })();


