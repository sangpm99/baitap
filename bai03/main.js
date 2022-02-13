const arr = [2, 4, 5, 1, 7, 5, 2, 1];

// Xóa 1 phần tử đầu và 4 phần tử cuối để còn lại 3 phần tử có tổng là 10
// arr.splice(0, 1);
// arr.splice(3, 4);

// Xóa và thêm phần tử mới để các phần tử còn lại có tổng là 10
arr.splice(0, 5, 2);

document.getElementById('output').innerHTML = arr;