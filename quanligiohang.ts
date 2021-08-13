import {SanPham} from "./sanpham.js";
import {SanPhamGioHang} from "./sanphamgiohang.js";

export class QuanLyGioHang {
  private CacSanPhamTrongGioHang : SanPhamGioHang[] = [];
  public xemgiohang():SanPhamGioHang[]{
    return this.CacSanPhamTrongGioHang;
  }

  public tangsoluongsanpham(motsanpham: SanPham) : void{
    // biet duoc vi tri cua no o dau trong mang
    var chiso:number = this.checkspTruocKhiAddVaoGio(motsanpham);
    var soluonghientai = this.CacSanPhamTrongGioHang[chiso].laysoluong();
    soluonghientai = soluonghientai + 1;
    this.CacSanPhamTrongGioHang[chiso].thaydoisoluong(soluonghientai);
  }
  public addSanPhamTrongGioHang(motsanpham : SanPhamGioHang) : void{
    this.CacSanPhamTrongGioHang.push(motsanpham);
    // console.log(this.CacSanPhamTrongGioHang);
  }
  public checkspTruocKhiAddVaoGio(motsanpham : SanPham) : number{
    for (var i = 0; i < this.CacSanPhamTrongGioHang.length; i++){
      // console.log(this.CacSanPhamTrongGioHang[0].laySanpham().ten);
      if(this.CacSanPhamTrongGioHang[i].laySanpham().id == motsanpham.id){
        // neu == thi co nghia la da co trong gio hang
        return i;
      }
    }
    return -1;}
    public deletesp(idsanpham: number):void{
      for (var i = 0; i < this.CacSanPhamTrongGioHang.length ; i++){
        if (this.CacSanPhamTrongGioHang[i].laySanpham().id == idsanpham){
          this.CacSanPhamTrongGioHang.splice(i,1);
        }
      }
    }
    public updateSanPhamTrongGioHang(motsanpham: SanPham, soluong: number) : void{
      // duyet mang
      for (var i = 0; i < this.CacSanPhamTrongGioHang.length ; i++){
        var idphantu: number = this.CacSanPhamTrongGioHang[i].laySanpham().id;
        if(idphantu == motsanpham.id){
          this.CacSanPhamTrongGioHang[i].thaydoisoluong(soluong);
        }
      }
    }
    public kiemTraTrangThaiSanPham(): void{}
    public tinhSoLuong(): number{
      var soluong:number = 0;
      // duyet tat ca san pham trong mang, xem so luong, cong don lai
      for (var i = 0; i < this.CacSanPhamTrongGioHang.length ; i++){
        soluong += this.CacSanPhamTrongGioHang[i].laysoluong();
      }
      // duyet het cac san pham, so luong = tong so san pham
      return soluong;
    }
    public tinhgia():number {
      var tonggiatien:number = 0;
      for (var i = 0; i < this.CacSanPhamTrongGioHang.length ; i++){
        var gia:number = this.CacSanPhamTrongGioHang[i].laySanpham().gia;
        var soluong:number = this.CacSanPhamTrongGioHang[i].laysoluong();
        tonggiatien += gia*soluong;
      }
      return tonggiatien;
    }

    public hienThiGioHang(): string{
      var giohangHTML:string = "";
      for (var i =0; i< this.CacSanPhamTrongGioHang.length ; i++){
        // giohangHTML += this.CacSanPhamTrongGioHang[i].laySanpham().ten;
        giohangHTML += `
              <div class="row motsanpham">
                <div class="col-sm-2">
                  <img
                    src="${this.CacSanPhamTrongGioHang[i].laySanpham().anh}"
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="col-sm-4">
                  <a href="" class="tieude">${this.CacSanPhamTrongGioHang[i].laySanpham().ten}</a>
                  <div class="noidungsp">
                  ${this.CacSanPhamTrongGioHang[i].laySanpham().mota}
                  </div>
                </div>
                <div class="col-sm-2">
                  <div class="giatiensp">${this.CacSanPhamTrongGioHang[i].laySanpham().gia} VND</div>
                  <div class="badge badge-warning">-12%</div>
                </div>
                <div class="col-sm-2">
                  <input type="number" data-idsanpham="${this.CacSanPhamTrongGioHang[i].laySanpham().id}" class="soluongsp" min="1" value="${this.CacSanPhamTrongGioHang[i].laysoluong()}" />
                </div>
                <div class="col-sm-2">
                  <div data-idsanpham="${this.CacSanPhamTrongGioHang[i].laySanpham().id}" class="btn btn-danger xoasp">Delete</div>
                </div>
            </div>
        `
      }
      return giohangHTML;
    }
  constructor(){

  }
}