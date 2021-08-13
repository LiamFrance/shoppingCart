System.register(["./quanlyhang.js", "./quanligiohang.js", "./sanphamgiohang.js"], function (exports_1, context_1) {
    "use strict";
    var quanlyhang_js_1, quanligiohang_js_1, sanphamgiohang_js_1, tatcahang, giohang, divsanpham, divgiohang, smallSoLuong, giatamtinh, thanhtien, nutmuangayes, i;
    var __moduleName = context_1 && context_1.id;
    function indulieu() {
        // in ra so luong
        smallSoLuong.innerHTML = "( " + giohang.tinhSoLuong() + "San Pham )";
        //  tinh gia tien
        giatamtinh.innerHTML = giohang.tinhgia() + "VND";
        thanhtien.innerHTML = giohang.tinhgia() + "VND";
    }
    return {
        setters: [
            function (quanlyhang_js_1_1) {
                quanlyhang_js_1 = quanlyhang_js_1_1;
            },
            function (quanligiohang_js_1_1) {
                quanligiohang_js_1 = quanligiohang_js_1_1;
            },
            function (sanphamgiohang_js_1_1) {
                sanphamgiohang_js_1 = sanphamgiohang_js_1_1;
            }
        ],
        execute: function () {
            tatcahang = new quanlyhang_js_1.QuanLyHang();
            giohang = new quanligiohang_js_1.QuanLyGioHang();
            // var hangs : SanPham[] = tatcahang.getCacSanPham();
            // for (var i = 0; i < hangs.length; i++){
            //   console.log(hangs[i]);
            // }
            // console.log(tatcahang.showSanPham());
            // day san pham tu "du lieu <tao thu cong>" vao html vao phan cac san pham khac
            divsanpham = document.getElementById('cacsanphamdemua');
            divgiohang = document.getElementById('cacsptronggio');
            smallSoLuong = document.querySelector('.tdto small');
            giatamtinh = document.getElementById('gia1');
            thanhtien = document.getElementById('gia2');
            // console.log(smallSoLuong);
            divsanpham.innerHTML = tatcahang.showSanPham();
            // xu ly su kien click vao nut mua ngay
            nutmuangayes = document.querySelectorAll('.nutmuangay');
            for (i = 0; i < nutmuangayes.length; ++i) {
                nutmuangayes[i].addEventListener('click', function () {
                    var idlayduoc = this.getAttribute('data-idsp');
                    if (tatcahang.getSanPhamById(idlayduoc) == 0) {
                        console.log("Loi du lieu, please contact us through xx.net!");
                    }
                    else {
                        var splayduoc = tatcahang.getSanPhamById(idlayduoc);
                        // kiem tra xem co sp nay chua
                        if (giohang.checkspTruocKhiAddVaoGio(splayduoc) == -1) {
                            // chua co -> them vao gio hang
                            var spgiohang = new sanphamgiohang_js_1.SanPhamGioHang(splayduoc, 1);
                            giohang.addSanPhamTrongGioHang(spgiohang);
                        }
                        else {
                            // co roi -> update so luong
                            giohang.tangsoluongsanpham(splayduoc);
                        }
                        // console.log(giohang.hienThiGioHang());
                        divgiohang.innerHTML = giohang.hienThiGioHang();
                        indulieu();
                        // console.log(giohang.tinhgia());
                        var soluonginput = document.getElementsByClassName('soluongsp');
                        for (var i = 0; i < soluonginput.length; i++) {
                            soluonginput[i].addEventListener('change', function () {
                                var idsanpham = this.getAttribute('data-idsanpham');
                                var sanphamlayduoc = tatcahang.getSanPhamById(idsanpham);
                                var soluongnew = parseInt(this.value);
                                giohang.updateSanPhamTrongGioHang(sanphamlayduoc, soluongnew);
                                indulieu();
                            });
                        }
                    }
                    // dua sp lay duoc vao mang quan ly san pham trong gio hang
                    // xu ly nut click delete
                    var nutxoa = document.querySelectorAll(".xoasp");
                    for (var i = 0; i < nutxoa.length; ++i) {
                        nutxoa[i].addEventListener('click', function () {
                            var idlayduoc = this.getAttribute('data-idsanpham');
                            giohang.deletesp(idlayduoc);
                            divgiohang.innerHTML = giohang.hienThiGioHang();
                            indulieu();
                        });
                    }
                });
            }
        }
    };
});
