import yargs from "yargs";
import { hideBin } from 'yargs/helpers';


export const yarg = yargs(hideBin(process.argv))
.option('n', {
  alias: 'number',
  type: 'number',
  demandOption: true,
  describe: 'tabla'
})
.option('s', {
  alias: 'show',
  type: 'boolean',
  demandOption: false,
  describe: 'show'
})
.option('l', {
  alias: 'limit',
  type: 'number',
  demandOption: false,
  default: 10,
  describe: 'limit'
})
.option('p', {
  alias: 'path',
  type: 'string',
  demandOption: false,
  default: './database',
  describe: 'path donde estaran las tablas creadas'
})
.option('nm', {
  alias: 'name',
  type: 'string',
  demandOption: true,
  describe: 'file name'
})
.check((argv, options) =>{
    if(argv.n < 1) throw new Error('mayor a 0')
    //if(argv.nm) throw new Error('required')

    return true;
})
.parseSync()




export const run = ():string => {
    console.log(process.argv);
    console.log('paso')
    return 'done';
}