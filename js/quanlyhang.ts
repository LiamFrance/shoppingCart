// import class SanPham tu file sanpham.ts sang
import {SanPham} from "./sanpham.js";

// class quan ly cac ham tuong tac voi doi tuong
export class QuanLyHang {
  private hang : SanPham[] = [];
  constructor(){
    console.log("Test ");
  }
  getCacSanPham(): SanPham[] {
    return [];
  }
  getSanPhamById() : SanPham{
    var motsanpham = new SanPham(1,"sp1",100000,"image-1","mo ta",true);
    return motsanpham;
  }
  addSanPham() :void {}
  showSanPham(): string[] {
    return [];
  }
}