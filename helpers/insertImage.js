import { readFileSync } from 'fs';
import { client } from './client.js';

export async function insert(path){
  path = './img/index1.png' ;
  const img = readFileSync(path);
  
  const b64 = Buffer.from(img).toString('base64');
  
  await client.data.creator()
    .withClassName('Landscape')
    .withProperties({
      image: b64,
      text: 'water scenery'
    })
    .do();
}
