// Hàm trả về một chuỗi là "greenTea"
const prepareTea = () => 'greenTea';
// Hàm trả về một chuỗi là "blackTea"
const prepareBlackTea = () => 'blackTea';
/*
Với một chức năng (đại diện cho loại trà) và số lượng tách cần thiết, hàm sau trả về một mảng các chuỗi (mỗi chuỗi đại diện cho một cốc một loại chè cụ thể).
*/
const getTea = (prepareTea1) => {
 const teaGreenCups = [];
 for(let cups = 1; cups <= prepareTea1; cups += 1) {
   const teaCup = prepareTea();
   teaGreenCups.push(teaCup);
 }
 return teaGreenCups;
}
const getTea1 = (prepareBlackTea1) => {
  const teaBlackCups = [];
 for(let cups = 1; cups <= prepareBlackTea1; cups += 1) {
   const teaCup = prepareBlackTea();
   teaBlackCups.push(teaCup);
 }
 return teaBlackCups;
};

const tea4GreenTeamFCC = getTea(27);
const tea4BlackTeamFCC = getTea1(13);

console.log(tea4GreenTeamFCC);
console.log(tea4BlackTeamFCC);