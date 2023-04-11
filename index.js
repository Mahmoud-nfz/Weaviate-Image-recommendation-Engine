import { query } from "./helpers/query.js";
import { insert } from "./helpers/insertImage.js";
import { client, schemaRes } from "./helpers/client.js";
import initSchemas from "./helpers/schema.js" ;

if(schemaRes.classes.length == 0){
    initSchemas() ;
}

// insert() ;

query();