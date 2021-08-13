System.register([], function (exports_1, context_1) {
    "use strict";
    var SanPhamGioHang;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            SanPhamGioHang = /** @class */ (function () {
                function SanPhamGioHang(sanpham, soluong) {
                    if (soluong === void 0) { soluong = 1; }
                    this.sanpham = sanpham;
                    this.soluong = soluong;
                }
                SanPhamGioHang.prototype.tinhGiaTien = function () {
                    return 2;
                };
                SanPhamGioHang.prototype.showSanPhamTrongGioHang = function () {
                    return "test";
                };
                SanPhamGioHang.prototype.laySanpham = function () {
                    return this.sanpham;
                };
                SanPhamGioHang.prototype.thaydoisoluong = function (soluong) {
                    this.soluong = soluong;
                };
                SanPhamGioHang.prototype.laysoluong = function () {
                    return this.soluong;
                };
                return SanPhamGioHang;
            }());
            exports_1("SanPhamGioHang", SanPhamGioHang);
        }
    };
});
