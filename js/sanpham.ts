console.log("Chuc nang gio hang");
// B1 tao class san pham su dung accessor
export class SanPham {
  // properties - thuoc tinh
  private _id: number;
  private _ten: string;
  private _gia: number;
  private _anh: string;
  private _mota: string;
  private _tinhtrang: boolean;

  // id
  public get id() : number {
    return this._id;
  }
  public set id(v:number) {
    this._id = v;
  }

  // ten
  public get ten() : string {
    return this._ten;
  }
  public set ten(v:string) {
    this._ten = v;
  }
  // gia
  public get gia() : number {
    return this._gia;
  }
  public set gia(v:number) {
    this._gia = v;
  }
  // mota
  public get mota() : string {
    return this._mota;
  }
  public set mota(v:string) {
    this._mota = v;
  }
  // anh
  public get anh() : string {
    return this._anh;
  }
  public set anh(v:string) {
    this._anh = v;
  }
  // tinhtrang
  public get tinhtrang() : boolean {
    return this._tinhtrang;
  }
  public set tinhtrang(v:boolean) {
    this._tinhtrang = v;
  }
  // constructor
  constructor(id: number, ten: string, gia: number, anh: string, mota: string,tinhtrang: boolean){
    // goi ham set
    this.id = id;
    this.ten =ten;
    this.gia = gia;
    this.anh = anh;
    this.mota = mota;
    this.tinhtrang = tinhtrang;
  }

}
// Xay dung class quan ly cac ham tuong tac voi san pham
