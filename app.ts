
import {SanPham} from "./sanpham.js";
import {QuanLyHang} from "./quanlyhang.js";
import {QuanLyGioHang} from "./quanligiohang.js";
import {SanPhamGioHang} from "./sanphamgiohang.js";
var tatcahang = new QuanLyHang();
var giohang = new QuanLyGioHang();
// var hangs : SanPham[] = tatcahang.getCacSanPham();
// for (var i = 0; i < hangs.length; i++){
//   console.log(hangs[i]);
// }
// console.log(tatcahang.showSanPham());
// day san pham tu "du lieu <tao thu cong>" vao html vao phan cac san pham khac
var divsanpham = document.getElementById('cacsanphamdemua');
var divgiohang = document.getElementById('cacsptronggio');
var smallSoLuong = document.querySelector('.tdto small');
var giatamtinh = document.getElementById('gia1');
var thanhtien = document.getElementById('gia2');


// console.log(smallSoLuong);
divsanpham.innerHTML = tatcahang.showSanPham();
// xu ly su kien click vao nut mua ngay
var nutmuangayes = document.querySelectorAll('.nutmuangay');
for(var i:number = 0; i < nutmuangayes.length; ++i) {
  nutmuangayes[i].addEventListener('click', function(){
   var idlayduoc =  this.getAttribute('data-idsp');
   if(tatcahang.getSanPhamById(idlayduoc) == 0){
     console.log("Loi du lieu, please contact us through xx.net!");
   }
   else
   {
    var splayduoc: SanPham =  tatcahang.getSanPhamById(idlayduoc);
    // kiem tra xem co sp nay chua
    if( giohang.checkspTruocKhiAddVaoGio(splayduoc) == -1){
      // chua co -> them vao gio hang
      var spgiohang: SanPhamGioHang = new SanPhamGioHang(splayduoc, 1);
      giohang.addSanPhamTrongGioHang(spgiohang);
    }
    else{
      // co roi -> update so luong
      giohang.tangsoluongsanpham(splayduoc);
    }
    // console.log(giohang.hienThiGioHang());
    divgiohang.innerHTML = giohang.hienThiGioHang();
    indulieu();
    // console.log(giohang.tinhgia());
  var soluonginput = document.getElementsByClassName('soluongsp');
  for (var i = 0; i < soluonginput.length ; i++){
    soluonginput[i].addEventListener('change', function(){
      var idsanpham:any = this.getAttribute('data-idsanpham');
      var sanphamlayduoc: SanPham = tatcahang.getSanPhamById(idsanpham);
      var soluongnew = parseInt(this.value);
      giohang.updateSanPhamTrongGioHang(sanphamlayduoc, soluongnew);
      indulieu();
    })
  }
   }
    // dua sp lay duoc vao mang quan ly san pham trong gio hang
    // xu ly nut click delete
    var nutxoa = document.querySelectorAll(".xoasp");
    for(var i:number = 0; i < nutxoa.length; ++i) {
      nutxoa[i].addEventListener('click', function(){
        let idlayduoc =  this.getAttribute('data-idsanpham');
        giohang.deletesp(idlayduoc);
        divgiohang.innerHTML = giohang.hienThiGioHang();
        indulieu();
      })
    }
  })
}
function indulieu():void{

     // in ra so luong
    smallSoLuong.innerHTML = "( " + giohang.tinhSoLuong() + "San Pham )";
  //  tinh gia tien
  giatamtinh.innerHTML = giohang.tinhgia() + "VND";
  thanhtien.innerHTML = giohang.tinhgia() + "VND";
}