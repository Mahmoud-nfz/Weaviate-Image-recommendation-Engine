import { readFileSync } from 'fs';

export async function insert(path){
  path = './img/index1.png' ;
  const img = readFileSync(path);
  
  const b64 = Buffer.from(img).toString('base64');
  
  await client.data.creator()
    .withClassName('Meme')
    .withProperties({
      image: b64,
      text: 'matrix meme'
    })
    .do();
}
