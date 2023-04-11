import { readFileSync, writeFileSync } from 'fs';
import { client } from './client.js';

export async function query(path){
    path = './img/test.png';
    const test = Buffer.from( readFileSync(path) ).toString('base64');
    
    const resImage = await client.graphql.get()
      .withClassName('Landscape')
      .withFields(['image'])
      .withNearImage({ image: test })
      .withLimit(1)
      .do();
    
    // Write result to filesystem
    const result = resImage.data.Get.Landscape[0].image;
    // console.log(result) ;
    writeFileSync('./result.jpg', result, 'base64');
}
