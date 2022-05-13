import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllHoaDon } from "../../Features/HoaDonSlice";
import { getAllSanPham } from "../../Features/SanPhamSlice";

export default function LichSuMuaHang() {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const allHoaDon = useSelector((state) => state.listHoaDon);
  const allSP = useSelector((state) => state.listSanPham);
  console.log(allSP.listSanPham.product);
  console.log(allHoaDon?.listHoaDon?.invoices);
  useEffect(() => {
    dispatch(getAllHoaDon());
    dispatch(getAllSanPham());
  }, []);
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };
  return (
    <div
      className="col-start-2 col-span-3 border-[1px] border-gray-300 rounded-xl text-center 
    md:mt-[0px] mt-[10px]"
    >
      <p className="text-[25px] mx-auto text-red-600">Đơn hàng đã mua</p>
      <table className="text-center my-[10px] table table-hover">
        <thead>
          <tr>
            <th className="text-center">Địa chỉ</th>
            <th>Ngày mua</th>
            <th>Trạng thái</th>
            <th>Tổng tiền</th>
            <th>Sản phẩm</th>
          </tr>
        </thead>

        {allHoaDon?.listHoaDon?.invoices
          ? allHoaDon?.listHoaDon?.invoices.map((value, key) => {
              if (value.ID_User === user?.user?._id) {
                return (
                  <tbody className="text-[14px] md:text-[17px]">
                    <tr
                      key={key + "" + value._id}
                      className=" border border-slate-300 h-[50px]"
                    >
                      <td className="w-[300px] border-x">{value.Address}</td>
                      <td className="w-[100px] border-x">
                        {new Date(value.DateOfCreate).toLocaleDateString(
                          "vi-VI"
                        )}
                      </td>
                      <td className="w-[100px] border-x">
                        {value.Status === true ? "Đã xác nhận" : "Đang chờ"}
                      </td>
                      <td className="w-[100px] border-x"> {formatPrice(value.Total)}</td>
                     {/* san pham */}
                      <td className="">
                        <table className="text-[15px] w-full">
                          {value.InvoiceDetail.map((item) => {
                            return (
                              <tr className="w-full flex flex-row justify-between">
                                {allSP?.listSanPham?.product
                                  ? allSP?.listSanPham?.product.map((sp) => {
                                      if (item.ID_Product === sp._id) {
                                        return <td>{sp.Name}</td>;
                                      }
                                    })
                                  : ""}
                                <td> x {item.Count}</td>
                              </tr>
                            );
                          })}
                        </table>
                      </td>
                    </tr>
                  </tbody>
                );
              }
            })
          : ""}
      </table>
    </div>
  );
}
