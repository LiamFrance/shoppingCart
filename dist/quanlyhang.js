System.register(["./sanpham.js"], function (exports_1, context_1) {
    "use strict";
    var sanpham_js_1, QuanLyHang;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (sanpham_js_1_1) {
                sanpham_js_1 = sanpham_js_1_1;
            }
        ],
        execute: function () {
            // class quan ly cac ham tuong tac voi doi tuong
            QuanLyHang = /** @class */ (function () {
                function QuanLyHang() {
                    this.hang = []; //hứng dữ liệu từ api
                    // vì không có phần php (api) nên mình tạo dữ liệu thủ công
                    // tạo  instance của sản phẩm
                    var sanpham1 = new sanpham_js_1.SanPham(1, "Iphone5", 5000000, "images/2f189f3272287a1e7b954ba56c69309a.jpeg", "Made in China", true);
                    this.addSanPham(sanpham1);
                    var sanpham2 = new sanpham_js_1.SanPham(2, "Iphone6", 6000000, "images/e84d6fb78dc324faf9c584144fe7a30a.png", "Made in China2", true);
                    this.addSanPham(sanpham2);
                    var sanpham3 = new sanpham_js_1.SanPham(3, "Iphone11", 26000000, "images/f25e97b47421d8720dee0dbe820e5914.jpeg", "Made in China", false);
                    this.addSanPham(sanpham3);
                    var sanpham4 = new sanpham_js_1.SanPham(4, "Iphone11", 26000000, "images/f25e97b47421d8720dee0dbe820e5914.jpeg", "Made in China", true);
                    this.addSanPham(sanpham4);
                }
                QuanLyHang.prototype.addSanPham = function (sp) {
                    // dùng để đẩy dữ liệu hứng từ api vào trong mảng hàng
                    // cach 1 dung ham push
                    this.hang.push(sp); //hàm push để thao tác với mảng để đẩy phần tử vào mảng
                    // cach 2
                    // this.hang[this.hang.length] = sp;
                    // console.log(this.hang);
                };
                QuanLyHang.prototype.getSanPhamById = function (idsanpham) {
                    // lay san pham dua vao id
                    for (var i = 0; i < this.hang.length; i++) {
                        // kiem tra
                        if (this.hang[i].id == idsanpham) {
                            return this.hang[i];
                        }
                    }
                    // het vong lap ma ko co san phan trung trong du lieu
                    return 0;
                };
                QuanLyHang.prototype.getCacSanPham = function () {
                    return this.hang;
                };
                QuanLyHang.prototype.showSanPham = function () {
                    // lay sp ra va in ra duoi dang html vaf dat no vao giao dien
                    var danhsachspHTML = "";
                    if (this.hang.length != 0) {
                        // duyet mang hang
                        for (var i = 0; i < this.hang.length; i++) {
                            danhsachspHTML += "\n         <div class=\"col-sm-4 spkhac \">\n            <div class=\"card\" id-" + this.hang[i].id + ">\n              <img\n                src=\"" + this.hang[i].anh + "\"\n                class=\"card-img-top\"\n                alt=\"...\"\n              />\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">" + this.hang[i].ten + "</h5>\n                <p class=\"card-text ndspkhac\">\n                " + this.hang[i].mota + "\n                </p>\n                <b class=\"gia2\">" + this.hang[i].gia + " VND</b>";
                            // xu ly con hang va het hang
                            if (this.hang[i].tinhtrang == false) {
                                danhsachspHTML += "\n                  <button class=\"btn disabled btn-secondary\">Sold OUT</button>\n                  ";
                            }
                            else {
                                danhsachspHTML += "\n                  <button class=\"btn nutmuangay btn-danger\" data-idsp='" + this.hang[i].id + "'>BUY NOW!</button>\n                  ";
                            }
                            danhsachspHTML += "\n              </div>\n            </div>\n          </div>\n\n        ";
                        }
                        // het for -> return
                        return danhsachspHTML;
                    }
                    else {
                        return "Product is not available!";
                    }
                };
                return QuanLyHang;
            }());
            exports_1("QuanLyHang", QuanLyHang);
        }
    };
});
