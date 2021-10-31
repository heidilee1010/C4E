
var delta;
var check_valid=true;
do{
    var a = prompt("Nhap so a");
    var b = prompt("Nhap so b");
    var c = prompt("Nhap so c");

    if(isNaN(a,b,c)){
        alert('nhập lại đi má ơi')
        check_valid=false;
    } else{
        console.log("Bạn đã nhập đúng yêu cầu");
        check_valid=true;
        break;
        }
}while (!check_valid);


if (a == 0) {
    if (b == 0) {
        console.log("Phương trình vô nghiệm!");
    } else {
        console.log("Phương trình có một nghiệm: "
                + "x = " + (-c / b));
    }
    stop;
}
var delta = b*b - 4*a*c;
var x1;
var x2;
        // tính nghiệm
    if (delta > 0) {
        x1 = (-b + Math.sqrt(delta)) / (2*a);
        x2 = (-b - Math.sqrt(delta)) / (2*a);
        console.log("Phương trình có 2 nghiệm là: "
                + "x1 = " + x1 + " và x2 = " + x2);
    } else if (delta == 0) {
        x1 = (-b / (2 * a));
        console.log("Phương trình có nghiệm kép: "
                + "x1 = x2 = " + x1);
    } else {
        console.log("Phương trình vô nghiệm!");
    }
