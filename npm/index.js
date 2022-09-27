const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const id = uuid();

console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));

console.log(id);
