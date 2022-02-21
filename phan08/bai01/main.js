// Hàm trả về một chuỗi là "greenTea"
const prepareTea = () => 'greenTea';

/*
Với một chức năng (đại diện cho loại trà) và số lượng tách cần thiết, hàm sau trả về một mảng các chuỗi (mỗi chuỗi đại diện cho một cốc một loại chè cụ thể).
*/
const getTea = (numOfCups) => {
 const teaCups = [];
 for(let cups = 1; cups <= numOfCups; cups += 1) {
   const teaCup = prepareTea();
   teaCups.push(teaCup);
 }
 return teaCups;
};

const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC);