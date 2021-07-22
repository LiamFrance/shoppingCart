console.log("Chuc nang gio hang");
// B1 tao class san pham su dung accessor
export class SanPham {
    // constructor
    constructor(id, ten, gia, anh, mota, tinhtrang) {
        // goi ham set
        this.id = id;
        this.ten = ten;
        this.gia = gia;
        this.anh = anh;
        this.mota = mota;
        this.tinhtrang = tinhtrang;
    }
    // id
    get id() {
        return this._id;
    }
    set id(v) {
        this._id = v;
    }
    // ten
    get ten() {
        return this._ten;
    }
    set ten(v) {
        this._ten = v;
    }
    // gia
    get gia() {
        return this._gia;
    }
    set gia(v) {
        this._gia = v;
    }
    // mota
    get mota() {
        return this._mota;
    }
    set mota(v) {
        this._mota = v;
    }
    // anh
    get anh() {
        return this._anh;
    }
    set anh(v) {
        this._anh = v;
    }
    // tinhtrang
    get tinhtrang() {
        return this._tinhtrang;
    }
    set tinhtrang(v) {
        this._tinhtrang = v;
    }
}
// Xay dung class quan ly cac ham tuong tac voi san pham
