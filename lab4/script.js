// Nhập vào 1 mảng thông tin các bạn học viên sau đó:
// - Tìm ra người có số tuổi cao nhất
// - Tìm ra người có địa chỉ ở Hà nội
// - Tìm ra người có điểm đầu vào cao nhất
// - Sắp xếp các học viên theo chiều giảm dần của tên
//- Tìm ra người có tuổi lớn thứ 2
//- Tìm ra các bạn có address tại miền bắc
//- Tìm ra các bạn có age > 24
const arr=[{
    name : prompt('Hãy nhập tên = '),
    age : parseInt(prompt('Hãy nhập tuổi = ')),
    add : prompt('Hãy nhập địa chỉ = '),
    mark: prompt('Hãy nhập điểm đầu vào = '),
},{
    name : prompt('Hãy nhập tên = '),
    age : parseInt(prompt('Hãy nhập tuổi = ')),
    add : prompt('Hãy nhập địa chỉ = '),
    mark: prompt('Hãy nhập điểm đầu vào= '),
},
{
    name : prompt('Hãy nhập tên = '),
    age : parseInt(prompt('Hãy nhập tuổi = ')),
    add : prompt('Hãy nhập địa chỉ = '),
    mark: prompt('Hãy nhập điểm đầu vào = '),
}];

//YC1: Tìm ra người có số tuổi lớn nhất trong mảng
let max=0;
for (i=0; i <arr.length; i++){
    const element = arr[i];
    if (element.age > max){
        max = element.age ;
    } 
}
for (i of arr){
    if (max== i.age){
        console.log("Người có số tuổi lớn nhât là : "+i.name+" Với số tuổi là: "+i.age);
    }
}
// -------END--------------
//YC2: Tìm ra người có địa chỉ tại Hà Nội

let find =prompt("Tìm kiếm thông tin địa chỉ");;
for(i=0; i < arr.length; i++){
    const element = arr[i];
    if (element.add==find){
        for (i of arr){
            if (find===i.add){
                console.log(i);
            }
        }
        break;
    }else{
        console.log ("Thông tin không tìm thấy");
        break;
    }
}
//YC3: Tìm ra người có điểm đầu vào cao nhất
let max=0;
for (i=0; i <arr.length; i++){
    const element = arr[i];
    if (element.mark > max){
        max = element.mark ;
    } 
}
for (i of arr){
    if (max== i.mark){
        console.log("Người có số điểm cao nhât là : "+i.name+" Với số điểm là: "+i.mark);
    }
}
// YC4 - Sắp xếp các học viên theo chiều giảm dần của tên
n = arr.length;
for (i = 0; i < n - 1; i++){
    for (j = 0; j < n - i - 1; j++){
        if (arr[j].name > arr[j + 1].name) {
            // swap arr[j+1] và arr[i]
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log("Mảng sau khi sắp xếp "+ arr);

//YC5- Tìm ra người có tuổi lớn thứ 2
let max=0;
let max2=0;
for (i=0; i <arr.length; i++){
    if (arr[i].age > max){
        max = arr[i].age;
    }
}
for(i = 0; i < arr.length; i++){
    if(max == arr[i].age)
    {
        continue;
    }    
    else if(max2 < arr[i].age){
        max2 = arr[i].age;
    }
}   
for (i of arr){
    if (max2== i.age){
        console.log("Người có số điểm cao nhât là : "+i.name+" Với số điểm là: "+i.age);
    }
}
   
//YC5- Tìm ra các bạn có address tại miền bắc

let find =prompt("Tìm kiếm thông tin địa chỉ tại miền Bắc");;
for(i=0; i < arr.length; i++){
    const element = arr[i];
    if (element.add==find){
        for (i of arr){
            if (find===i.add){
                console.log("Thông tin những người tại " +find+" gồm");
                console.log(i);
            }
        }
        break;
    }else{
        console.log ("Thông tin không tìm thấy");
        break;
    }
}

//YC6- Tìm ra các bạn có age > 24
for(i=0; i < arr.length; i++){
    const element = arr[i];
    if (element.age>=24){
        console.log("Thông tin những người có tuổi dưới 24 gồm");
        console.log(arr);
        break;
    }else{
        console.log ("Thông tin không tìm thấy");
        break;
    }
}