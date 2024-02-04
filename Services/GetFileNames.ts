import fs from 'fs';

export default function GetFiles(id: string | number | undefined) {
  const folderPath = `public/static/images/startups/${id}/`;

  // Read the files in the specified folder path
  const files = fs.readdirSync(folderPath);

  return files;
}
