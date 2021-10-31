let fbinarySearch = function(input, x, start, end){
    if(start > end){
        return false;
    }
    //Tìm giá trị trong mảng giữa
    let mid = Math.floor((start + end)/2);
    //so sanh gia tri mảng giữa so với x
    if(input[mid] == x){
        return input[mid];
        //nếu x có trong mảng kết quả trả về giá trị
    }
    //Nếu X không xuất hiện trong mảng giữa, thực hiện so sánh mảng trái
    if(input[mid] > x){
        return fbinarySearch(input, x, start, mid - 1);
    }else{//nguoc lai
        return fbinarySearch(input, x, mid + 1, end);
    }
}
//main
let input = [2, 4, 9, 10, 11, 22, 24, 31, 48, 56, 76, 86];
let x =prompt("Nhập số cần tìm trong mảng");;
let n=input.length;
let result= fbinarySearch(input, x, 0, n - 1)
if(fbinarySearch(input, x, 0, n - 1)){//kiem tra
    console.log("Số "+result+" cần tìm có trong mảng ");
}else{
    console.log("Số cần tìm không có trong mảng");
}