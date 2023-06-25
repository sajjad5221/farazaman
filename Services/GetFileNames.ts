import fs from 'fs'

export default function GetFiles(id:string|number|undefined){
  const folderPath = "public/static/images/startups/"+id+"/";

  const files = fs.readdirSync(folderPath);
  return files;

}
