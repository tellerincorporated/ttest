import * as IPFS from 'ipfs-core'


export const node = await IPFS.create();
export const version = await node.version()

// async function main () {
//   const node = await IPFS.create()
//   const version = await node.version()

 
// }

// main()
