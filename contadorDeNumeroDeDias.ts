const date1 = new Date(`2023-02-16`);
const date2 = new Date(`2023-02-22`);
const umDia = 1000*60*60*24;
const msBetweenDates = (date2.getTime() - date1.getTime()) / umDia;

console.log(`A diferenca de dias entre as duas datas e de`, msBetweenDates );