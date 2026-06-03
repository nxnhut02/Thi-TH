function sohoanHao(n){
 if (n <= 1){
    return false;
 }
 let sum = 0;
 for (let i = 1; i <= n / 2;i++){
    if (n%i === 0) {
        sum +=i;
    }
 }
 return sum === n;
}

let inputNum = parseInt(prompt("Nhap vao mot so nguyen duong:"));

if (isNaN(inputNum) || inputNum <= 0) {
    document.write("Vui long nhap mot so nguyen duong hop le!");
} else {
    let result = sohoanHao(inputNum);
    document.write(`Ket qua kiem tra so ${inputNum}: <b>${result}</b><br>`);
    
    if (result) {
        document.write(`${inputNum} la so hoan hao.`);
    } else {
        document.write(`${inputNum} khong phai la so hoan hao.`);
    }
}