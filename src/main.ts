import { run, yarg }  from './plugins/index.js'
import { writer } from './utils/writeFile.js';
import { tableW as table } from './services/writerTable.js'

(async () => {
console.log('running!!!');
})();

const { n:number, s:show, l:limit, nm:name, p:path } = yarg;
const fileName = `${name}.txt`;
let created;

if(number) {
    console.log('este es el ', path);
    created = writer.createPath(path);
    if(!created) 'El path ya existe!!'
}

if(created) {
    writer.writeToFile(fileName, path, name, table({number, show, limit, name, path}))
}