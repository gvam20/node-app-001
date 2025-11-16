export const tableW = (args) => {
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
