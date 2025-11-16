interface data {
  number: number,
  limit: number,
  name: string
  show?: boolean,
  path?: string
}
export const tableW = ( args:data ): string => {
  if (args.show) {
    let msg = "================================================\n";
    msg += `tabla de ${args.number}\n `;
    msg += "================================================\n";
    for (let index = 0; index <= args.limit; index++) {
      msg += `${args.number} x ${index} = ${args.number * index}\n`;
    }
    return msg;
  }
  return "no hay nada pa ninguem";
};
