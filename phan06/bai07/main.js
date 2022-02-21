function myFunction(ts1, ts2) {
    if((typeof ts1 == 'string') && (typeof ts2 == "number")) {
        let arr = [];
        let str = '';
        arr = ts1.split('');
        if(arr.length > ts2) {
            arr = arr.splice(0, ts2);
            str = arr.join('');
            document.getElementById('output').innerHTML = str + "...";
        }
    }
    else {
        alert('Tham số thứ nhất phải là chuỗi, tham số thứ 2 phải là độ dài tối đa');
    }
}
let ts1 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sint itaque tempore hic pariatur sapiente quo delectus ex enim eum recusandae amet labore consequatur sed tenetur, voluptatem exercitationem reprehenderit suscipit.';
let ts2 = 30;
myFunction(ts1, ts2);
document.getElementById('input').innerHTML = `'${ts1}' và '${ts2}'`;