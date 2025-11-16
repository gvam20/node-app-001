var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { writeFile, mkdir, rename } from "fs/promises";
export class writer {
    static writeToFile(fileName, path, name, data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('data', data);
            process.exit;
            try {
                yield writeFile(fileName, data);
                const finalPath = `${path}/${fileName}`;
                writer.movePath(`${name}.txt`, finalPath);
                console.log(`Wrote data to ${fileName}`);
            }
            catch (error) {
                console.error(`Got an error trying to write the file: ${error.message}`);
            }
        });
    }
    static createPath(path) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield mkdir(path);
                return true;
            }
            catch (error) {
                return false;
            }
        });
    }
    static movePath(from, to) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield rename(from, to);
            }
            catch (error) {
                console.log(error);
                return false;
            }
        });
    }
}
