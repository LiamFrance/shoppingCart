System.register([], function (exports_1, context_1) {
    "use strict";
    var QuanLyGioHang;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            QuanLyGioHang = /** @class */ (function () {
                function QuanLyGioHang() {
                    this.CacSanPhamTrongGioHang = [];
                }
                QuanLyGioHang.prototype.xemgiohang = function () {
                    return this.CacSanPhamTrongGioHang;
                };
                QuanLyGioHang.prototype.tangsoluongsanpham = function (motsanpham) {
                    // biet duoc vi tri cua no o dau trong mang
                    var chiso = this.checkspTruocKhiAddVaoGio(motsanpham);
                    var soluonghientai = this.CacSanPhamTrongGioHang[chiso].laysoluong();
                    soluonghientai = soluonghientai + 1;
                    this.CacSanPhamTrongGioHang[chiso].thaydoisoluong(soluonghientai);
                };
                QuanLyGioHang.prototype.addSanPhamTrongGioHang = function (motsanpham) {
                    this.CacSanPhamTrongGioHang.push(motsanpham);
                    // console.log(this.CacSanPhamTrongGioHang);
                };
                QuanLyGioHang.prototype.checkspTruocKhiAddVaoGio = function (motsanpham) {
                    for (var i = 0; i < this.CacSanPhamTrongGioHang.length; i++) {
                        // console.log(this.CacSanPhamTrongGioHang[0].laySanpham().ten);
                        if (this.CacSanPhamTrongGioHang[i].laySanpham().id == motsanpham.id) {
                            // neu == thi co nghia la da co trong gio hang
                            return i;
                        }
                    }
                    return -1;
                };
                QuanLyGioHang.prototype.deletesp = function (idsanpham) {
                    for (var i = 0; i < this.CacSanPhamTrongGioHang.length; i++) {
                        if (this.CacSanPhamTrongGioHang[i].laySanpham().id == idsanpham) {
                            this.CacSanPhamTrongGioHang.splice(i, 1);
                        }
                    }
                };
                QuanLyGioHang.prototype.updateSanPhamTrongGioHang = function (motsanpham, soluong) {
                    // duyet mang
                    for (var i = 0; i < this.CacSanPhamTrongGioHang.length; i++) {
                        var idphantu = this.CacSanPhamTrongGioHang[i].laySanpham().id;
                        if (idphantu == motsanpham.id) {
                            this.CacSanPhamTrongGioHang[i].thaydoisoluong(soluong);
                        }
                    }
                };
                QuanLyGioHang.prototype.kiemTraTrangThaiSanPham = function () { };
                QuanLyGioHang.prototype.tinhSoLuong = function () {
                    var soluong = 0;
                    // duyet tat ca san pham trong mang, xem so luong, cong don lai
                    for (var i = 0; i < this.CacSanPhamTrongGioHang.length; i++) {
                        soluong += this.CacSanPhamTrongGioHang[i].laysoluong();
                    }
                    // duyet het cac san pham, so luong = tong so san pham
                    return soluong;
                };
                QuanLyGioHang.prototype.tinhgia = function () {
                    var tonggiatien = 0;
                    for (var i = 0; i < this.CacSanPhamTrongGioHang.length; i++) {
                        var gia = this.CacSanPhamTrongGioHang[i].laySanpham().gia;
                        var soluong = this.CacSanPhamTrongGioHang[i].laysoluong();
                        tonggiatien += gia * soluong;
                    }
                    return tonggiatien;
                };
                QuanLyGioHang.prototype.hienThiGioHang = function () {
                    var giohangHTML = "";
                    for (var i = 0; i < this.CacSanPhamTrongGioHang.length; i++) {
                        // giohangHTML += this.CacSanPhamTrongGioHang[i].laySanpham().ten;
                        giohangHTML += "\n              <div class=\"row motsanpham\">\n                <div class=\"col-sm-2\">\n                  <img\n                    src=\"" + this.CacSanPhamTrongGioHang[i].laySanpham().anh + "\"\n                    alt=\"\"\n                    class=\"img-fluid\"\n                  />\n                </div>\n                <div class=\"col-sm-4\">\n                  <a href=\"\" class=\"tieude\">" + this.CacSanPhamTrongGioHang[i].laySanpham().ten + "</a>\n                  <div class=\"noidungsp\">\n                  " + this.CacSanPhamTrongGioHang[i].laySanpham().mota + "\n                  </div>\n                </div>\n                <div class=\"col-sm-2\">\n                  <div class=\"giatiensp\">" + this.CacSanPhamTrongGioHang[i].laySanpham().gia + " VND</div>\n                  <div class=\"badge badge-warning\">-12%</div>\n                </div>\n                <div class=\"col-sm-2\">\n                  <input type=\"number\" data-idsanpham=\"" + this.CacSanPhamTrongGioHang[i].laySanpham().id + "\" class=\"soluongsp\" min=\"1\" value=\"" + this.CacSanPhamTrongGioHang[i].laysoluong() + "\" />\n                </div>\n                <div class=\"col-sm-2\">\n                  <div data-idsanpham=\"" + this.CacSanPhamTrongGioHang[i].laySanpham().id + "\" class=\"btn btn-danger xoasp\">Delete</div>\n                </div>\n            </div>\n        ";
                    }
                    return giohangHTML;
                };
                return QuanLyGioHang;
            }());
            exports_1("QuanLyGioHang", QuanLyGioHang);
        }
    };
});
