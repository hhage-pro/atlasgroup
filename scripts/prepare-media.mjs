import sharp from 'sharp';
import {mkdir,readdir,rename,readFile,writeFile} from 'node:fs/promises';
await mkdir('design/original-artwork',{recursive:true});
for(const name of await readdir('public/media')){
 if(!name.endsWith('.png'))continue;
 await sharp(`public/media/${name}`).resize({width:1920,withoutEnlargement:true}).webp({quality:84,effort:6}).toFile(`public/media/${name.replace('.png','.webp')}`);
 await rename(`public/media/${name}`,`design/original-artwork/${name}`);
}
for(const name of await readdir('public/brand')){
 if(!name.startsWith('atlas-group'))continue;
 const path=`public/brand/${name}`;
 const svg=await readFile(path,'utf8');
 await writeFile(path,svg.replace('width="700" height="250" viewBox="0 0 700 250"','width="640" height="195" viewBox="30 35 640 195"'));
}
console.log('WebP artwork and web logo viewports prepared.');
