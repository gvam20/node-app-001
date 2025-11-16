import { writeFile, mkdir, rename  } from "fs/promises";

export class writer {

  static async writeToFile(fileName: string, path:string, name: string, data: string) {
    console.log('data', data);
    process.exit
    try {
      await writeFile(fileName, data);
      const finalPath = `${path}/${fileName}`
      writer.movePath(`${name}.txt`, finalPath)
      console.log(`Wrote data to ${fileName}`);
    } catch (error: any) {
      console.error(`Got an error trying to write the file: ${error.message}`);
    }
  }

  static async createPath(path:string):Promise<boolean> {
    try {
      await mkdir(path);
      return true;
    } catch (error) {
      return false;
    }
  }

  static async movePath(from:string, to:string) {
    try {
      return await rename(from, to)
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
