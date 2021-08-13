System.register([], function (exports_1, context_1) {
    "use strict";
    var SanPham;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            console.log("Chuc nang gio hang");
            // B1 tao class san pham su dung accessor
            SanPham = /** @class */ (function () {
                // constructor
                function SanPham(id, ten, gia, anh, mota, tinhtrang) {
                    // goi ham set
                    this.id = id;
                    this.ten = ten;
                    this.gia = gia;
                    this.anh = anh;
                    this.mota = mota;
                    this.tinhtrang = tinhtrang;
                }
                Object.defineProperty(SanPham.prototype, "id", {
                    // id
                    get: function () {
                        return this._id;
                    },
                    set: function (v) {
                        this._id = v;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(SanPham.prototype, "ten", {
                    // ten
                    get: function () {
                        return this._ten;
                    },
                    set: function (v) {
                        this._ten = v;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(SanPham.prototype, "gia", {
                    // gia
                    get: function () {
                        return this._gia;
                    },
                    set: function (v) {
                        this._gia = v;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(SanPham.prototype, "mota", {
                    // mota
                    get: function () {
                        return this._mota;
                    },
                    set: function (v) {
                        this._mota = v;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(SanPham.prototype, "anh", {
                    // anh
                    get: function () {
                        return this._anh;
                    },
                    set: function (v) {
                        this._anh = v;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(SanPham.prototype, "tinhtrang", {
                    // tinhtrang
                    get: function () {
                        return this._tinhtrang;
                    },
                    set: function (v) {
                        this._tinhtrang = v;
                    },
                    enumerable: false,
                    configurable: true
                });
                return SanPham;
            }());
            exports_1("SanPham", SanPham);
        }
    };
});
