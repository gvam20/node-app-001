var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { yarg } from './plugins/index.js';
import { writer } from './utils/writeFile.js';
import { tableW as table } from './services/writerTable.js';
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log('running!!!');
}))();
const { n: number, s: show, l: limit, nm: name, p: path } = yarg;
const fileName = `${name}.txt`;
let created;
if (number) {
    console.log('este es el ', path);
    created = writer.createPath(path);
    if (!created)
        'El path ya existe!!';
}
if (created) {
    writer.writeToFile(fileName, path, name, table({ number, show, limit, name, path }));
}
