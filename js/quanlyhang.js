// import class SanPham tu file sanpham.ts sang
import { SanPham } from "./sanpham.js";
// class quan ly cac ham tuong tac voi doi tuong
export class QuanLyHang {
    constructor() {
        this.hang = [];
        console.log("Test ");
    }
    getCacSanPham() {
        return [];
    }
    getSanPhamById() {
        var motsanpham = new SanPham(1, "sp1", 100000, "image-1", "mo ta", true);
        return motsanpham;
    }
    addSanPham() { }
    showSanPham() {
        return [];
    }
}
