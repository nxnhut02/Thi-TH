class congNhan{
    constructor(stt, hoTen, ngaySinh, diaChi, luong, chucVu){
        this.stt = stt;
        this.hoTen = hoTen;
        this.ngaySinh = ngaySinh;
        this.diaChi = diaChi;
        this.luong = luong;
        this.chucVu = chucVu;
        
    }
    tenChinh(){
        let mangTen = this.hoTen.trim().split(" ");
        return mangTen[mangTen.length - 1].toLowerCase();
    }
}

let danhSach = [
    new congNhan(1, "Truong Tan C", "11-11-1999", "TP HCM", 24000, "Abc"),
    new congNhan(2, "Truong Tan A", "11-11-2001", "Ca Mau", 19000, "Abc"),
    new congNhan(3, "Truong Tan B", "11-11-2008", "Can Tho", 11000, "Abc")
];

danhSach.sort((a, b) => {
    return a.tenChinh().localeCompare(b.tenChinh(), 'vi');
});

function hienthiTable(){
    const tbody = document.getElementById("table-body");
    tbody.innerHTML = "";

    danhSach.forEach((congNhan, index) => {
        let row = `
        <tr>
            <td>${index + 1}</td>
            <td>${congNhan.hoTen}</td>
            <td>${congNhan.ngaySinh}</td>
            <td>${congNhan.diaChi}</td>
            <td>${congNhan.luong}</td>
            <td>${congNhan.chucVu}</td>
        </tr>
        `;
        tbody.innerHTML += row;
    });
}
hienthiTable();