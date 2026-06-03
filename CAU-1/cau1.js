function mangsoNguyen() {
    let n = 0;
    let arr = [];

    while (true) {
        n = parseInt(prompt("Nhap vao so luong phan tu (khong qua 50):"));
        if (n > 0 && n <= 50) {
            break;
        }
        alert("So luong khong hop le hoac da qua 50 phan tu! Vui long nhap lai.");
    } 

    for (let i = 0; i < n; i++) {
        let element = parseInt(prompt(`Nhap phan tu vao mang arr[${i}]:`));
        arr.push(element);
    }

    document.write(`Mang vua nhap la: [${arr.join(", ")}]`);

    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            sum += arr[i];
            count++;
        }
    }

    document.write("<br><b> Ket qua </b><br>");
    if (count > 0) {
        let average = sum / count;
        document.write(`Trung binh cong cac so chia het cho 3: ${average.toFixed(2)}`);
    } else {
        document.write("Khong co gia tri nao chia het cho 3");
    }
}

mangsoNguyen();