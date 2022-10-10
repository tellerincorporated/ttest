import * as IPFS from 'ipfs-core'
// import all from 'it-all'
// import { concat as uint8ArrayConcat } from 'uint8arrays/concat'
// import { fromString as uint8ArrayFromString } from 'uint8arrays/from-string'
// import { toString as uint8ArrayToString } from 'uint8arrays/to-string'
import * as path from 'path';
import { create } from 'ipfs-core'




//  const node = await IPFS.create()
//   const version = await node.version()
export const node = await IPFS.create();
export const version = await node.version()

const main = async () => {
  
 


  // const DOM = {
 
  //   datafromuser: document.getElementById('file').value
  // }

  
  // console.log('Version:', version.version)



 


  // const run = async (files) => {
  //   for (let file of files) {
  //    const result = await node.files.write('/pub' + file.name, file, { create: true })
    
  //   }
  // }

  // const result = await node.files.write('/pub/hdsello.txt')
 
  
  // return run
  

 






  
  // console.info('this is result =' + result)
  
  // const cid = result.cid;
  // console.log(cid)

  // await ipfs.files.rm('/pubx/hello.txt', { recursive: true })

 
  // console.log(dric.hash.toString())

  // const data = uint8ArrayConcat(await all(node.cat(file.cid)))

  // console.log('Added file contents:', uint8ArrayToString(data))
}

main()




