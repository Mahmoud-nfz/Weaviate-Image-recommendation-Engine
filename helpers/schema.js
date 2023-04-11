import { client } from "./client.js";
const schemaConfig = {
    'class': 'Landscape',
    'vectorizer': 'img2vec-neural',
    'vectorIndexType': 'hnsw',
    'moduleConfig': {
        'img2vec-neural': {
            'imageFields': [
                'image'
            ]
        }
    },
    'properties': [
        {
            'name': 'image',
            'dataType': ['blob']
        },
        {
            'name': 'text',
            'dataType': ['string']
        }
    ]
}

export default async function (){
    await client.schema
    .classCreator()
    .withClass(schemaConfig)
    .do();
}
