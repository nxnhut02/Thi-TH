function tinhNgayTrongThang() {
    let input = prompt("Nhập tháng/năm theo định dạng MM/yyyy (Ví dụ: 02/2020):");

    let regex = /^\d{2}\/\d{4}$/;

    if (!regex.test(input)) {
        alert("Định dạng không hợp lệ! Vui lòng nhập đúng kiểu MM/yyyy.");
        return;
    }

    let parts = input.split("/");
    let month = parseInt(parts[0]);
    let year = parseInt(parts[1]);

    if (month < 1 || month > 12) {
        alert("Tháng không hợp lệ! Vui lòng nhập tháng từ 01 đến 12.");
        return;
    }

    let days = 0;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        case 2:
            let isLeapYear = false;
            
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                isLeapYear = true;
            }

            if (isLeapYear) {
                days = 29;
            } else {
                days = 28;
            }
            break;
    }

    // alert(`Tháng ${parts[0]}/${year} có ${days} ngày.`);
    document.write(`Đầu vào: ${input} <br> Kết quả: <b>${days}</b> ngày.`);
}

tinhNgayTrongThang();